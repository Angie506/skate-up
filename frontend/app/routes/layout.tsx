// @ts-nocheck
import { Outlet, useLoaderData } from "react-router";
import Sidebar from "../components/Sidebar.jsx";
import { mockThreads } from "../lib/mockThreads";

export async function clientLoader() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  // If env vars are missing, avoid calling fetch from the client and return
  // an empty threads list so the app doesn't crash in dev.
  if (!supabaseUrl || !supabaseKey) {
    console.warn(
      "VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. Returning mock threads for local development.",
    );
    return { threads: mockThreads };
  }

  const url = `${supabaseUrl}/rest/v1/threads?select=*&order=created_at.desc`;

  try {
    const response = await fetch(url, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch threads: ${response.status}`);
      return { threads: [] };
    }

    const threads = await response.json();
    return { threads };
    } catch (err) {
      // Network errors (DNS, CORS, offline) surface as TypeError: Failed to fetch
      console.error("Error fetching threads:", err);
      // Fall back to mock threads so the UI remains usable during development.
      return { threads: mockThreads };
    }
}

export async function clientAction({ request }) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const formData = await request.formData();
  const intent = formData.get("intent");
  const threadId = formData.get("threadId");

  if (intent === "delete" && threadId) {
    if (!supabaseUrl || !supabaseKey) {
      return { error: "Supabase keys not configured in environment" };
    }

    try {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/threads?id=eq.${threadId}`,
        {
          method: "DELETE",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        },
      );

      if (!response.ok) {
        return { error: `Failed to delete thread: ${response.status}` };
      }

      return { success: true };
    } catch (error) {
      return { error: error.message };
    }
  }

  return null;
}

export default function Layout() {
  const { threads } = useLoaderData();

  return (
    <div className="app-layout">
      <Sidebar threads={threads} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

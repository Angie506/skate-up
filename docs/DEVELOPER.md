# Developer Quickstart — SkateUp

This document explains how to run the frontend locally, configure environment variables, and seed the included Supabase SQL.

## Prerequisites
- Node.js (v18+ recommended) and npm
- Optional: Docker Desktop if you prefer to run containers

## Install dependencies

```bash
# from repository root
npm run install-frontend
```

## Run dev server

```bash
# from repository root
npm run dev
# The frontend dev server (Vite) will run and serve the app (usually on http://localhost:5173)
```

## Environment variables

Create `frontend/.env` (this file is ignored by git) and set:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

If you don't set these variables the application will use `frontend/app/lib/mockThreads.js` as a fallback for development.

## Seed Supabase

A seed SQL file is included at `supabase/seed.sql`. To populate your Supabase database:

1. Open your Supabase project dashboard.
2. Go to the SQL editor.
3. Copy the contents of `supabase/seed.sql` and run it.

After seeding, reload the app in your browser to see the seeded threads.

## Notes & best practices
- `frontend/.env` is intentionally ignored in this repository to avoid committing keys.
- Use the Supabase web UI for manual seeding. If you'd like, I can add an automated seed script that posts data to the REST API (this requires local environment variables and should be run securely).

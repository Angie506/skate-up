import { index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/layout.tsx", [
    index("routes/home.tsx"),
    route("routes", "routes/routes.tsx"),
    route("forecast", "routes/forecast.tsx"),
    route("you", "routes/you.tsx"),
  ]),
];

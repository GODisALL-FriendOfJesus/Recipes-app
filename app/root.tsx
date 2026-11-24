import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/app-layout.tsx", [
    index("routes/discover.tsx"),
    route("discover", "routes/discover.tsx", { id: "discover-page" }),
    route("recipes", "routes/recipes.tsx"),
    route("pantry", "routes/pantry.tsx"),
    route("settings", "routes/settings.tsx"),
    route("login", "routes/login.tsx"),
  ]),
] satisfies RouteConfig;
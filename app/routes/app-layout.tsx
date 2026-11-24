import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "/discover", label: "Discover" },
  { to: "/recipes", label: "Recipes" },
  { to: "/pantry", label: "Pantry" },
  { to: "/settings", label: "Settings" },
  { to: "/login", label: "Login" },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <aside className="w-60 shrink-0 border-r border-slate-200 bg-white p-4 flex flex-col gap-2">
        <div className="px-3 py-2 text-lg font-bold tracking-tight text-emerald-700">
          Recipes & Pantry
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
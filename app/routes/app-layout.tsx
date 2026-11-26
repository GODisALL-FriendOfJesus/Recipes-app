import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "/", label: "Discover", end: true },
  { to: "/recipes", label: "Recipes" },
  { to: "/pantry", label: "Pantry" },
  { to: "/settings", label: "Settings" },
  { to: "/login", label: "Login" },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <aside className="w-60 border-r border-slate-200 bg-white p-4 space-y-4">
        <div className="font-bold text-lg px-2">Recipes & Pantry</div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
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
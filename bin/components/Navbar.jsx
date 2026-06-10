import { NavLink, Link } from "react-router-dom";
import { authNavigation, mainNavigation } from "../data/navigation";

function Navbar() {
  const linkClass = ({ isActive }) =>
    [
      "rounded-md px-3 py-2 text-sm font-semibold transition",
      isActive
        ? "bg-emerald-100 text-emerald-900"
        : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800",
    ].join(" ");

  return (
    <header className="sticky top-0 z-20 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
            BS
          </span>
          <div>
            <p className="text-lg font-bold leading-none text-emerald-950">
              BankSampah.id
            </p>
            <p className="text-xs font-medium text-emerald-700">
              Tabung sampah, jaga bumi
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {mainNavigation.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          {authNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  "rounded-md px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-emerald-800 text-white"
                    : "border border-emerald-200 text-emerald-800 hover:bg-emerald-50",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

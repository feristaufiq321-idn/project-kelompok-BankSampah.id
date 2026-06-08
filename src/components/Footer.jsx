import { Link } from "react-router-dom";
import { mainNavigation } from "../data/navigation";

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">BankSampah.id</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50">
            Mendukung pengelolaan sampah berbasis komunitas melalui pencatatan
            transaksi, edukasi lingkungan, dan akses informasi bank sampah.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {mainNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm text-emerald-50 transition hover:text-lime-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/lupa-sandi"
            className="text-sm text-emerald-50 transition hover:text-lime-200"
          >
            Lupa Sandi
          </Link>
        </div>
      </div>
      <div className="border-t border-emerald-800 px-6 py-4 text-center text-sm text-emerald-100">
        © 2026 BankSampah.id. Semua hak dilindungi.
      </div>
    </footer>
  );
}

export default Footer;

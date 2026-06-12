import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Tautan reset kata sandi telah dikirim ke email Anda.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f3efff_45%,#e8f7ea_100%)] px-6 py-16 text-slate-800">
      <div className="absolute -right-20 bottom-[-5rem] h-80 w-80 rounded-full bg-emerald-300/35 blur-3xl" />
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center">
        <div className="w-full max-w-lg rounded-[2rem] border border-emerald-100 bg-white shadow-[0_24px_70px_rgba(16,185,129,0.12)]">
          <div className="h-2 rounded-t-[2rem] bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-300" />

          <div className="px-6 py-10 sm:px-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                BankSampah.id
              </p>

              <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-800 ring-1 ring-emerald-100">
                🔒
              </div>

              <h1 className="mt-6 text-3xl font-bold text-emerald-950 sm:text-4xl">
                Lupa Kata Sandi?
              </h1>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Jangan khawatir. Masukkan alamat email yang terdaftar di akun
                Anda, dan kami akan mengirimkan instruksi untuk mengatur ulang
                kata sandi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Alamat Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSuccessMessage("");
                  }}
                  placeholder="contoh@email.com"
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-emerald-500"
              >
                Kirim Tautan Reset
              </button>

              {successMessage ? (
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  {successMessage}
                </div>
              ) : null}
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/login"
                className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Kembali ke halaman Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

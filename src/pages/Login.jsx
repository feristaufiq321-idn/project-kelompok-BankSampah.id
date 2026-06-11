import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 flex items-center justify-center px-6 py-12">
      {/* Background Effects */}
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-green-400/5 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <span className="text-4xl">♻️</span>
          </div>
          <h1 className="text-3xl font-bold text-white">BankSampah.id</h1>
          <p className="mt-2 text-emerald-50/80">Masuk ke akun Anda</p>
        </div>

        {/* Login Card */}
        <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-md p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-emerald-50/90">
                Alamat Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-12 py-3 text-white placeholder:text-emerald-50/50 outline-none transition focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-emerald-50/90">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan password"
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-12 py-3 text-white placeholder:text-emerald-50/50 outline-none transition focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-300 transition"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/30 bg-white/5 text-emerald-500 focus:ring-emerald-400 focus:ring-offset-0"
                />
                <span className="text-emerald-50/80">Ingat saya</span>
              </label>
              <Link to="/lupa-sandi" className="text-emerald-300 hover:text-emerald-200 transition">
                Lupa password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-green-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Masuk Sekarang
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white/10 px-4 text-emerald-50/60">atau</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-emerald-50/80">
              Belum punya akun?{" "}
              <Link to="/register" className="font-semibold text-emerald-300 hover:text-emerald-200 transition">
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-50/70 hover:text-emerald-50 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
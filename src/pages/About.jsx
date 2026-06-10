import aboutHero from "../assets/images/about-hero.png";

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M20 4C14 4 8 6.5 5.5 11C4.2 13.2 4 15.8 4.3 18.2C4.4 19 5 19.6 5.8 19.7C8.2 20 10.8 19.8 13 18.5C17.5 16 20 10 20 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 16.5C9.2 14.7 11.5 12.8 15 10.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 3.5L19 6.5V12C19 16.5 15.9 19.9 12 20.5C8.1 19.9 5 16.5 5 12V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.1L11.1 14L14.8 10.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M6 7.5C6 6.12 7.12 5 8.5 5H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 16.5C18 17.88 16.88 19 15.5 19H12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 5L18 5L18 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19L6 19L6 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M5 19V5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 19H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 15L11.5 11.5L14.2 13.8L18 8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function About() {
  const workSteps = [
    {
      number: "1",
      title: "Cari",
      description: "Temukan bank sampah terdekat.",
      icon: "🔍",
    },
    {
      number: "2",
      title: "Pilah",
      description: "Pisahkan sampah organik dan anorganik.",
      icon: "♻️",
    },
    {
      number: "3",
      title: "Setor",
      description: "Bawa sampah ke lokasi.",
      icon: "🚚",
    },
    {
      number: "4",
      title: "Hasil",
      description: "Dapatkan saldo atau poin reward.",
      icon: "💵",
    },
    {
      number: "5",
      title: "Pantau",
      description: "Cek histori transaksi di aplikasi.",
      icon: "📈",
    },
  ];

  const values = [
    {
      title: "Sustainable",
      description:
        "Setiap aksi berfokus pada keberlanjutan lingkungan jangka panjang, menjaga keseimbangan ekosistem.",
      icon: "🌿",
    },
    {
      title: "Easy",
      description:
        "Akses layanan kapan saja dengan antarmuka yang ramah pengguna.",
      icon: "⚡",
    },
    {
      title: "Transparent",
      description:
        "Pencatatan data real-time, dapat dipercaya, dan terbuka untuk semua pengguna.",
      icon: "✅",
    },
    {
      title: "Educative",
      description:
        "Kami menyediakan literatur dan panduan praktis untuk meningkatkan kesadaran daur ulang di tingkat rumah tangga.",
      icon: "🎓",
    },
  ];

  return (
    <div className="w-full bg-[#f6faf7] text-[#163124]">
      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              Platform Daur Ulang Digital
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#163124] md:text-5xl lg:text-6xl">
              Mewujudkan Lingkungan{" "}
              <span className="bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text italic text-transparent">
                Lestari
              </span>{" "}
              Bersama
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Platform digital yang menghubungkan masyarakat dengan bank sampah
              lokal, mempermudah pengelolaan sampah, dan memberikan nilai
              ekonomis untuk masa depan yang lebih hijau.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-700 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:from-emerald-800 hover:to-emerald-600">
                Mulai Bergerak
              </button>
              <div className="inline-flex items-center rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
                Mendukung ekonomi sirkular yang berkelanjutan
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "1.200+", label: "Pengguna" },
                { value: "85+", label: "Bank Sampah" },
                { value: "12 Ton", label: "Sampah Terkelola" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-[0_16px_40px_rgba(16,185,129,0.08)]"
                >
                  <p className="text-xl font-bold text-emerald-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-emerald-300/30 via-transparent to-lime-200/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 p-4 shadow-[0_28px_80px_rgba(16,185,129,0.18)]">
              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-50/90 backdrop-blur">
                About BankSampah.id
              </div>
              <img
                src={aboutHero}
                alt="Ilustrasi Bank Sampah Indonesia"
                className="h-[320px] w-full rounded-2xl object-cover md:h-[380px]"
              />
            </div>
          </div>
        </section>

        {/* Tentang Platform */}
        <section className="bg-[#f0edff] px-6 py-20 text-center md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1f1d2b] md:text-4xl">
              Tentang Platform Kami
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              BankSampah.id lahir dari kepedulian terhadap krisis pengelolaan
              limbah. Kami merancang ekosistem digital yang menyederhanakan
              proses daur ulang, memberikan edukasi berkelanjutan, dan
              menciptakan sirkular ekonomi bagi setiap rumah tangga.
              Pendekatan kami menggabungkan teknologi modern dengan kearifan
              lokal untuk menciptakan dampak nyata.
            </p>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-12">
          <div className="group rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_70px_rgba(16,185,129,0.12)] md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100">
              <LeafIcon />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-[#163124]">Visi Kami</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Menjadi pelopor transformasi pengelolaan sampah digital di
              Indonesia yang menciptakan masyarakat peduli lingkungan dan
              sejahtera melalui ekonomi sirkular pada tahun 2030.
            </p>
          </div>

          <div className="group rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_70px_rgba(16,185,129,0.12)] md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100">
              <ShieldIcon />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-[#163124]">Misi Kami</h3>
            <ul className="mt-4 space-y-3 leading-7 text-slate-600">
              <li>• Mengintegrasikan teknologi untuk transparansi data.</li>
              <li>• Memberdayakan pengelola bank sampah lokal.</li>
              <li>• Menyediakan edukasi lingkungan yang mudah diakses.</li>
            </ul>
          </div>
        </section>

        {/* Cara Kerja */}
        <section className="bg-[linear-gradient(180deg,#edf7f0_0%,#f6faf7_100%)] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Proses Layanan
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#163124] md:text-4xl">
                Cara Kerja yang Mudah dan Transparan
              </h2>
              <p className="mt-4 text-slate-600">
                Lima langkah sederhana untuk mengubah sampah menjadi manfaat
                nyata.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-5 md:gap-5">
              {workSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative rounded-[1.75rem] border border-emerald-100 bg-white p-6 text-left shadow-[0_18px_45px_rgba(15,118,110,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,118,110,0.12)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100">
                      {step.number === "1" && <WorkflowIcon />}
                      {step.number === "2" && <LeafIcon />}
                      {step.number === "3" && <WorkflowIcon />}
                      {step.number === "4" && <ChartIcon />}
                      {step.number === "5" && <ChartIcon />}
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#163124]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                  {index < workSteps.length - 1 ? (
                    <div className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-emerald-200 md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nilai Utama */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Fondasi Produk
            </p>
            <h2 className="text-3xl font-bold text-[#163124] md:text-4xl">
              Nilai Utama Kami
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_18px_50px_rgba(15,118,110,0.08)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(15,118,110,0.12)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100">
                    {value.title === "Sustainable" && <LeafIcon />}
                    {value.title === "Easy" && <WorkflowIcon />}
                    {value.title === "Transparent" && <ShieldIcon />}
                    {value.title === "Educative" && <ChartIcon />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#163124]">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
                      Core value
                    </p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
          <div className="rounded-[2rem] bg-gradient-to-r from-emerald-950 to-emerald-800 px-6 py-16 text-center text-white shadow-[0_24px_70px_rgba(6,78,59,0.25)] md:px-12">
            <h2 className="text-3xl font-bold md:text-5xl">
              Siap Membawa Perubahan?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
              Bergabunglah dengan ribuan warga lainnya yang telah berkontribusi
              menjaga bumi sambil menikmati manfaat ekonomis.
            </p>
            <button className="mt-8 rounded-lg bg-white px-8 py-4 text-sm font-bold text-green-900 transition hover:bg-green-100">
              Mari Bergabung
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
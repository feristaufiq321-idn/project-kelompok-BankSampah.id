import aboutHero from "../assets/images/about-hero.png";

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
    <div className="w-full bg-[#fbf8ff] text-[#1f1d2b]">
      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-12">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-[#1f1d2b] md:text-5xl lg:text-6xl">
              Mewujudkan Lingkungan{" "}
              <span className="italic text-green-900">Lestari</span> Bersama
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Platform digital yang menghubungkan masyarakat dengan bank sampah
              lokal, mempermudah pengelolaan sampah, dan memberikan nilai
              ekonomis untuk masa depan yang lebih hijau.
            </p>

            <button className="mt-8 rounded-lg bg-green-900 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-green-800">
              Mulai Bergerak
            </button>
          </div>

          <div className="rounded-3xl bg-[#9caf88] p-6 shadow-xl">
            <img
              src={aboutHero}
              alt="Ilustrasi Bank Sampah Indonesia"
              className="h-[320px] w-full rounded-2xl object-cover md:h-[380px]"
            />
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
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-200 text-2xl">
              👁️
            </div>
            <h3 className="text-2xl font-bold text-green-900">Visi Kami</h3>
            <p className="mt-4 leading-7 text-gray-600">
              Menjadi pelopor transformasi pengelolaan sampah digital di
              Indonesia yang menciptakan masyarakat peduli lingkungan dan
              sejahtera melalui ekonomi sirkular pada tahun 2030.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-200 text-2xl">
              🚩
            </div>
            <h3 className="text-2xl font-bold text-green-900">Misi Kami</h3>
            <ul className="mt-4 space-y-3 leading-7 text-gray-600">
              <li>✓ Mengintegrasikan teknologi untuk transparansi data.</li>
              <li>✓ Memberdayakan pengelola bank sampah lokal.</li>
              <li>✓ Menyediakan edukasi lingkungan yang mudah diakses.</li>
            </ul>
          </div>
        </section>

        {/* Cara Kerja */}
        <section className="bg-[#f0edff] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-[#1f1d2b] md:text-4xl">
              Cara Kerja
            </h2>
            <p className="mt-3 text-gray-600">
              5 langkah mudah menuju lingkungan bersih
            </p>

            <div className="relative mt-14 grid gap-8 md:grid-cols-5">
              {workSteps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-900 bg-white text-2xl shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 font-bold text-[#1f1d2b]">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nilai Utama */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <h2 className="text-center text-3xl font-bold text-[#1f1d2b] md:text-4xl">
            Nilai Utama Kami
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 text-3xl">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#1f1d2b]">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
          <div className="rounded-3xl bg-green-900 px-6 py-16 text-center text-white shadow-xl md:px-12">
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
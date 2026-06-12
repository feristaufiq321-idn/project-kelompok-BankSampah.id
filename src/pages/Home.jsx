import { Link } from "react-router-dom";

function Home() {
  const stats = [
    { label: "Nasabah Aktif", value: "850+" },
    { label: "Sampah Terkumpul", value: "12.5 Ton" },
    { label: "Bank Sampah Mitra", value: "35+" },
    { label: "Saldo Tersimpan", value: "Rp25 Juta" },
  ];

  const steps = [
    {
      title: "Pilah Sampah",
      desc: "Pisahkan sampah plastik, kertas, logam, dan lainnya dari rumah.",
    },
    {
      title: "Setor ke Mitra",
      desc: "Datangi bank sampah terdekat dan lakukan penimbangan.",
    },
    {
      title: "Dapatkan Tabungan",
      desc: "Nilai sampah akan masuk ke saldo tabungan Anda.",
    },
  ];

  const educations = [
    "♻️ Daur Ulang Plastik",
    "📦 Pengelolaan Kardus",
    "🥫 Pemanfaatan Kaleng",
    "🌱 Gaya Hidup Ramah Lingkungan",
  ];

  return (<div className="bg-emerald-50">
    {/* HERO */} <section className="mx-auto max-w-7xl px-6 py-20"> <div className="grid gap-10 lg:grid-cols-2 lg:items-center"> <div> <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
      🌱 Bank Sampah Digital Indonesia </span>

      ```
      <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-800">
        Ubah Sampah Menjadi
        <span className="text-emerald-600"> Tabungan Bernilai</span>
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        Platform pengelolaan sampah modern untuk membantu masyarakat
        menabung sampah, memantau transaksi, dan berkontribusi pada
        lingkungan yang lebih bersih.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/register"
          className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Mulai Menabung
        </Link>

        <Link
          to="/bank-sampah"
          className="rounded-lg border border-emerald-600 px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-100"
        >
          Temukan Bank Sampah
        </Link>
      </div>
    </div>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">
          Dampak Positif Bersama
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-emerald-100 p-5"
            >
              <p className="text-3xl font-bold text-emerald-700">
                {item.value}
              </p>
              <p className="text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

    {/* CARA KERJA */}
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
          Cara Kerja
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border bg-emerald-50 p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mb-2 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* EDUKASI */}
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
          Edukasi Lingkungan
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {educations.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 text-center shadow"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/edukasi"
            className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Lihat Semua Edukasi
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-emerald-700 py-16 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Siap Menjadi Bagian dari Perubahan?
        </h2>

        <p className="mt-4 text-lg text-emerald-100">
          Mulai menabung sampah hari ini dan bantu menciptakan lingkungan
          yang lebih bersih untuk masa depan.
        </p>

        <Link
          to="/register"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 hover:bg-emerald-100"
        >
          Daftar Sekarang
        </Link>
      </div>
    </section>
  </div>
);
}

export default Home;
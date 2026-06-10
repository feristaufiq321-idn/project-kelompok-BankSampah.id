function Contact() {
  const contactItems = [
    {
      label: "Telepon",
      values: ["+62 812 3456 7890", "+62 21 9876 5432"],
    },
    {
      label: "Email",
      values: ["halo@banksampah.id", "support@banksampah.id"],
    },
    {
      label: "Alamat Kantor",
      values: [
        "Bank Sampah Induk Surabaya",
        "Jl. Raya Keputih No. 51, Keputih, Sukolilo, Kota Surabaya, Jawa Timur 60111",
      ],
    },
  ];

  const contactHighlights = [
    {
      label: "Jam Operasional",
      value: "Senin - Jumat, 08.00 - 17.00 WIB",
    },
    {
      label: "Response Time",
      value: "Respon awal dalam 1x24 jam kerja",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara mendaftar sebagai nasabah Bank Sampah?",
      answer:
        "Anda dapat mendaftar melalui halaman registrasi, lalu menyiapkan data diri dasar untuk verifikasi akun dan aktivasi layanan.",
    },
    {
      question: "Berapa minimum deposit sampah yang bisa disetorkan?",
      answer:
        "Setoran dapat dimulai dari jumlah kecil selama sesuai kategori yang diterima oleh bank sampah mitra. Sistem akan menyesuaikan pencatatan sesuai jenis dan berat sampah.",
    },
    {
      question: "Bagaimana proses penarikan dana hasil tabungan sampah?",
      answer:
        "Saldo hasil tabungan dapat diajukan untuk penarikan sesuai jadwal layanan dan verifikasi transaksi yang berlaku di masing-masing cabang.",
    },
  ];

  return (
    <div className="w-full bg-[#f7fbf7] text-slate-800">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 px-6 py-20 text-white md:px-10 lg:px-12">
          <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-50/90 backdrop-blur">
                BankSampah.id Support
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Hubungi Kami
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/85 md:text-lg">
                Kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan,
                masukan, atau informasi lebih lanjut mengenai layanan
                pengelolaan sampah kami.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.12)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Informasi Kontak
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-emerald-950">
                      Hubungi Tim Kami
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Lokasi
                    </p>
                    <p className="mt-1 text-sm font-semibold text-emerald-950">
                      Surabaya
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Pilih kanal yang paling nyaman untuk menghubungi tim kami.
                </p>

                <div className="mt-8 space-y-6">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-[0_14px_35px_rgba(16,185,129,0.06)]"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {item.label}
                      </p>
                      <div className="mt-3 space-y-2 text-slate-700">
                        {item.values.map((value) => (
                          <p key={value} className="leading-7 text-slate-700">
                            {value}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {contactHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(16,185,129,0.12)]">
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 px-6 py-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
                    Jam Respons
                  </p>
                  <p className="mt-2 text-base leading-7 text-emerald-50/90">
                    Senin - Jumat, 08.00 - 17.00 WIB
                  </p>
                </div>
                <div className="px-6 py-5 text-sm leading-7 text-slate-600">
                  Untuk kebutuhan mendesak di luar jam operasional, kirim pesan
                  melalui form dan tim kami akan merespons secepatnya.
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.12)] md:p-10">
                <div className="flex flex-col gap-3 border-b border-emerald-100 pb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Form Kirim Pesan
                  </p>
                  <h2 className="text-2xl font-bold text-emerald-950 md:text-3xl">
                    Tulis pesan Anda
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                    Isi formulir di bawah ini dan kami akan menghubungi Anda
                    kembali sesegera mungkin.
                  </p>
                </div>

                <form className="mt-8 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      Nama Lengkap
                      <input
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      Alamat Email
                      <input
                        type="email"
                        placeholder="nama@email.com"
                        className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Subjek
                    <input
                      type="text"
                      placeholder="Tuliskan subjek pesan"
                      className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Pesan
                    <textarea
                      rows="6"
                      placeholder="Tulis pesan Anda di sini"
                      className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    />
                  </label>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-4 text-sm leading-7 text-slate-600">
                    Tim kami menjaga setiap pesan tetap tertata dan merespons
                    sesuai prioritas layanan.
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-emerald-500"
                  >
                    Kirim Pesan Sekarang
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eef8f1] px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Pertanyaan Populer
              </p>
              <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
                FAQ yang sering ditanyakan
              </h2>
            </div>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-800 transition group-open:text-emerald-800 md:text-lg">
                    {faq.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(6,78,59,0.35)] backdrop-blur-sm">
              <div className="grid gap-0 lg:grid-cols-5">
                <div className="flex flex-col justify-between p-8 text-white lg:col-span-2 lg:p-10">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
                      Lokasi Kami
                    </p>
                    <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                      Lokasi Kantor & Area Layanan
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-emerald-50/85 md:text-base">
                      Bank Sampah Induk Surabaya, Jl. Raya Keputih No. 51,
                      Keputih, Sukolilo, Kota Surabaya, Jawa Timur 60111.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-emerald-950">
                    <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                      Surabaya
                    </span>
                    <span className="rounded-full bg-lime-200 px-4 py-2 shadow-sm">
                      Area Layanan
                    </span>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/7g5U1239J8J7Z6AF7"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center justify-center rounded-2xl bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-lime-200"
                  >
                    Buka di Google Maps
                  </a>
                </div>

                <div className="p-4 pb-8 lg:col-span-3 lg:p-6 lg:pl-0">
                  <div className="rounded-[1.75rem] bg-emerald-950/30 p-3 shadow-inner shadow-black/10">
                    <iframe
                      title="Google Maps Bank Sampah Induk Surabaya"
                      src="https://www.google.com/maps?q=Bank%20Sampah%20Induk%20Surabaya&output=embed"
                      className="h-[360px] w-full rounded-2xl border-0 md:h-[520px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;

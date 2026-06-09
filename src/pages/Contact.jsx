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
        "Gedung EcoCenter Lt. 4, Jl. Sudirman No. 123, Senayan, Jakarta Selatan, 12190",
      ],
    },
  ];

  const faqs = [
    "Bagaimana cara mendaftar sebagai nasabah Bank Sampah?",
    "Berapa minimum deposit sampah yang bisa disetorkan?",
    "Bagaimana proses penarikan dana hasil tabungan sampah?",
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
                <h2 className="text-2xl font-bold text-emerald-950">
                  Informasi Kontak
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Pilih kanal yang paling nyaman untuk menghubungi tim kami.
                </p>

                <div className="mt-8 space-y-6">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-emerald-50/70 p-5 ring-1 ring-emerald-100"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {item.label}
                      </p>
                      <div className="mt-3 space-y-2 text-slate-700">
                        {item.values.map((value) => (
                          <p key={value} className="leading-7">
                            {value}
                          </p>
                        ))}
                      </div>
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
                  key={faq}
                  className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-800 transition group-open:text-emerald-800 md:text-lg">
                    {faq}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                    Tim kami akan membantu Anda melalui proses pendaftaran,
                    setoran, dan penarikan sesuai panduan layanan BankSampah.id.
                    Silakan kirim pesan bila membutuhkan penjelasan yang lebih
                    spesifik.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 shadow-[0_20px_60px_rgba(16,185,129,0.2)]">
            <div className="grid min-h-[320px] gap-0 lg:grid-cols-5">
              <div className="flex flex-col justify-between p-8 text-white lg:col-span-2 lg:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
                    Map Placeholder
                  </p>
                  <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                    Lokasi Kantor & Area Layanan
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-emerald-50/85 md:text-base">
                    Bagian ini dapat digunakan untuk menampilkan peta atau
                    ilustrasi lokasi kantor BankSampah.id sesuai desain Figma.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-emerald-950">
                  <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                    Jakarta Selatan
                  </span>
                  <span className="rounded-full bg-lime-200 px-4 py-2 shadow-sm">
                    EcoCenter
                  </span>
                </div>
              </div>

              <div className="relative min-h-[260px] lg:col-span-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(190,242,100,0.2),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_30%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full max-w-xl rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md md:p-10">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-4xl text-white shadow-lg">
                      🗺️
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-white md:text-2xl">
                      Peta Cabang BankSampah.id
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-emerald-50/85 md:text-base">
                      Ganti area ini dengan peta interaktif, gambar lokasi, atau
                      ilustrasi map sesuai kebutuhan tampilan akhir.
                    </p>
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

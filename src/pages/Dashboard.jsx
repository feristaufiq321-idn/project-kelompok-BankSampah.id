function IconBadge({ children }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/15 backdrop-blur">
      {children}
    </div>
  );
}

function Dashboard() {
  const stats = [
    { label: "Total Berat (Bulan Ini)", value: "45.2 kg" },
    { label: "Pendapatan (Bulan Ini)", value: "Rp 125.000" },
    { label: "CO2 Dihemat", value: "12.5 kg" },
    { label: "Peringkat Area", value: "#12 dari 150" },
  ];

  const transactions = [
    { title: "Setor Plastik & Kertas", value: "+ Rp 45.000", tone: "text-emerald-700" },
    { title: "Tukar Poin - Sembako", value: "- 1.200 Poin", tone: "text-amber-600" },
    { title: "Setor Logam & Kaca", value: "+ Rp 32.000", tone: "text-emerald-700" },
  ];

  const achievements = ["Penjaga Hutan", "Penyelamat Air", "Veteran", "Streak 30x"];

  return (
    <div className="min-h-screen bg-[#fbf8ff] px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-6 text-white shadow-[0_24px_70px_rgba(6,78,59,0.18)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                Dashboard BankSampah.id
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Selamat pagi, Sufa!
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/85 sm:text-base">
                Mari buat dampak positif untuk lingkungan hari ini.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-lg font-bold text-emerald-900">
                SA
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Sufa Anindya</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-50/75">
                  Pahlawan Sampah
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="h-full rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_50px_rgba(16,185,129,0.08)] sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Total Saldo Tabungan
                  </p>
                  <h2 className="mt-3 text-4xl font-bold text-emerald-950 sm:text-5xl">
                    Rp 1.250.000
                  </h2>
                  <p className="mt-3 text-sm text-slate-600">
                    Poin Reward 4.500
                  </p>
                </div>

                <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-emerald-500">
                  Tarik Dana
                </button>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-emerald-50 p-5">
                <div className="flex items-center justify-between text-sm font-semibold text-emerald-900">
                  <span>Pahlawan Sampah</span>
                  <span>Duta Bumi</span>
                </div>
                <div className="mt-3 h-3 rounded-full bg-white">
                  <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-emerald-700 to-lime-400" />
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Level Anda sedang naik. Terus kumpulkan setoran untuk menuju Duta Bumi.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_50px_rgba(16,185,129,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Aksi Cepat
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <button className="flex items-center gap-4 rounded-[1.5rem] bg-emerald-50 px-5 py-4 text-left transition hover:bg-emerald-100">
                  <IconBadge>
                    <span className="text-xl">⌁</span>
                  </IconBadge>
                  <div>
                    <p className="font-semibold text-emerald-950">Scan Setor</p>
                    <p className="text-sm text-slate-600">Setor via QR dan catat transaksi</p>
                  </div>
                </button>

                <button className="flex items-center gap-4 rounded-[1.5rem] bg-emerald-50 px-5 py-4 text-left transition hover:bg-emerald-100">
                  <IconBadge>
                    <span className="text-xl">🚚</span>
                  </IconBadge>
                  <div>
                    <p className="font-semibold text-emerald-950">Jemput Sampah</p>
                    <p className="text-sm text-slate-600">Ajukan penjemputan dari rumah</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_50px_rgba(16,185,129,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Lokasi Bank Sampah
              </p>
              <h3 className="mt-3 text-xl font-bold text-emerald-950">
                Bank Sampah Berseri
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Jl. Mawar No. 12, Kebayoran
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-2xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
                  Detail
                </button>
                <button className="rounded-2xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
                  Jadwal
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border border-emerald-100 bg-white p-5 shadow-[0_18px_45px_rgba(16,185,129,0.07)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-bold text-emerald-950">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_50px_rgba(16,185,129,0.08)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Riwayat Transaksi
                </p>
                <h3 className="mt-2 text-2xl font-bold text-emerald-950">
                  Aktivitas Terbaru
                </h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                3 transaksi
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.title}
                  className="flex items-center justify-between rounded-[1.4rem] border border-emerald-100 px-5 py-4"
                >
                  <div>
                    <p className="font-semibold text-emerald-950">
                      {transaction.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">Hari ini</p>
                  </div>
                  <span className={`text-sm font-bold ${transaction.tone}`}>
                    {transaction.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_50px_rgba(16,185,129,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Pencapaian
            </p>
            <h3 className="mt-2 text-2xl font-bold text-emerald-950">
              Badge Kamu
            </h3>

            <div className="mt-6 grid gap-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 rounded-[1.25rem] bg-emerald-50 px-4 py-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-800 shadow-sm">
                    ✦
                  </div>
                  <span className="font-medium text-emerald-950">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

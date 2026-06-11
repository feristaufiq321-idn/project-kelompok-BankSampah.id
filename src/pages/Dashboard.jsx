import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl p-6">
      <div className="mb-8 rounded-2xl bg-emerald-700 p-6 text-white">
        <h1 className="text-3xl font-bold">
          Halo, Pahlawan Lingkungan 👋
        </h1>
        <p className="mt-2">
          Selamat datang di Dashboard BankSampah.id
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Saldo"
          value="Rp 120.000"
          subtitle="+ Rp 15.000 minggu ini"
        />

        <DashboardCard
          title="Total Sampah"
          value="25 Kg"
          subtitle="Terkumpul bulan ini"
        />

        <DashboardCard
          title="Transaksi"
          value="18"
          subtitle="Riwayat transaksi"
        />

        <DashboardCard
          title="Poin Lingkungan"
          value="340"
          subtitle="Terus bertambah"
        />
      </div>
    </div>
  );
}

export default Dashboard;

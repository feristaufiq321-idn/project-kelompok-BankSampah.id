function Transactions() {
  const transactions = [
    {
      date: "10 Juni 2026",
      type: "Setoran",
      waste: "Botol Plastik",
      weight: "2 Kg",
      amount: "Rp 10.000",
      status: "Berhasil",
    },
    {
      date: "09 Juni 2026",
      type: "Setoran",
      waste: "Kardus",
      weight: "5 Kg",
      amount: "Rp 25.000",
      status: "Berhasil",
    },
    {
      date: "08 Juni 2026",
      type: "Penarikan",
      waste: "-",
      weight: "-",
      amount: "Rp 50.000",
      status: "Diproses",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Buku Tabungan & Transaksi
        </h1>

        <p className="text-gray-600 mb-8">
          Pantau saldo tabungan sampah dan riwayat transaksi Anda.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Saldo Saat Ini</h3>
            <p className="text-2xl font-bold text-green-600">
              Rp 125.000
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Total Setoran</h3>
            <p className="text-2xl font-bold">
              Rp 185.000
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Jumlah Transaksi</h3>
            <p className="text-2xl font-bold">
              12
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold">
              Riwayat Transaksi
            </h2>
          </div>

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Tanggal</th>
                <th className="text-left p-3">Jenis</th>
                <th className="text-left p-3">Sampah</th>
                <th className="text-left p-3">Berat</th>
                <th className="text-left p-3">Nominal</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.type}</td>
                  <td className="p-3">{item.waste}</td>
                  <td className="p-3">{item.weight}</td>
                  <td className="p-3">{item.amount}</td>
                  <td className="p-3">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
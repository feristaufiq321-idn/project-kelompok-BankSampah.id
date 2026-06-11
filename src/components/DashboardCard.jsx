function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm text-slate-500">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      {subtitle && (
        <p className="mt-2 text-sm text-emerald-600">{subtitle}</p>
      )}
    </div>
  );
}

export default DashboardCard;
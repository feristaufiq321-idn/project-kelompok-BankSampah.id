function PlaceholderPage({ title, description, badge = "BankSampah.id" }) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-14">
      <div className="w-full rounded-lg border border-emerald-100 bg-white p-8 shadow-sm">
        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          {badge}
        </span>
        <h1 className="mt-5 text-3xl font-bold text-emerald-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PlaceholderPage;

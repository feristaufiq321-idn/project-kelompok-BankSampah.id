import { useId, useMemo, useState } from "react";

// ─── Data: Navigation ────────────────────────────────────────────────────────

const navigationItems = [
  { label: "Beranda", href: "#", active: false },
  { label: "Tentang Kami", href: "#", active: false },
  { label: "Bank Sampah", href: "#", active: true },
  { label: "Edukasi", href: "#", active: false },
  { label: "Transaksi", href: "#", active: false },
  { label: "Kontak", href: "#", active: false },
];

// ─── Data: Footer ─────────────────────────────────────────────────────────────

const platformLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#" },
  { label: "Edukasi", href: "#" },
];

const legalLinks = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
];

const helpLinks = [{ label: "Pusat Bantuan", href: "#" }];

// ─── Data: Bank Sampah Section ────────────────────────────────────────────────

const operationalOptions = [
  { value: "all", label: "Semua Jam" },
  { value: "open", label: "Sedang Buka" },
  { value: "morning", label: "Buka Pagi" },
  { value: "afternoon", label: "Buka Siang" },
];

const partnershipOptions = [
  { value: "all", label: "Semua Status" },
  { value: "official", label: "Mitra Resmi" },
  { value: "independent", label: "Independen" },
];

const categories = [
  {
    id: "plastik-kertas",
    title: "Plastik & Kertas",
    subtitle: "Daur ulang umum",
    containerClassName:
      "inline-flex min-w-[200px] items-center gap-3 pl-4 pr-6 py-4 relative self-stretch flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#c0c9bb]",
  },
  {
    id: "organik",
    title: "Organik",
    subtitle: "Pembuatan kompos",
    containerClassName:
      "pl-4 pr-6 py-4 inline-flex min-w-[200px] items-center gap-3 relative self-stretch flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#c0c9bb]",
  },
  {
    id: "e-waste",
    title: "E-Waste",
    subtitle: "Elektronik bekas",
    containerClassName:
      "pl-4 pr-10 py-4 inline-flex min-w-[200px] items-center gap-3 relative self-stretch flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#c0c9bb]",
  },
  {
    id: "minyak-jelantah",
    title: "Minyak Jelantah",
    subtitle: "Pengepul khusus",
    containerClassName:
      "pl-4 pr-6 py-4 inline-flex min-w-[200px] items-center gap-3 relative self-stretch flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#c0c9bb]",
  },
];

const locations = [
  {
    id: "melati-berseri",
    badge: {
      label: "MITRA RESMI",
      className:
        "inline-flex flex-col items-start px-2 py-0.5 relative flex-[0_0_auto] bg-[#55de9e33] rounded-full",
      textClassName:
        "flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] text-[#005233] text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap relative w-fit font-normal",
    },
    title: "Bank Sampah Melati Berseri",
    address: "Jl. Sudirman No. 45, Jakarta Selatan",
    distance: "0.8",
    statusLabel: "Buka",
    statusDetail: "sampai 16:00",
    isOpen: true,
  },
  {
    id: "ksm-hijau-daun",
    badge: {
      label: "INDEPENDEN",
      className:
        "inline-flex flex-col items-start px-2 py-0.5 relative flex-[0_0_auto] bg-[#d6e5ef80] rounded-full",
      textClassName:
        "flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] text-[#2f3d45] text-[10px] tracking-[0.50px] leading-[15px] whitespace-nowrap relative w-fit font-normal",
    },
    title: "KSM Hijau Daun",
    address: "Komplek Beringin Blok C/12, Jakarta Timur",
    distance: "3.5",
    statusLabel: "Buka",
    statusDetail: "sampai 15:00",
    isOpen: true,
  },
  {
    id: "berkah-alam",
    title: "Bank Sampah Berkah Alam",
    address: "Jl. Melati Ujung No. 8, Jakarta Pusat",
    distance: "5.0",
    statusLabel: "Tutup",
    statusDetail: "Buka besok 08:00",
    isOpen: false,
  },
];

// ─── Component: FooterLinkGroup ───────────────────────────────────────────────

const FooterLinkGroup = ({ title, links, className = "" }) => {
  return (
    <nav
      aria-label={title}
      className={`relative w-full h-fit flex flex-col items-start gap-2 pt-0 px-0 ${className}`}
    >
      <div className="pt-0 pb-2 px-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] text-sm tracking-[0.14px] leading-5">
          {title}
        </h2>
      </div>
      <ul className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex self-stretch w-full flex-col items-start relative flex-[0_0_auto]"
          >
            <a
              href={link.href}
              className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6 focus:outline-none focus-visible:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ─── Component: PrimaryNavigationSection ─────────────────────────────────────

const PrimaryNavigationSection = () => {
  return (
    <header className="flex flex-col w-full items-start bg-[#fcf8ff] shadow-[0px_1px_2px_#0000000d]">
      <div className="flex max-w-screen-xl items-center justify-between pl-16 pr-16 py-4 relative w-full flex-[0_0_auto]">
        <a
          href="#"
          aria-label="BankSampah.id"
          className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00450d]">
            <span className="text-white text-xs font-bold">BS</span>
          </div>
          <span className="[font-family:'Playfair_Display-Regular',Helvetica] text-[#00450d] text-2xl tracking-[0] leading-8 whitespace-nowrap font-normal">
            BankSampah.id
          </span>
        </a>
        <nav
          aria-label="Primary navigation"
          className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
        >
          {navigationItems.map((item) =>
            item.active ? (
              <a
                key={item.label}
                href={item.href}
                aria-current="page"
                className="inline-flex pt-0 pb-1 px-0 border-b-2 border-[#00450d] flex-col items-start relative flex-[0_0_auto]"
              >
                <span className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#00450d] text-sm tracking-[0.14px] leading-5 whitespace-nowrap font-normal">
                  {item.label}
                </span>
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex flex-col items-start relative flex-[0_0_auto]"
              >
                <span className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap font-normal">
                  {item.label}
                </span>
              </a>
            )
          )}
        </nav>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <button
            type="button"
            className="flex-col justify-center inline-flex items-center relative flex-[0_0_auto] cursor-pointer"
            aria-label="Login"
          >
            <span className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap font-normal">
              Login
            </span>
          </button>
          <button
            type="button"
            className="flex-col justify-center px-6 py-2 bg-[#00450d] rounded-lg shadow-[0px_1px_2px_#0000000d] inline-flex items-center relative flex-[0_0_auto] cursor-pointer"
            aria-label="Register"
          >
            <span className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap">
              Register
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

// ─── Component: SiteFooterLinksSection ───────────────────────────────────────

const SiteFooterLinksSection = () => {
  return (
    <footer className="flex flex-col w-full items-start bg-[#e8e5ff]">
      <div className="grid grid-cols-4 max-w-screen-xl h-fit gap-6 px-16 py-20">
        <div className="relative w-full h-fit flex flex-col items-start gap-4">
          <div className="[font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#00450d] text-[32px] tracking-[0] leading-10">
            BankSampah.id
          </div>
          <p className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6">
            Platform digital terdepan untuk
            <br />
            pengelolaan sampah yang
            <br />
            berkelanjutan dan bernilai ekonomi.
          </p>
        </div>
        <FooterLinkGroup title="Platform" links={platformLinks} className="pb-1" />
        <FooterLinkGroup title="Legal" links={legalLinks} className="pb-9" />
        <FooterLinkGroup title="Bantuan" links={helpLinks} className="pb-[68px]" />
      </div>
      <div className="flex-col items-start px-0 py-6 border-[#c0c9bb4c] flex relative self-stretch w-full flex-[0_0_auto] border-t border-solid">
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <p className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e] text-base text-center tracking-[0] leading-6 whitespace-nowrap font-normal">
            © 2024 BankSampah.id. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

// ─── Component: WasteBankLocatorSection ──────────────────────────────────────

const WasteBankLocatorSection = () => {
  const locationInputId = useId();
  const operationalSelectId = useId();
  const partnershipSelectId = useId();

  const [locationQuery, setLocationQuery] = useState("");
  const [operationalValue, setOperationalValue] = useState("all");
  const [partnershipValue, setPartnershipValue] = useState("all");

  const filteredLocations = useMemo(() => {
    return locations.filter((item) => {
      const matchesLocation =
        locationQuery.trim() === "" ||
        item.title.toLowerCase().includes(locationQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(locationQuery.toLowerCase());

      const matchesOperational =
        operationalValue === "all" ||
        (operationalValue === "open" && item.isOpen) ||
        (operationalValue === "morning" && item.isOpen) ||
        (operationalValue === "afternoon" && item.isOpen);

      const badgeLabel = item.badge?.label.toLowerCase() || "";
      const matchesPartnership =
        partnershipValue === "all" ||
        (partnershipValue === "official" && badgeLabel.includes("mitra resmi")) ||
        (partnershipValue === "independent" && badgeLabel.includes("independen"));

      return matchesLocation && matchesOperational && matchesPartnership;
    });
  }, [locationQuery, operationalValue, partnershipValue]);

  return (
    <section
      className="flex flex-col max-w-screen-xl w-full items-start gap-20 px-16 py-8"
      aria-label="Temukan Bank Sampah Terdekat"
    >
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <nav
            className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
            aria-label="Breadcrumb"
          >
            <a
              href="#"
              className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap font-normal"
            >
              Beranda
            </a>
            <span className="text-[#41493e] text-sm">›</span>
            <span
              className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#00450d] text-sm tracking-[0.14px] leading-5 whitespace-nowrap font-normal"
              aria-current="page"
            >
              Bank Sampah
            </span>
          </nav>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#00450d] text-5xl tracking-[-0.96px] leading-[60px]">
              Temukan Bank Sampah Terdekat
            </h1>
          </div>
          <div className="flex flex-col max-w-2xl items-start relative flex-[0_0_auto]">
            <p className="mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e] text-lg tracking-[0] leading-7 font-normal">
              Mulai langkah kecilmu untuk lingkungan. Cari dan temukan fasilitas pengelolaan
              <br />
              sampah di sekitarmu.
            </p>
          </div>
        </div>

        <form
          className="flex items-end gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-3xl border border-solid border-[#c0c9bb] shadow-[0px_4px_20px_#1b5e200d]"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          aria-label="Pencarian bank sampah"
        >
          <div className="flex flex-col flex-1 items-start gap-1 relative">
            <label
              htmlFor={locationInputId}
              className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-xs tracking-[0] leading-4"
            >
              Lokasi
            </label>
            <input
              id={locationInputId}
              type="text"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              placeholder="Cari Kota atau Kecamatan..."
              className="w-full pl-4 pr-4 py-3 bg-[#fcf8ff] rounded-xl border border-solid border-[#c0c9bb] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] placeholder:text-gray-400 text-base tracking-[0] leading-6 outline-none"
              aria-label="Cari Kota atau Kecamatan"
            />
          </div>

          <div className="flex flex-col w-[220px] items-start gap-1 relative">
            <label
              htmlFor={operationalSelectId}
              className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-xs tracking-[0] leading-4"
            >
              Jam Operasional
            </label>
            <select
              id={operationalSelectId}
              value={operationalValue}
              onChange={(e) => setOperationalValue(e.target.value)}
              className="w-full pl-4 pr-4 py-3 bg-[#fcf8ff] rounded-xl border border-solid border-[#c0c9bb] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] text-base tracking-[0] leading-6 outline-none"
              aria-label="Pilih jam operasional"
            >
              {operationalOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-[220px] items-start gap-1 relative">
            <label
              htmlFor={partnershipSelectId}
              className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-xs tracking-[0] leading-4"
            >
              Status Kemitraan
            </label>
            <select
              id={partnershipSelectId}
              value={partnershipValue}
              onChange={(e) => setPartnershipValue(e.target.value)}
              className="w-full pl-4 pr-4 py-3 bg-[#fcf8ff] rounded-xl border border-solid border-[#c0c9bb] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] text-base tracking-[0] leading-6 outline-none"
              aria-label="Pilih status kemitraan"
            >
              {partnershipOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="justify-center gap-2 px-8 py-3 bg-[#00450d] rounded-xl shadow-[0px_1px_2px_#0000000d] inline-flex items-center relative flex-[0_0_auto] cursor-pointer"
            aria-label="Cari bank sampah"
          >
            <span className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap">
              Cari
            </span>
          </button>
        </form>

        <div
          className="flex items-start gap-4 pb-4 relative self-stretch w-full flex-[0_0_auto] overflow-x-auto"
          aria-label="Kategori sampah"
        >
          {categories.map((category) => (
            <article key={category.id} className={category.containerClassName}>
              <div className="flex w-10 h-10 items-center justify-center relative bg-[#efecff] rounded-full">
                <span className="text-[#00450d] text-xs font-bold">
                  {category.title.charAt(0)}
                </span>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#1a1a2e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap font-normal">
                  {category.title}
                </div>
                <div className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e] text-xs tracking-[0] leading-4 whitespace-nowrap font-normal">
                  {category.subtitle}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex h-[800px] items-start gap-6 relative self-stretch w-full">
        <div
          className="flex flex-col w-[451px] items-start gap-4 pr-2 py-0 relative self-stretch overflow-y-auto overflow-x-hidden"
          aria-label="Daftar bank sampah"
        >
          {filteredLocations.map((location) => {
            const cardClassName = location.isOpen
              ? "flex flex-col items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-3xl overflow-hidden border border-transparent shadow-[0px_4px_20px_#1b5e200f]"
              : "flex flex-col items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-3xl overflow-hidden border border-transparent shadow-[0px_4px_20px_#1b5e200f] opacity-80";
            const statusDotColor = location.isOpen ? "bg-[#75fbb8]" : "bg-[#717a6d]";
            const statusTextColor = location.isOpen ? "text-[#41493e]" : "text-[#717a6d]";
            const detailBorderColor = location.isOpen ? "border-[#00450d]" : "border-[#c0c9bb]";
            const detailTextColor = location.isOpen ? "text-[#00450d]" : "text-[#717a6d]";

            return (
              <article key={location.id} className={cardClassName}>
                <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[3.5px] relative flex-[0_0_auto]">
                    {location.badge && (
                      <div className={location.badge.className}>
                        <div className={location.badge.textClassName}>
                          {location.badge.label}
                        </div>
                      </div>
                    )}
                    <h2 className="[font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#00450d] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      {location.title}
                    </h2>
                    <p className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-sm tracking-[0] leading-5">
                      {location.address}
                    </p>
                  </div>
                  <div className="inline-flex flex-col min-w-[60px] items-center p-2 relative flex-[0_0_auto] bg-[#efecff] rounded-lg">
                    <div className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap font-normal">
                      {location.distance}
                    </div>
                    <div className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e] text-xs text-center tracking-[0] leading-4 whitespace-nowrap font-normal">
                      km
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t border-solid border-[#dad7f3]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className={`relative w-2.5 h-2.5 rounded-full ${statusDotColor}`} />
                    <div className={`[font-family:'Nunito_Sans-Regular',Helvetica] ${statusTextColor} text-xs tracking-[0] leading-4 whitespace-nowrap font-normal`}>
                      {location.statusLabel}
                    </div>
                    <div className={`[font-family:'Nunito_Sans-Regular',Helvetica] ${statusTextColor} text-xs tracking-[0] leading-4 whitespace-nowrap font-normal`}>
                      {location.statusDetail}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-end">
                    <button
                      type="button"
                      className={`inline-flex flex-col items-center justify-center px-4 py-1.5 relative flex-[0_0_auto] rounded-lg border border-solid ${detailBorderColor} cursor-pointer bg-transparent`}
                      aria-label={`Lihat detail ${location.title}`}
                    >
                      <div className={`[font-family:'Nunito_Sans-Regular',Helvetica] ${detailTextColor} text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap font-normal`}>
                        Detail
                      </div>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative flex-1 self-stretch overflow-hidden rounded-3xl bg-[#e8ede7] flex items-center justify-center">
          <div className="text-[#41493e] text-sm [font-family:'Nunito_Sans-Regular',Helvetica]">
            Peta Lokasi Bank Sampah
          </div>
        </div>
      </div>

      <aside className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#1b5e20] rounded-3xl overflow-hidden shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(27,94,32,1)_0%,rgba(27,94,32,0)_100%)]" />
        <div className="flex items-center justify-between p-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col max-w-xl items-start gap-4 relative flex-[0_0_auto]">
            <h2 className="[font-family:'Playfair_Display-Regular',Helvetica] text-white text-[32px] tracking-[-0.64px] leading-10 whitespace-nowrap font-normal">
              Punya Komunitas Pengelola Sampah?
            </h2>
            <p className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#90d689] text-lg tracking-[0] leading-7 font-normal">
              Daftarkan Bank Sampah atau fasilitas daur ulang Anda untuk
              <br />
              menjangkau lebih banyak warga yang peduli lingkungan.
            </p>
          </div>
          <button
            type="button"
            className="gap-3 px-8 py-4 bg-white rounded-xl inline-flex items-center relative flex-[0_0_auto] cursor-pointer shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]"
            aria-label="Ajukan lokasi baru"
          >
            <span className="[font-family:'Playfair_Display-Regular',Helvetica] text-[#00450d] text-2xl text-center tracking-[0] leading-8 whitespace-nowrap font-normal">
              Ajukan Lokasi Baru
            </span>
          </button>
        </div>
      </aside>
    </section>
  );
};

// ─── Main Page Component ──────────────────────────────────────────────────────

function WasteBanks() {
  return (
    <div className="w-full overflow-x-hidden">
      <WasteBankLocatorSection />
    </div>
  );
}

export default WasteBanks;

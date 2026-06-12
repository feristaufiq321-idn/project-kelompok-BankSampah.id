import {
  FiCheckCircle,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiDroplet,
  FiExternalLink,
  FiFileText,
  FiHome,
  FiInfo,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPackage,
  FiPhone,
  FiRefreshCw,
  FiStar,
  FiTag,
  FiTrash2,
} from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// --- Helper ---

function StarRating({ score, max = 5, size = "text-sm" }) {
  return (
    <span className={`flex items-center gap-0.5 ${size} text-yellow-400`}>
      {Array.from({ length: max }, (_, i) => {
        if (score >= i + 1) return <FaStar key={i} />;
        if (score >= i + 0.5) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
      })}
    </span>
  );
}

// --- Data ---

const footerLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#" },
  { label: "Edukasi", href: "#" },
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
  { label: "Pusat Bantuan", href: "#" },
];

const navigationItems = [
  { label: "Beranda", href: "#", active: false },
  { label: "Tentang Kami", href: "#", active: false },
  { label: "Bank Sampah", href: "#", active: true },
  { label: "Edukasi", href: "#", active: false },
  { label: "Transaksi", href: "#", active: false },
  { label: "Kontak", href: "#", active: false },
];

const breadcrumbItems = [
  { label: "Beranda", isHome: true },
  { label: "Bank Sampah" },
  { label: "Melati Berseri", muted: true },
];

const acceptedWasteTypes = [
  { label: "Plastik PET", icon: <FiDroplet /> },
  { label: "Kertas & Kardus", icon: <FiFileText /> },
  { label: "Logam & Kaleng", icon: <FiPackage /> },
  { label: "Kaca (Botol)", icon: <FiTag /> },
  { label: "E-Waste (Kecil)", icon: <FiMonitor /> },
];

const priceRows = [
  {
    category: "Plastik",
    specific: "Botol PET Bening (Bersih)",
    price: "Rp 4.000",
    iconBg: "bg-[#d6e5ef]",
    icon: <FiDroplet className="text-blue-500" />,
  },
  {
    category: "Plastik",
    specific: "Gelas Plastik PP (Tanpa Ring)",
    price: "Rp 3.500",
    iconBg: "bg-[#d6e5ef]",
    icon: <FiDroplet className="text-blue-500" />,
  },
  {
    category: "Kertas",
    specific: "Kardus Bekas (Kering)",
    price: "Rp 1.500",
    iconBg: "bg-[#e2e0fc]",
    icon: <FiFileText className="text-purple-500" />,
  },
  {
    category: "Kertas",
    specific: "Kertas HVS/Buku",
    price: "Rp 2.000",
    iconBg: "bg-[#e2e0fc]",
    icon: <FiFileText className="text-purple-500" />,
  },
  {
    category: "Logam",
    specific: "Kaleng Aluminium (Minuman)",
    price: "Rp 12.000",
    iconBg: "bg-[#72f8b5]",
    icon: <FiPackage className="text-green-600" />,
  },
];

const reviews = [
  {
    name: "Budi Santoso",
    time: "2 hari yang lalu",
    rating: 5,
    content:
      "Pengurusnya sangat ramah dan proses penimbangan transparan. Uang hasil tabungan langsung masuk ke aplikasi dalam hitungan menit. Tempatnya juga bersih dan mudah dijangkau.",
  },
  {
    name: "Siti Rahmawati",
    time: "1 minggu yang lalu",
    rating: 4,
    content:
      "Harga kardus di sini lumayan tinggi dibanding tempat lain. Hanya saja kalau akhir pekan antriannya lumayan panjang. Sebaiknya datang agak pagi.",
  },
];

const operatingHours = [
  { day: "Senin - Jumat", time: "08:00 - 16:00", highlighted: true },
  { day: "Sabtu", time: "08:00 - 13:00" },
  { day: "Minggu & Libur Nasional", time: "Tutup", closed: true },
];

const contactItems = [
  {
    icon: <FiPhone />,
    text: "+62 812-3456-7890 (Pak Budi)",
    href: "tel:+6281234567890",
  },
  {
    icon: <FiMail />,
    text: "melatiberseri@banksampah.id",
    href: "mailto:melatiberseri@banksampah.id",
  },
];

// --- Sub-components ---

function FooterBrandLinksSection() {
  return (
    <footer
      className="flex flex-col w-full items-start absolute left-0 bottom-5 bg-[#e8e5ff]"
      aria-label="Footer"
    >
      <div className="grid grid-cols-4 grid-rows-[104px] max-w-screen-xl h-fit gap-6 px-16 py-20 w-full">
        <div className="relative row-[1_/_2] col-[1_/_2] w-full h-fit flex flex-col items-start gap-4">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Playfair_Display-Bold',Helvetica] font-bold text-[#00450d] text-[32px] tracking-[0] leading-10">
              BankSampah.id
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6">
              © 2024 BankSampah.id. Semua Hak
              <br />
              Dilindungi.
            </p>
          </div>
        </div>
        <nav
          className="relative row-[1_/_2] col-[2_/_5] w-full h-[104px] flex items-start justify-end gap-12"
          aria-label="Navigasi footer"
        >
          {footerLinks.map((link) => (
            <div
              key={link.label}
              className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]"
            >
              <a
                href={link.href}
                className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00450d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8e5ff] rounded-sm"
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function TopNavigationBarSection() {
  return (
    <header className="flex flex-col w-full items-start absolute top-0 left-0 bg-[#fcf8ff] shadow-[0px_1px_2px_#0000000d]">
      <div className="flex max-w-screen-xl items-center justify-between pl-16 pr-[64.01px] py-4 relative w-full flex-[0_0_auto]">
        <a
          href="#"
          aria-label="BankSampah.id"
          className="inline-flex flex-col items-start relative flex-[0_0_auto] focus:outline-none"
        >
          <div className="flex items-center mt-[-1.00px] [font-family:'Playfair_Display-Bold',Helvetica] font-bold text-[#00450d] text-2xl tracking-[0] leading-8 whitespace-nowrap relative w-fit">
            BankSampah.id
          </div>
        </a>
        <nav
          aria-label="Navigasi utama"
          className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
        >
          {navigationItems.map((item) =>
            item.active ? (
              <a
                key={item.label}
                href={item.href}
                aria-current="page"
                className="inline-flex flex-col h-[26px] items-start justify-center pl-[2.25px] pr-[2.24px] py-[0.65px] relative flex-[0_0_auto] focus:outline-none"
              >
                <div className="inline-flex flex-col items-start pt-0 pb-1 px-0 relative flex-[0_0_auto] mt-[-0.65px] mb-[-0.65px] ml-[-2.25px] mr-[-2.24px] border-b-2 [border-bottom-style:solid] border-[#00450d]">
                  <div className="flex items-center mt-[-2.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#00450d] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                    {item.label}
                  </div>
                </div>
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex flex-col items-start relative flex-[0_0_auto] focus:outline-none"
              >
                <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                  {item.label}
                </div>
              </a>
            ),
          )}
        </nav>
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <button
            type="button"
            className="all-[unset] box-border inline-flex flex-col items-center justify-center relative flex-[0_0_auto] cursor-pointer"
            aria-label="Login"
          >
            <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
              Login
            </div>
          </button>
          <button
            type="button"
            className="all-[unset] box-border flex-col justify-center px-6 py-2 relative flex-[0_0_auto] bg-[#00450d] rounded-lg inline-flex items-center cursor-pointer"
            aria-label="Register"
          >
            <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-white text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
              Register
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

function LocationProfileOverviewSection() {
  return (
    <section
      className="flex flex-col w-full items-start absolute top-[68px] left-0"
      aria-label="Ikhtisar profil lokasi bank sampah"
    >
      <div className="relative self-stretch w-full h-[400px] bg-[#f5f2ff]">
        <div className="flex flex-col w-full h-full items-start justify-center absolute top-0 left-0 bg-[url(/background.png)] bg-cover bg-[50%_50%]">
          <div className="relative flex-1 self-stretch w-full grow bg-[linear-gradient(0deg,rgba(26,26,46,0.4)_0%,rgba(26,26,46,0)_100%)]" />
        </div>
        <nav
          aria-label="Breadcrumb"
          className="flex max-w-screen-xl w-[calc(100%_-_128px)] items-center gap-2 absolute top-8 left-16 shadow-[0px_4px_3px_#00000012,0px_2px_2px_#0000000f]"
        >
          {breadcrumbItems.map((item, index) => (
            <div key={item.label} className="inline-flex items-center gap-2">
              {item.isHome ? (
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <FiHome className="text-white w-3 h-3" aria-hidden="true" />
                  <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              ) : (
                <div
                  className={`inline-flex flex-col items-start relative flex-[0_0_auto] ${
                    item.muted ? "opacity-80" : ""
                  }`}
                  aria-current={index === breadcrumbItems.length - 1 ? "page" : undefined}
                >
                  <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              )}

              {index < breadcrumbItems.length - 1 && (
                <FiChevronRight className="text-white w-3 h-3" aria-hidden="true" />
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="flex flex-col max-w-screen-xl items-start gap-8 pt-0 pb-20 px-16 relative w-full flex-[0_0_auto] -mt-32">
        <header className="flex flex-col items-start p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#fffffff2] rounded-xl border border-solid border-[#c0c9bb4c] shadow-[0px_12px_32px_#1b5e201f] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#75fbb8] rounded-full">
                  <FiCheckCircle className="text-[#002112] w-3 h-3" aria-hidden="true" />
                  <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-[#002112] text-xs tracking-[0] leading-4 whitespace-nowrap relative w-fit">
                    Buka
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <FiMapPin className="text-[#41493e] w-[9.33px] h-[13.33px]" aria-hidden="true" />
                  <p className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                    0.8 km dari lokasi Anda
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="mt-[-1.00px] [font-family:'Playfair_Display-Bold',Helvetica] font-bold text-[#1a1a2e] text-5xl tracking-[-1.20px] leading-[60px] relative w-fit">
                  Bank Sampah Melati
                  <br />
                  Berseri
                </h1>
              </div>
              <div className="flex items-center gap-4 pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <StarRating score={4.8} size="text-base" />
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <p className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans-Bold',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6 whitespace-nowrap">
                    <span className="font-bold text-[#1a1a2e]">4.8</span>
                    <span className="[font-family:'Nunito_Sans-Regular',Helvetica] text-[#41493e]">
                      {" "}(124 Ulasan)
                    </span>
                  </p>
                </div>
                <div className="relative w-1 h-1 bg-[#717a6d] rounded-full" />
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <FiCheckCircle className="text-[#41493e] w-4 h-4" aria-hidden="true" />
                  <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                    Terverifikasi
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
              <button
                type="button"
                className="all-[unset] box-border justify-center gap-[7.99px] px-8 py-3 relative flex-[0_0_auto] rounded-lg border-2 border-solid border-[#00450d] inline-flex items-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00450d]"
                aria-label="Hubungi pengelola"
              >
                <FiPhone className="text-[#00450d] w-[18px] h-[18px]" aria-hidden="true" />
                <div className="flex items-center justify-center [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                  Hubungi Pengelola
                </div>
              </button>
              <button
                type="button"
                className="all-[unset] box-border justify-center gap-2 px-8 py-3.5 relative flex-[0_0_auto] bg-[#00450d] rounded-lg inline-flex items-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00450d]"
                aria-label="Setor sampah sekarang"
              >
                <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-lg shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]" />
                <FiRefreshCw className="text-white w-[21px] h-[21px]" aria-hidden="true" />
                <div className="flex items-center justify-center mt-[-0.50px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-white text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                  Setor Sampah Sekarang
                </div>
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-12 grid-rows-[1236px] h-fit gap-6">
          <main className="relative row-[1_/_2] col-[1_/_9] w-full h-fit flex flex-col items-start gap-20">
            <section
              className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
              aria-labelledby="jenis-sampah-diterima"
            >
              <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <FiTrash2 className="text-[#1a1a2e] w-[22px] h-[23px]" aria-hidden="true" />
                <h2
                  id="jenis-sampah-diterima"
                  className="flex items-center mt-[-1.00px] [font-family:'Playfair_Display-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-2xl tracking-[0] leading-8 whitespace-nowrap relative w-fit"
                >
                  Jenis Sampah Diterima
                </h2>
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6">
                  Bank sampah ini mengelola berbagai jenis limbah anorganik yang
                  dapat didaur ulang. Pastikan sampah
                  <br />
                  Anda sudah terpilah sebelum disetorkan.
                </p>
              </div>
              <div className="relative self-stretch w-full h-24">
                {acceptedWasteTypes.map((item, index) => {
                  const positions = [
                    "top-2 left-0",
                    "top-2 left-[146px]",
                    "top-2 left-[324px]",
                    "top-2 left-[503px]",
                    "top-[58px] left-0",
                  ];
                  return (
                    <div
                      key={item.label}
                      className={`inline-flex h-[calc(100%_-_58px)] items-center gap-2 pt-[7.5px] pb-[8.5px] px-4 absolute ${positions[index]} bg-[#e2e0fc] rounded-full border border-solid border-[#c0c9bb80]`}
                    >
                      <span className="text-[#41493e] text-sm" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div className="flex items-center [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section
              className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
              aria-labelledby="harga-sampah-hari-ini"
            >
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <FiTag className="text-[#1a1a2e] w-[23px] h-[19px]" aria-hidden="true" />
                  <h2
                    id="harga-sampah-hari-ini"
                    className="flex items-center mt-[-1.00px] [font-family:'Playfair_Display-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-2xl tracking-[0] leading-8 whitespace-nowrap relative w-fit"
                  >
                    Harga Sampah Hari Ini
                  </h2>
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <p className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-BoldItalic',Helvetica] font-bold italic text-[#41493e] text-xs tracking-[0] leading-4 whitespace-nowrap relative w-fit">
                    Diperbarui: Hari ini, 08:00 WIB
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden border border-solid border-[#c0c9bb4c] shadow-[0px_4px_24px_#1b5e2014]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#f5f2ff]">
                    <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[203.14px] items-start px-6 py-4 relative border-b [border-bottom-style:solid] border-[#c0c9bb80]">
                        <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                          Kategori
                        </div>
                      </div>
                      <div className="w-[376.55px] items-start flex flex-col px-6 py-4 relative border-b [border-bottom-style:solid] border-[#c0c9bb80]">
                        <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                          Jenis Spesifik
                        </div>
                      </div>
                      <div className="w-[178.31px] items-end flex flex-col px-6 py-4 relative border-b [border-bottom-style:solid] border-[#c0c9bb80]">
                        <div className="flex items-center justify-end mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm text-right tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                          Harga / Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    {priceRows.map((row, index) => (
                      <div
                        key={`${row.category}-${row.specific}`}
                        className={`flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] ${
                          index > 0
                            ? "mt-[-0.5px] border-t [border-top-style:solid] border-[#c0c9bb4c]"
                            : ""
                        }`}
                      >
                        <div className="flex w-[203.14px] items-center gap-3 px-6 py-4 relative">
                          <div
                            className={`flex w-8 h-8 items-center justify-center relative ${row.iconBg} rounded-full`}
                          >
                            <span className="text-base" aria-hidden="true">
                              {row.icon}
                            </span>
                          </div>
                          <div className="flex items-center [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                            {row.category}
                          </div>
                        </div>
                        <div
                          className={`w-[376.55px] items-start px-6 flex flex-col relative ${
                            index === 4 ? "pt-[20.5px] pb-5" : "py-[20.5px]"
                          }`}
                        >
                          <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                            {row.specific}
                          </div>
                        </div>
                        <div
                          className={`w-[178.31px] items-end px-6 flex flex-col relative ${
                            index === 4 ? "pt-[20.5px] pb-5" : "py-[20.5px]"
                          }`}
                        >
                          <div className="flex items-center justify-end mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#00450d] text-base text-right tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                            {row.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#fcf8ff] border-t [border-top-style:solid] border-[#c0c9bb4c] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#00450d]"
                  aria-label="Lihat semua harga"
                >
                  <div className="flex items-center justify-center gap-[3.99px] self-stretch w-full relative flex-[0_0_auto]">
                    <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                      Lihat Semua Harga
                    </div>
                    <FiChevronDown className="text-[#00450d] w-[10.67px] h-[10.67px]" aria-hidden="true" />
                  </div>
                </button>
              </div>
            </section>
            <section
              className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
              aria-labelledby="ulasan-warga"
            >
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <FiStar className="text-[#1a1a2e] w-[23px] h-[23px]" aria-hidden="true" />
                  <h2
                    id="ulasan-warga"
                    className="flex items-center mt-[-1.00px] [font-family:'Playfair_Display-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-2xl tracking-[0] leading-8 whitespace-nowrap relative w-fit"
                  >
                    Ulasan Warga
                  </h2>
                </div>
                <button
                  type="button"
                  className="all-[unset] box-border inline-flex flex-col items-center justify-center relative flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00450d]"
                >
                  <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                    Tulis Ulasan
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-1 grid-rows-[162px_162px] h-fit gap-4">
                {reviews.map((review, index) => (
                  <article
                    key={review.name}
                    className={`relative col-[1_/_2] w-full h-fit flex flex-col items-start gap-4 p-6 bg-white rounded-xl border border-solid border-[#c0c9bb4c] shadow-[0px_1px_2px_#0000000d] ${
                      index === 0 ? "row-[1_/_2]" : "row-[2_/_3]"
                    }`}
                  >
                    <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                        <div className="flex w-12 h-12 items-center justify-center relative bg-[#dad7f3] rounded-full overflow-hidden">
                          <span className="text-[#5b4fcf] font-bold text-lg">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                          <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                            {review.name}
                          </div>
                          <div className="flex items-center [font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-[#41493e] text-xs tracking-[0] leading-4 whitespace-nowrap relative w-fit">
                            {review.time}
                          </div>
                        </div>
                      </div>
                      <StarRating score={review.rating} />
                    </div>
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6">
                        {review.content}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
          <aside className="relative row-[1_/_2] col-[9_/_13] w-full h-fit flex flex-col items-start pt-0 pb-[334px] px-0">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <section
                className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden border border-solid border-[#c0c9bb4c] shadow-[0px_4px_24px_#1b5e2014]"
                aria-label="Informasi lokasi dan kontak"
              >
                <div className="relative self-stretch w-full h-[200px] bg-[#e8ede7] flex items-center justify-center z-[1]">
                  <div className="flex flex-col items-center gap-2 text-[#41493e]">
                    <FiMapPin className="w-8 h-8 text-[#00450d]" />
                    <span className="text-sm [font-family:'Nunito_Sans-Regular',Helvetica]">
                      Pratinjau Peta
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] z-0">
                  <div className="relative self-stretch w-full h-[132px]">
                    <div className="flex flex-col w-full items-start absolute top-0 left-0">
                      <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                        Alamat Lokasi
                      </div>
                    </div>
                    <div className="absolute w-full top-7 left-0 h-[72px] flex gap-[15px]">
                      <FiMapPin className="mt-[5px] w-[18px] h-[18px] ml-[3px] text-[#41493e] flex-shrink-0" aria-hidden="true" />
                      <address className="not-italic flex items-center w-[273px] h-[33px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-sm tracking-[0] leading-5">
                        Jl. Sudirman No. 45, Jakarta Selatan
                      </address>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Jl.%20Sudirman%20No.%2045,%20Jakarta%20Selatan"
                      target="_blank"
                      rel="noreferrer"
                      className="all-[unset] box-border gap-1 absolute top-28 left-9 inline-flex items-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00450d]"
                      aria-label="Buka lokasi di Google Maps"
                    >
                      <div className="flex items-center justify-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#00450d] text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit">
                        Buka di Google Maps
                      </div>
                      <FiExternalLink className="text-[#00450d] w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="relative self-stretch w-full h-px bg-[#c0c9bb4c]" />
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0.14px] leading-5">
                        Jam Operasional
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      {operatingHours.map((item) =>
                        item.highlighted ? (
                          <div
                            key={item.day}
                            className="flex items-center justify-between pr-[5.68e-14px] pl-0 py-0 relative self-stretch w-full flex-[0_0_auto]"
                          >
                            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                              <FiClock className="text-[#1a1a2e] w-5 h-5" aria-hidden="true" />
                              <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                                {item.day}
                              </div>
                            </div>
                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                              <div className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                                {item.time}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            key={item.day}
                            className="justify-between flex items-center relative self-stretch w-full flex-[0_0_auto]"
                          >
                            <div className="inline-flex items-center pl-9 pr-0 py-0 relative flex-[0_0_auto]">
                              <div
                                className={`flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit ${
                                  item.closed ? "text-[#ba1a1a]" : "text-[#41493e]"
                                }`}
                              >
                                {item.day}
                              </div>
                            </div>
                            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                              <div
                                className={`flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit ${
                                  item.closed ? "text-[#ba1a1a]" : "text-[#41493e]"
                                }`}
                              >
                                {item.time}
                              </div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="relative self-stretch w-full h-px bg-[#c0c9bb4c]" />
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0.14px] leading-5">
                        Kontak Info
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      {contactItems.map((item) => (
                        <a
                          key={item.text}
                          href={item.href}
                          className="gap-3 flex items-center relative self-stretch w-full flex-[0_0_auto] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00450d] rounded-sm"
                        >
                          <div className="flex w-8 h-8 items-center justify-center relative bg-[#e2e0fc] rounded-full">
                            <span className="text-[#5b4fcf] text-sm" aria-hidden="true">
                              {item.icon}
                            </span>
                          </div>
                          <div className="flex items-center [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base tracking-[0] leading-6 whitespace-nowrap relative w-fit">
                            {item.text}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="flex flex-col items-start gap-2 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#72f8b54c] rounded-xl border border-solid border-[#006c4533]"
                aria-labelledby="tips-menyetor"
              >
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <FiInfo className="text-[#007149] w-[17px] h-[17px]" aria-hidden="true" />
                  <h2
                    id="tips-menyetor"
                    className="flex items-center mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#007149] text-sm tracking-[0.14px] leading-5 whitespace-nowrap relative w-fit"
                  >
                    Tips Menyetor
                  </h2>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-sm tracking-[0] leading-5">
                    Cuci bersih dan keringkan kemasan plastik atau
                    <br />
                    kaleng Anda sebelum disetorkan. Sampah yang
                    <br />
                    bersih memiliki nilai jual yang lebih tinggi dan
                    <br />
                    mencegah bau tidak sedap.
                  </p>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// --- Main Component ---

export default function WasteBankDetail() {
  return (
    <main className="bg-[linear-gradient(0deg,rgba(252,248,255,1)_0%,rgba(252,248,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-w-[1280px] min-h-[2230px] relative">
      <TopNavigationBarSection />
      <LocationProfileOverviewSection />
      <FooterBrandLinksSection />
    </main>
  );
}

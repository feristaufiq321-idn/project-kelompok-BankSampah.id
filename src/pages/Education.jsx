import { useId, useMemo, useState } from "react";
import {
  FaSearch,
  FaArrowRight,
  FaLeaf,
  FaFileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaTrash,
  FaRecycle,
} from "react-icons/fa";

// === IMPORT GAMBAR DARI SRC ===
import heroImage from "../assets/images/hero_edu.jpeg";
import artikelImage from "../assets/images/artikel-zero.jpeg";

// ===== HERO SECTION =====
function KnowledgeCenterHeroSection() {
  const searchInputId = useId();
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <section className="flex justify-between items-center px-10 py-16 max-md:flex-col max-md:px-6 max-md:py-10 max-sm:px-4 max-sm:py-8">
      <div className="max-w-[480px] max-md:mb-8 max-md:max-w-full">
        <h2 className="mb-4 text-4xl font-bold leading-10 text-gray-800 max-sm:text-3xl max-sm:leading-9">
          Pusat Pengetahuan Daur Ulang
        </h2>
        <p className="mb-7 text-sm leading-6 text-gray-500">
          Pelajari cara memilah, mendaur ulang, dan berkontribusi pada
          lingkungan yang lebih bersih. Temukan tips praktis dan panduan
          lengkap untuk memulai gaya hidup bebas sampah.
        </p>
        <form className="flex overflow-hidden items-center w-full bg-white rounded-lg border border-gray-300 border-solid max-w-[400px]">
          <div className="flex items-center pr-2 pl-3">
            <FaSearch className="text-lg text-gray-400" />
          </div>
          <input
            id={searchInputId}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari tips atau jenis sampah..."
            className="flex-1 py-2.5 pr-2 text-sm text-gray-400 bg-transparent border-none"
          />
          <button type="submit" className="flex justify-center items-center p-2.5 bg-gray-800">
            <FaArrowRight className="text-lg text-white" />
          </button>
        </form>
      </div>
      <div className="overflow-hidden rounded-2xl h-[280px] w-[480px] max-md:w-full max-md:h-60 max-sm:h-[200px]">
        {/* === PAKAI GAMBAR YANG SUDAH DIIMPORT === */}
        <img
          src={heroImage}
          alt="Recycling"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

// ===== CATEGORY TABS =====
function CategoryFiltersSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const categories = useMemo(() => [
    { name: "Semua", icon: <FaRecycle /> },
    { name: "Pilah Sampah", icon: <FaLeaf /> },
    { name: "Daur Ulang", icon: <FaRecycle /> },
    { name: "Kompos", icon: <FaLeaf /> },
    { name: "Gaya Hidup", icon: <FaRecycle /> },
  ], []);
  
  return (
    <section className="px-10 max-md:px-6 max-sm:px-4">
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-5 py-2 text-sm font-medium rounded-3xl cursor-pointer transition-colors flex items-center gap-2 ${
              activeCategory === category.name
                ? "text-white bg-gray-800"
                : "text-gray-700 bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}

// ===== FEATURED ARTICLE =====
function FeaturedArticleSection() {
  return (
    <section className="p-10 max-md:px-6 max-sm:px-4">
      <article className="flex overflow-hidden rounded-2xl border border-gray-100 border-solid shadow-sm max-md:flex-col">
        <div className="min-h-[200px] w-[380px] max-md:w-full max-md:h-[220px] max-sm:h-[180px]">
          {/* === PAKAI GAMBAR YANG SUDAH DIIMPORT === */}
          <img
            src={artikelImage}
            alt="Zero Waste"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-8 bg-white max-sm:p-5">
          <div className="mb-3 text-xs font-semibold tracking-wide text-gray-800 uppercase">
            ARTIKEL PILIHAN
          </div>
          <h3 className="mb-3 text-2xl font-bold leading-8 text-gray-900">
            Panduan Lengkap Memulai Zero Waste di Rumah
          </h3>
          <p className="mb-5 text-sm leading-6 text-gray-500">
            Langkah kecil dapat membawa perubahan besar. Pelajari cara
            mengurangi limbah rumah tangga harian Anda dengan metode praktis
            yang tidak mengorbankan kenyamanan.
          </p>
          <a href="#" className="flex gap-1.5 items-center text-sm font-medium text-gray-800">
            Baca Selengkapnya
            <FaArrowRight className="text-base" />
          </a>
        </div>
      </article>
    </section>
  );
}

// ===== WASTE TYPE CARD =====
function WasteTypeCard({ icon: IconComponent, title, description, borderColor, iconBgColor, iconColor }) {
  return (
    <div className={`p-5 bg-white rounded-xl border-solid border-[3px] ${borderColor}`}>
      <div className="flex gap-2.5 items-center mb-2.5">
        <div className={`flex justify-center items-center w-9 h-9 rounded-lg ${iconBgColor}`}>
          <IconComponent className={`text-lg ${iconColor}`} />
        </div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm leading-5 text-gray-500">{description}</p>
    </div>
  );
}

// ===== WASTE TYPE GUIDE =====
function WasteTypeGuideSection() {
  const wasteTypes = useMemo(() => [
    {
      icon: FaLeaf,
      title: "Organik",
      description: "Sisa makanan, daun, ranting. Dapat diolah menjadi kompos berkualitas.",
      borderColor: "border-green-600",
      iconBgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FaFileAlt,
      title: "Kertas & Kardus",
      description: "Koran, majalah, kotak kemasan. Pastikan dalam keadaan kering dan bersih.",
      borderColor: "border-blue-500",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: FaRecycle,
      title: "Plastik",
      description: "Botol minuman, kemasan, kantong. Bilas dan keringkan sebelum disetorkan.",
      borderColor: "border-yellow-500",
      iconBgColor: "bg-yellow-50",
      iconColor: "text-yellow-500"
    },
    {
      icon: FaShieldAlt,
      title: "Logam & Kaca",
      description: "Kaleng minuman, botol selai. Berpotensi daur ulang yang sangat tinggi.",
      borderColor: "border-violet-500",
      iconBgColor: "bg-violet-50",
      iconColor: "text-violet-500"
    },
    {
      icon: FaExclamationTriangle,
      title: "Bahan B3",
      description: "Baterai, lampu neon, obat kadaluarsa. Membutuhkan penanganan khusus.",
      borderColor: "border-red-500",
      iconBgColor: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: FaTrash,
      title: "Residu",
      description: "Popok, tisu bekas, puntung rokok. Sampah yang sulit didaur ulang.",
      borderColor: "border-gray-500",
      iconBgColor: "bg-gray-50",
      iconColor: "text-gray-500"
    }
  ], []);

  return (
    <section className="px-10 py-5 max-md:px-6 max-sm:px-4">
      <div className="mb-2 text-center">
        <h2 className="text-3xl font-bold leading-9 text-gray-900 max-sm:text-2xl">
          Kenali Jenis Sampah Anda
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Panduan visual untuk memisahkan limbah dengan benar.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        {wasteTypes.map((item, index) => (
          <WasteTypeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

// ===== NEWSLETTER =====
function NewsletterSection() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };
  
  return (
    <section className="flex justify-between items-center p-12 m-10 bg-gray-800 rounded-2xl max-md:flex-col max-md:gap-6 max-md:mx-6 max-sm:px-6 max-sm:py-8 max-sm:mx-4">
      <div className="max-md:text-center">
        <h2 className="mb-2 text-2xl font-bold leading-8 text-green-400 max-sm:text-xl">
          Tetap Terinspirasi
        </h2>
        <p className="text-sm leading-6 text-emerald-100 max-w-[360px]">
          Dapatkan tips mingguan, berita lingkungan, dan panduan gaya hidup
          berkelanjutan langsung di kotak masuk Anda.
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="flex gap-3 items-center max-sm:flex-col max-sm:w-full">
        {isSubscribed ? (
          <p className="text-green-400 font-medium">✅ Terima kasih telah berlangganan!</p>
        ) : (
          <>
            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat email Anda"
              className="px-4 py-3 text-sm text-gray-400 bg-white rounded-lg border-none w-[280px] max-sm:w-full"
            />
            <button 
              type="submit"
              className="px-5 py-3 text-sm font-semibold text-gray-800 bg-green-400 rounded-lg max-sm:w-full max-sm:text-center"
            >
              Berlangganan
            </button>
          </>
        )}
      </form>
    </section>
  );
}

// ===== MAIN PAGE =====
export default function EducationPage() {
  return (
    <main>
      <KnowledgeCenterHeroSection />
      <CategoryFiltersSection />
      <FeaturedArticleSection />
      <WasteTypeGuideSection />
      <NewsletterSection />
    </main>
  );
}
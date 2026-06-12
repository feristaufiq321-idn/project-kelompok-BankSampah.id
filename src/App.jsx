import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Education from "./pages/Education";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Transactions from "./pages/Transactions";
import WasteBankDetail from "./pages/WasteBankDetail";
import WasteBanks from "./pages/WasteBanks";

function App() {
  const location = useLocation();

  // Hide footer on auth pages
  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/lupa-sandi";

  return (
    <div className="flex min-h-screen flex-col bg-emerald-50/40">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/bank-sampah" element={<WasteBanks />} />
          <Route path="/bank-sampah/:id" element={<WasteBankDetail />} />
          <Route path="/edukasi" element={<Education />} />
          <Route path="/transaksi" element={<Transactions />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lupa-sandi" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;

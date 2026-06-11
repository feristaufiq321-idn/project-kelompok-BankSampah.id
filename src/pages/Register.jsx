import { Link, useNavigate } from "react-router-dom";
import { useId, useMemo, useState } from "react";
import {
  FaUsers,
  FaRecycle,
  FaUserShield,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

const roleOptions = [
  {
    id: "masyarakat",
    label: "Masyarakat",
    icon: <FaUsers size={24} />,
    selected: true,
  },
  {
    id: "nasabah",
    label: "Nasabah",
    icon: <FaRecycle size={24} />,
    selected: false,
  },
  {
    id: "pengelola",
    label: "Pengelola",
    icon: <FaUserShield size={24} />,
    selected: false,
  },
];

const inputBaseClassName =
  "relative grow border-[none] [background:none] self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#1a1a2e] text-base tracking-[0] leading-[normal] p-0 placeholder:text-gray-500";

export const RegisterDesktop = () => {
  const navigate = useNavigate();

  const formId = useId();
  const fullNameId = `${formId}-full-name`;
  const emailId = `${formId}-email`;
  const phoneId = `${formId}-phone`;
  const passwordId = `${formId}-password`;
  const confirmPasswordId = `${formId}-confirm-password`;
  const agreementId = `${formId}-agreement`;

  const [selectedRole, setSelectedRole] = useState(
    roleOptions.find((role) => role.selected)?.id || roleOptions[0].id,
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const isSubmitDisabled = useMemo(() => {
    return (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.agreed
    );
  }, [formData]);

  const handleChange = (field) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  alert("Pendaftaran berhasil!");
  navigate("/login");
  };

  return (
    <main className="flex min-h-[1076px] items-center justify-center px-16 py-[63px] relative bg-[linear-gradient(0deg,rgba(245,242,255,1)_0%,rgba(245,242,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-w-[1280px]">
      <div
        aria-hidden="true"
        className="absolute w-full h-full top-0 left-0 overflow-hidden"
      >
        <div className="absolute -top-64 -left-64 w-[500px] h-[500px] bg-[#75fbb833] rounded-full blur-[32px]" />
        <div className="absolute -right-64 -bottom-64 w-[600px] h-[600px] bg-[#acf4a433] rounded-full blur-[32px]" />
      </div>
      <section className="flex flex-col max-w-[600px] w-[600px] items-start gap-8 p-12 relative bg-white rounded-3xl shadow-[0px_8px_32px_#1b5e2014]">
        <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="[font-family:'Playfair_Display-Bold',Helvetica] text-[#00450d] text-2xl tracking-[0] leading-8 relative flex items-center justify-center w-fit mt-[-1.00px] font-bold text-center whitespace-nowrap">
              BankSampah.id
            </div>
          </div>
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="[font-family:'Playfair_Display-Bold',Helvetica] text-[#1a1a2e] text-[32px] tracking-[0] leading-10 relative flex items-center justify-center w-fit mt-[-1.00px] font-bold text-center whitespace-nowrap">
              Daftar Akun Baru
            </h1>
          </div>
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#41493e] text-base text-center tracking-[0] leading-6">
              Bergabunglah bersama kami untuk menciptakan lingkungan yang
              <br />
              lebih bersih dan berkelanjutan.
            </p>
          </div>
        </header>
        <form
          className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
          onSubmit={handleSubmit}
        >
          <fieldset className="flex flex-col items-start pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto] min-w-0">
            <legend className="sr-only">Pilih Peran Anda</legend>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5">
                  Pilih Peran Anda
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-[86px] h-fit gap-3 self-stretch w-full">
                {roleOptions.map((role) => {
                  const isSelected = selectedRole === role.id;

                  return (
                    <label
                      key={role.id}
                      className="h-fit justify-center relative w-full flex flex-col items-start cursor-pointer"
                    >
                      <input
                        checked={isSelected}
                        className="sr-only"
                        name="role"
                        onChange={() => setSelectedRole(role.id)}
                        type="radio"
                        value={role.id}
                      />
                      <div
                        className={`flex flex-col items-center gap-2 p-4 relative self-stretch w-full flex-[0_0_auto] rounded-xl border border-solid ${isSelected
                          ? "bg-[#1b5e20] border-[#00450d] shadow-[0px_1px_2px_#0000000d]"
                          : "bg-[#fcf8ff] border-[#c0c9bb]"
                          }`}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute top-[26%] left-4 text-gray-500"
                        >
                          <FaUser />
                        </div>
                        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-sm text-center tracking-[0.14px] leading-5 whitespace-nowrap">
                            {role.label}
                          </div>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </fieldset>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch flex-[0_0_auto] relative w-full flex flex-col items-start">
              <label
                className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5"
                htmlFor={fullNameId}
              >
                Nama Lengkap
              </label>
            </div>
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-center pl-12 pr-4 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-[#fcf8ff] rounded-lg overflow-hidden border border-solid border-[#c0c9bb]">
                <input
                  autoComplete="name"
                  className={inputBaseClassName}
                  id={fullNameId}
                  onChange={handleChange("fullName")}
                  placeholder="Masukkan nama lengkap"
                  type="text"
                  value={formData.fullName}
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute top-[26%] left-4 text-[#1b5e20]"
              >
                <FaUser size={16} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch flex-[0_0_auto] relative w-full flex flex-col items-start">
              <label
                className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5"
                htmlFor={emailId}
              >
                Email
              </label>
            </div>
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-center pl-12 pr-4 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-[#fcf8ff] rounded-lg overflow-hidden border border-solid border-[#c0c9bb]">
                <input
                  autoComplete="email"
                  className={inputBaseClassName}
                  id={emailId}
                  onChange={handleChange("email")}
                  placeholder="nama@email.com"
                  type="email"
                  value={formData.email}
                />
              </div>
              <div
                aria-hidden="true"
                className="inline-flex flex-col h-[48.00%] items-start absolute top-[26.00%] left-4"
              >
                <FaEnvelope />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch flex-[0_0_auto] relative w-full flex flex-col items-start">
              <label
                className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5"
                htmlFor={phoneId}
              >
                Nomor Telepon
              </label>
            </div>
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-center pl-12 pr-4 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-[#fcf8ff] rounded-lg overflow-hidden border border-solid border-[#c0c9bb]">
                <input
                  autoComplete="tel"
                  className={inputBaseClassName}
                  id={phoneId}
                  inputMode="tel"
                  onChange={handleChange("phone")}
                  placeholder="08xxxxxxxxxx"
                  type="tel"
                  value={formData.phone}
                />
              </div>
              <div
                aria-hidden="true"
                className="inline-flex flex-col h-[48.00%] items-start absolute top-[26.00%] left-4"
              >
                <FaPhone />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-[74px] h-fit gap-4 self-stretch w-full">
            <div className="relative row-[1_/_2] col-[1_/_2] w-full h-fit flex flex-col items-start gap-1">
              <div className="self-stretch flex-[0_0_auto] relative w-full flex flex-col items-start">
                <label
                  className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5"
                  htmlFor={passwordId}
                >
                  Kata Sandi
                </label>
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-center pl-12 pr-4 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-[#fcf8ff] rounded-lg overflow-hidden border border-solid border-[#c0c9bb]">
                  <input
                    autoComplete="new-password"
                    className={inputBaseClassName}
                    id={passwordId}
                    onChange={handleChange("password")}
                    placeholder="••••••••"
                    type="password"
                    value={formData.password}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="inline-flex flex-col h-[48.00%] items-start absolute top-[26.00%] left-4"
                >
                  <FaLock />
                </div>
              </div>
            </div>
            <div className="relative row-[1_/_2] col-[2_/_3] w-full h-fit flex flex-col items-start gap-1">
              <div className="self-stretch flex-[0_0_auto] relative w-full flex flex-col items-start">
                <label
                  className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-[#41493e] text-sm tracking-[0.14px] leading-5"
                  htmlFor={confirmPasswordId}
                >
                  Konfirmasi Sandi
                </label>
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-center pl-12 pr-4 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-[#fcf8ff] rounded-lg overflow-hidden border border-solid border-[#c0c9bb]">
                  <input
                    autoComplete="new-password"
                    className={inputBaseClassName}
                    id={confirmPasswordId}
                    onChange={handleChange("confirmPassword")}
                    placeholder="••••••••"
                    type="password"
                    value={formData.confirmPassword}
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="inline-flex flex-col h-[48.00%] items-start absolute top-[26.00%] left-4"
                >
                  <FaLock />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col pt-2 pb-0 px-0 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex h-5 items-center relative flex-[0_0_auto]">
                <input
                  checked={formData.agreed}
                  className="relative w-4 h-4 bg-[#fcf8ff] rounded border border-solid border-[#c0c9bb] cursor-pointer"
                  id={agreementId}
                  onChange={handleChange("agreed")}
                  type="checkbox"
                />
              </div>
              <div className="inline-flex flex-col items-start pl-3 pr-[55.91px] py-0 relative flex-[0_0_auto]">
                <label
                  className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-normal text-transparent text-sm tracking-[0.14px] leading-5 cursor-pointer"
                  htmlFor={agreementId}
                >
                  <span className="font-semibold text-[#41493e] tracking-[0.02px]">
                    Saya menyetujui{" "}
                  </span>
                  <span className="[font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-[#00450d] tracking-[0.02px]">
                    Syarat &amp; Ketentuan
                  </span>
                  <span className="font-semibold text-[#41493e] tracking-[0.02px]">
                    {" "}
                    dan{" "}
                  </span>
                  <span className="[font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-[#00450d] tracking-[0.02px]">
                    Kebijakan Privasi
                  </span>
                  <span className="font-semibold text-[#41493e] tracking-[0.02px]">
                    {" "}
                    yang
                    <br />
                    berlaku.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex-col items-start pt-4 pb-0 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
            <button
              className="items-center justify-center gap-2 px-6 py-4 bg-[#00450d] rounded-xl flex relative self-stretch w-full flex-[0_0_auto] disabled:opacity-100"
              disabled={isSubmitDisabled}
              type="submit"
            >
              <span className="[font-family:'Nunito_Sans-Bold',Helvetica] text-white text-sm tracking-[0.14px] leading-5 relative flex items-center justify-center w-fit mt-[-1.00px] font-bold text-center whitespace-nowrap">
                Daftar Sekarang
              </span>
              <span className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            <span className="text-[#41493e]">Sudah punya akun? </span>
            <Link
              to="/login"
              className="[font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-[#00450d]"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterDesktop;
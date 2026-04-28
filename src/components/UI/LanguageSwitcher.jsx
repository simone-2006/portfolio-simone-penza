import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("it");

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setSelected(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLang("it")}
        className={`cursor-pointer ${selected === "it" ? "border border-white rounded" : ""}`}
      >
        <span className="fi fi-it w-12 h-8 block bg-center bg-no-repeat bg-contain"></span>
      </button>

      <button
        onClick={() => changeLang("en")}
        className={`cursor-pointer ${selected === "en" ? "border border-white rounded" : ""}`}
      >
        <span className="fi fi-gb w-12 h-8 block bg-center bg-no-repeat bg-contain"></span>
      </button>
    </div>
  );
}
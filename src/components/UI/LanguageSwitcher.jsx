import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [selected, setSelected] = useState(
    i18n.resolvedLanguage?.startsWith("en") ? "en" : "it",
  );

  useEffect(() => {
    setSelected(i18n.resolvedLanguage?.startsWith("en") ? "en" : "it");
  }, [i18n.resolvedLanguage]);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setSelected(lang);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => changeLang("it")}
        className={`flex h-7 w-7 items-center justify-center rounded-md transition-transform duration-200 cursor-pointer ${
          selected === "it"
            ? "scale-120"
            : "scale-100 hover:opacity-100 opacity-50 transition-all"
        }`}
        aria-label={t("language.italian")}
        type="button"
      >
        <span className="fi fi-it block text-2xl leading-none"></span>
      </button>

      <button
        onClick={() => changeLang("en")}
        className={`flex h-7 w-7 items-center justify-center rounded-md transition-transform duration-200 cursor-pointer ${
          selected === "en"
            ? "scale-120"
            : "scale-100 hover:opacity-100 opacity-50 transition-all"
        }`}
        aria-label={t("language.english")}
        type="button"
      >
        <span className="fi fi-gb block text-2xl leading-none"></span>
      </button>
    </div>
  );
}

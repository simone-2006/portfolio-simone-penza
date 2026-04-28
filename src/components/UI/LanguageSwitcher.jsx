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
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLang("it")}
        className={`flex h-9 w-9 items-center justify-center rounded-md border transition-colors cursor-pointer ${
          selected === "it"
            ? "border-white/90 bg-white/5"
            : "border-transparent hover:border-white/40"
        }`}
        aria-label={t("language.italian")}
        type="button"
      >
        <span className="fi fi-it block text-2xl leading-none"></span>
      </button>

      <button
        onClick={() => changeLang("en")}
        className={`flex h-9 w-9 items-center justify-center rounded-md border transition-colors cursor-pointer ${
          selected === "en"
            ? "border-white/90 bg-white/5"
            : "border-transparent hover:border-white/40"
        }`}
        aria-label={t("language.english")}
        type="button"
      >
        <span className="fi fi-gb block text-2xl leading-none"></span>
      </button>
    </div>
  );
}

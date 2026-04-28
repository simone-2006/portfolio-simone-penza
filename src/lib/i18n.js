import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: {
          welcome: "Benvenuto",
          description: "Questa è la mia app"
        }
      },
      en: {
        translation: {
          welcome: "Welcome",
          description: "This is my app"
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
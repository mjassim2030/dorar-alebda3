import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
    en: { translation: en },
    },
    lng: "ar",            // default
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
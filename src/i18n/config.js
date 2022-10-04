import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "hr",
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    hr: {
      translations: require("./locales/hr/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "hr"];

export default i18n;

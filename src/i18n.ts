import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./translations/en";
import esJSON from "./translations/es";

const resources = {
  en: { translation: enJSON },
  es: { translation: esJSON },
};

const appSerieInstance = i18n.createInstance();

appSerieInstance.use(initReactI18next).init({
  resources,
  keySeparator: false,
  lng: "es",
  fallbackLng: "es",
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default appSerieInstance;

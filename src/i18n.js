import i18n from "i18next";
export const defaultLocale = "en";
export const defaultNamespace = "common";

export const options = {
  fallbackLng: defaultLocale,
  ns: [defaultNamespace],
  defaultNS: defaultNamespace,

  debug: false,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: false
  },

  initImmediate: false // Important for SSR to work
};

export default () => {
  i18n.init(options);

  return i18n;
};

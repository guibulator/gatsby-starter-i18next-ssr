import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  // Will use default Namespace.
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("howToChild")}</h1>
    </>
  );
};

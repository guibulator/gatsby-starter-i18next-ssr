import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "gatsby";

const Page = ({ pageContext: { locale }, t }) => {
  return (
    <>
      <h1>{t("hello")}</h1>
      <Link to={`/${locale == "fr" ? "" : locale}/`}>{t("goBackHome")}</Link>
    </>
  );
};
export default withI18next({ ns: "common" })(Page);

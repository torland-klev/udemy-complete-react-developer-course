import React from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

import "./language-switcher.styles.scss";

const LanguageSwitcher = ({ t, i18n }) => {
  const handleClick = () => {
    switch (i18n.language) {
      case "no":
        i18next.changeLanguage("en");
        break;

      case "en":
      default:
        i18next.changeLanguage("no");
        break;
    }
  };

  return (
    <div className="language-switcher" onClick={handleClick}>
      <img
        src={require(`./${i18n.language === "en" ? "no" : "en"}_flag.svg`)}
        alt={t("alt_language_switcher_icon")}
        width="22px"
        height="16px"
      />
    </div>
  );
};

export default withTranslation()(LanguageSwitcher);

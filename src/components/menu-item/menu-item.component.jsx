import React from "react";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "./menu-item.styles.scss";

const MenuItem = ({ t, title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{t(`text_${title}`).toUpperCase()}</h1>
      <span className="subtitle">{t("text_shop_now").toUpperCase()}</span>
    </div>
  </div>
);

export default withTranslation()(withRouter(MenuItem));

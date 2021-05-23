import React from "react";
import { withTranslation } from "react-i18next";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ t, title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        {t(`text_${title.toLowerCase()}`).toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withTranslation()(CollectionPreview);

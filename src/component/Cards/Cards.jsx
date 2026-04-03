import React from "react";
import { iconsImgs } from "../../utils/image";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-grid-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-title">Cards </h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
    </div>
  );
};

export default Cards;

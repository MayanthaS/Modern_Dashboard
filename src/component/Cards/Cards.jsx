import React from "react";
import { iconsImgs } from "../../utils/image";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-grid-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c1-content">
        <p>Balance</p>
        <div className="lg-value">$1,234.56</div>
        <div className="card-wrapper">
          <span className="card-pin-hidden">**** **** ****</span>
          <span>1225</span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1 expiry-tet">Expiry</p>
            <p className="text text-sm text-white">12/25</p>
          </div>
          <div className="card-logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

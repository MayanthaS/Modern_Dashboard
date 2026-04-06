import React from "react";
import "./Financial.css";
import { iconsImgs } from "../../utils/image";
const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Goals</h3>
        <button className="grid-c-title-icon" type="button">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
          beatae!
        </p>
      </div>
    </div>
  );
};

export default Financial;

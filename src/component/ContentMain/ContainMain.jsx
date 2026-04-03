import React from "react";
import Cards from "../../component/Cards/Cards";
import "./ContainMain.css";
const ContainMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
      </div>
    </div>
  );
};

export default ContainMain;

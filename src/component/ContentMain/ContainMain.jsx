import React from "react";
import Cards from "../../component/Cards/Cards";
import Transaction from "../../Transaction/Transaction";
import "./ContainMain.css";
const ContainMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transaction />
      </div>
    </div>
  );
};

export default ContainMain;

import React from "react";
import Cards from "../../component/Cards/Cards";
import Transaction from "../../Transaction/Transaction";
import "./ContainMain.css";
import Report from "../../Report/Report";
const ContainMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transaction />
        <Report />
      </div>
    </div>
  );
};

export default ContainMain;

import React from "react";
import Cards from "../../component/Cards/Cards";
import Transaction from "../../Transaction/Transaction";
import "./ContainMain.css";
import Report from "../../Report/Report";
import Budget from "../Budget/Budget";
import Subcription from "../Subcription/Subcription";
import Savings from "../Savings/Saving";
import Loan from "../Loans/Loan";
import Financial from "../Financial/Financial";
const ContainMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transaction />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subcription />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item grid-two-item-wide">
          <div className="subgrid-two">
            <Loan />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainMain;

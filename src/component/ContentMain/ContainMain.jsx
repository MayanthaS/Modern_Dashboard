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
        <div className="grid-slot grid-slot-budget">
          <Budget />
        </div>
        <div className="grid-slot grid-slot-subscription">
          <Subcription />
        </div>
        <div className="grid-slot grid-slot-savings">
          <Savings />
        </div>
        <div className="grid-slot grid-slot-loan">
          <Loan />
        </div>
        <div className="grid-slot grid-slot-financial">
          <Financial />
        </div>
      </div>
    </div>
  );
};

export default ContainMain;

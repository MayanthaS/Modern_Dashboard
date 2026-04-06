import React from "react";
import "./Loan.css";
import { iconsImgs } from "../../utils/image";

const Loan = () => {
  const progress = 64;

  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Loans</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>

      <div className="grid-c7-content">
        <div className="loan-visual">
          <div
            className="loan-ring"
            style={{ "--loan-progress": `${progress}%` }}
          >
            <div className="loan-ring-inner">
              <span className="loan-ring-value">{progress}%</span>
              <span className="loan-ring-label">Paid</span>
            </div>
          </div>
        </div>

        <ul className="data-list">
          <li className="data-item">
            <span className="data-item-text">Paid Amount</span>
            <span className="data-item-value">$102,000</span>
          </li>
          <li className="data-item">
            <span className="data-item-text">Outstanding</span>
            <span className="data-item-value">$58,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loan;

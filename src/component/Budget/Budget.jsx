import React from "react";
import "./Budget.css";
import { iconsImgs } from "../../utils/image";
import { budget } from "../../data/data";

const Budget = () => {
  const totalBudget = budget.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <div>
          <h3 className="grid-c-title-text">Budget</h3>
          <p className="grid-c4-summary">Current planned spending overview</p>
        </div>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>

      <div className="grid-c4-top">
        <div>
          <p className="grid-c4-label">Cash</p>
          <h2 className="lg-value">$1,234.56</h2>
        </div>
        <div className="grid-c4-total">
          <span>Total Budget</span>
          <strong>${totalBudget}</strong>
        </div>
      </div>

      <div className="grid-c4-content">
        <div className="grid-items">
          {budget.map((item) => (
            <div className="grid-item" key={item.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} alt="" />
                </div>
                <div className="budget-copy">
                  <p>{item.title}</p>
                  <span>{item.type || "Manual"}</span>
                </div>
              </div>

              <div className="grid-item-r">
                <span>${item.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;

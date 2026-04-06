import React from "react";
import "./Financial.css";
import { iconsImgs } from "../../utils/image";
import { financialGoals } from "../../data/data";

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <div>
          <h3 className="grid-c-title-text">Financial Goals</h3>
          <p className="grid-c8-summary">Track progress across your next priorities</p>
        </div>
        <button className="grid-c-title-icon" type="button">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c8-content">
        <div className="grid-c8-items">
          {financialGoals.map((goal) => {
            const progress = Math.round((goal.saved / goal.target) * 100);

            return (
              <div className="grid-c8-item" key={goal.id}>
                <div className="grid-c8-item-top">
                  <div>
                    <p className="grid-c8-item-title">{goal.title}</p>
                    <span className="grid-c8-item-time">Timeline {goal.timeline}</span>
                  </div>
                  <span className="grid-c8-item-progress">{progress}%</span>
                </div>

                <div className="grid-c8-item-meta">
                  <span>Saved ${goal.saved}</span>
                  <span>Target ${goal.target}</span>
                </div>

                <div className="grid-c8-item-fill">
                  <div
                    className="grid-c8-item-fill-value"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Financial;

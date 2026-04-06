import React from "react";
import { savings } from "../../data/data";
import "./Savings.css";
import { iconsImgs } from "../../utils/image";

const Saving = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <div>
          <h3 className="grid-c-title-text">Savings</h3>
          <p className="grid-c6-summary">Track active goals and remaining balance</p>
        </div>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>

      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((saving) => {
            const progress = Math.max(
              0,
              Math.min(
                100,
                ((saving.saving_amount - saving.amount_left) / saving.saving_amount) * 100
              )
            );

            return (
              <div className="grid-item" key={saving.id}>
                <div className="grid-item-top">
                  <div className="grid-item-top-l">
                    <div className="avatar img-fit-cover">
                      <img src={saving.image} alt="" />
                    </div>
                    <div className="saving-copy">
                      <p>{saving.title}</p>
                      <span>Started {saving.date_taken}</span>
                    </div>
                  </div>

                  <div className="grid-item-top-r">
                    <span>${saving.saving_amount}</span>
                  </div>
                </div>

                <div className="grid-item-bottom">
                  <span className="grid-item-badge">Left ${saving.amount_left}</span>
                  <span className="grid-item-badge">{Math.round(progress)}% saved</span>
                </div>

                <div className="grid-item-fill">
                  <div
                    className="grid-item-fill-value"
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

export default Saving;

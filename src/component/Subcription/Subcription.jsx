import React from "react";
import "./Subcription.css";
import { subscriptions } from "../../data/data";
import { iconsImgs } from "../../utils/image";

const Subcription = () => {
  const totalSubscriptions = subscriptions.reduce(
    (sum, subscription) => sum + subscription.amount,
    0
  );

  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <div>
          <h3 className="grid-c-title-text">Subscriptions</h3>
          <p className="grid-c5-summary">
            {subscriptions.length} active plans · ${totalSubscriptions}
          </p>
        </div>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>

      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((subscription) => (
            <div className="grid-item" key={subscription.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.wallet} alt="" />
                </div>
                <div className="subscription-text">
                  <p>{subscription.title}</p>
                  <span>Due {subscription.due_date}</span>
                </div>
              </div>

              <div className="grid-item-r">
                <span>${subscription.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcription;

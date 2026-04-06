import React from "react";
import "./Report.css";
import { iconsImgs } from "../utils/image";
import { reportData } from "../data/data";

const Report = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Reports</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>

      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="chart-vert-value">
            <span>100</span>
            <span>75</span>
            <span>65</span>
            <span>25</span>
            <span>0</span>
          </div>

          {reportData.map((report) => (
            <div className="grid-chart-bar" key={report.id}>
              <div className="bar-wrapper">
                {report.value2 !== null && report.value2 > report.value1 && (
                  <div
                    className="bar-item2"
                    style={{ height: `${report.value2 - report.value1}%` }}
                  ></div>
                )}
                <div
                  className="bar-item1"
                  style={{ height: `${report.value1}%` }}
                ></div>
              </div>
              <span className="bar-hortz-value">{report.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;

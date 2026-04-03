import React from "react";
import "./content.css";
import ContentTop from "../../component/ContentTop/ContentTop";
import ContainMain from "../../component/ContentMain/ContainMain";

const content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContainMain />
    </div>
  );
};

export default content;

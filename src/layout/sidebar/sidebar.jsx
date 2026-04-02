import React from "react";
import "./sidebar.css";
import { personsImgs } from "../../utils/image";
import { navigationLinks } from "../../data/data";

const sidebar = () => {
  return (
    <div className={`sidebar`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">Mayantha Sapumal</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLinks) => (
            <li className="mav-items" key={navigationLinks.id}>
              <a href="#" className={`nav-link`}>
                <img
                  src={navigationLinks.image}
                  className="nav-link-icon"
                  alt={navigationLinks.title}
                />
                <span className="nav-link-text">{navigationLinks.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default sidebar;

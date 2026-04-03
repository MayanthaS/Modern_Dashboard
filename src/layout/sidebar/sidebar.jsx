import React from "react";
import "./sidebar.css";
import { personsImgs } from "../../utils/image";
import { navigationLinks } from "../../data/data";
import { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const sidebar = () => {
  const [activeLinkIDX] = useState(1);
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={`sidebar ${isOpen ? "sidebar-change" : ""}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">Mayantha Sapumal</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLinks) => (
            <li className="nav-items" key={navigationLinks.id}>
              <a
                href="#"
                className={`nav-link ${navigationLinks.id === activeLinkIDX ? "active" : ""}`}
              >
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

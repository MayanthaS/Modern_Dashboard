import "./sidebar.css";
import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReucer";
import PropTypes from "prop-types";

const initialState = {
  isOpen: false,
};
const SidebarContext = createContext({});
const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  return (
    <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
SidebarProvider.PropTypes = {
  children: PropTypes.node,
};

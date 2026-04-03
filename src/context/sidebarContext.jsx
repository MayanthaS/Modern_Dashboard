import { createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReucer";

const initialState = {
  isOpen: false,
};

const SidebarContext = createContext(initialState);

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

export { SidebarContext, SidebarProvider };

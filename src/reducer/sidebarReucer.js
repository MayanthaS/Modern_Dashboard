const sidebarReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isOpen: false,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default sidebarReducer;

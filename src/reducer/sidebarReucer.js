const sidebarReducer = (state ,action) =>{
    if(action.type === "OPEN_SIDEBAR"){
        return {
            ...state,
            isOpen: true
        }
    }
    throw new Error(`No matching "${action.type}" - action type`)
}
export default sidebarReducer;
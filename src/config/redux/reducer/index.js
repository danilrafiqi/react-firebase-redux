const initialState = {
  popup: false,
  isLogin: false,
  user: "anil",
  isLoading:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_POPUP":
      return {
        ...state,
        popup: action.value
      };
    case "CHANGE_ISLOGIN":
      return {
        ...state,
        isLogin: action.value
      };
    case "CHANGE_USER":
      return {
        ...state,
        user: action.value
      };
    case "CHANGE_ISLOADING":
      return {
        ...state,
        isLoading: action.value
      };      
    default:
      return state;
  }
};

export default reducer;

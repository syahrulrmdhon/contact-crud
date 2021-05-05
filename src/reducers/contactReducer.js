const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  message: "",
};

const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CONTACT_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CONTACT_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get the List",
      };
    case "CONTACT_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload ? action.payload.data : [],
        errorMsg: "",
        message: action.payload ? action.payload.message : ""
      };
    default:
      return state;
  }
};

export default contactReducer;

import { SET_CURRENT,  DEL_CURRENT} from "./currentRequestTypes";


const currentRequestReducer = (state = "", action) => {
  switch (action.type) {
    case SET_CURRENT:
      return action.payload;
    case DEL_CURRENT:
      return "";
    default:
      return state;
  }
};

export default currentRequestReducer;

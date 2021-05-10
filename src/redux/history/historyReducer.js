import { ADD_TO_HISTORY_REQUEST,  ADD_TO_HISTORY_RESPONSE} from "./historyTypes";

const historyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY_REQUEST:
      return [...state, action.payload];
    case ADD_TO_HISTORY_RESPONSE:
      const newState = state.map(el => {
        if (action.payload.id === el.id) {
          return {...el, response: action.payload.response}
        } else {
          return el
        }
      })
      return newState;
    default:
      return state;
  }
};

export default historyReducer;

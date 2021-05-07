import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./requestsTypes";

// Initial State
const initialState = {
  loading: false,
  response: {},
  error: ''
};

// Reducer
export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      response: action.payload,
      error: ''
    };
    case FETCH_FAILURE:
    return {
      ...state,
      loading: false,
      response: {},
      error: action.payload
    };
    default:
      return state;
  };
};

export default requestReducer;
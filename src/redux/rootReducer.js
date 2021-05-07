import { combineReducers } from "redux";
import requestsReducer from "./requests/requestsReducer";

const rootReducer = combineReducers({
  requests: requestsReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import requestsReducer from "./requests/requestsReducer";
import historyReducer from "./history/historyReducer";
import currentRequestReducer from "./currentRequest/currentRequestReducer";

const rootReducer = combineReducers({
  requests: requestsReducer,
  history: historyReducer,
  currentRequest: currentRequestReducer,
});

export default rootReducer;
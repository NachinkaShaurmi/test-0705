import { ADD_TO_HISTORY_REQUEST,  ADD_TO_HISTORY_RESPONSE} from "./historyTypes";

export const addToHistoryRequest = (request) => ({
  type: ADD_TO_HISTORY_REQUEST,
  payload: request
});
export const addToHistoryResponse = (request) => ({
  type: ADD_TO_HISTORY_RESPONSE,
  payload: request
});

import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./requestsTypes";

// Action Creators

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export const fetchSuccess = (response) => ({
  type: FETCH_SUCCESS,
  payload: response
});

export const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  payload: err
});

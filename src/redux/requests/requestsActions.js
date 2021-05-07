import axios from "axios";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./requestsTypes";

// Action Creators

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = (response) => ({
  type: FETCH_SUCCESS,
  payload: response
});

const fetchFailure = (err) => ({
  type: FETCH_FAILURE,
  payload: err
});

const requestData = (req) => (dispatch) => {
  dispatch(fetchRequest());
  axios({
    method: req.method,
    url: req.url,
    headers: req.headers,
    data: JSON.stringify(req.body),
  })
    .then(res => {
      dispatch(fetchSuccess(res));
    })
    .catch(err => {
      dispatch(fetchFailure(err.message));
    });
};

export default requestData;

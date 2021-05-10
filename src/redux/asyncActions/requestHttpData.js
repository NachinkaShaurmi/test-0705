import axios from "axios";
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from "../requests/requestsActions";
import { addToHistoryResponse } from "../history/historyActions"


const requestHttpData = ({ request, id }) => (dispatch) => {
  dispatch(fetchRequest());
  const {method, url, headers, body} = request;
  axios({
    method: method,
    url: url,
    headers: headers,
    data: JSON.stringify(body),
  })
    .then((res) => {
      dispatch(fetchSuccess(res));
      dispatch(addToHistoryResponse({id, response: res}));
    })
    .catch((err) => {
      dispatch(fetchFailure(err.message));
      dispatch(addToHistoryResponse({id, response: err}));
    });
};

export default requestHttpData;

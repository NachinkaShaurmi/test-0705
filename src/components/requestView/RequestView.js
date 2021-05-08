import React from "react";
import { useSelector } from "react-redux";
import {
  getHistoryFromState,
  getCurrentFromState,
} from "../../redux/selectors";
import responseTransform from "../../assets/responseTransform";
import "./requestView.css";

const RequestView = () => {
  const currentId = useSelector(getCurrentFromState);
  const history = useSelector(getHistoryFromState);
  let currentRequest;
  for (let i = 0; i < history.length; i++) {
    if (history[i].id === currentId) {
      currentRequest = history[i];
      break;
    }
  }
  const { request } = currentRequest;
  const requestBodyView = responseTransform(request?.body);
  const requestHeadersView = responseTransform(request?.headers);
  console.log(requestBodyView);
  return (
    <div className="request">
      <h2 className="request__title">Request:</h2>
      <div className="request__data">
        <p>method: {request?.method}</p>
        <p>url: {request?.url}</p>
        {requestBodyView.length ? (
          <>
            <h4>Body</h4>
            <div>{requestBodyView}</div>
          </>
        ) : null}
        {requestHeadersView.length ? (
          <>
            <h4>Headers</h4>
            {requestHeadersView}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default RequestView;

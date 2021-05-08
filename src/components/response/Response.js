import React from 'react'
import { useSelector } from "react-redux";
import { getHistoryFromState, getCurrentFromState } from "../../redux/selectors";
import responseTransform from "../../assets/responseTransform"
import "./response.css"

const Response = () => {
  const currentId = useSelector(getCurrentFromState);
  const history = useSelector(getHistoryFromState);
  let currentRequest = {
    response: {
      data: null,
      headers: null,
      status: null,
    },
    error: null
  };
  for (let i = 0; i < history.length; i++) {
    if (history[i].id === currentId){
      currentRequest = history[i];
      break
    } 
  }
  const { response } = currentRequest;

  let dataView = responseTransform(response?.data);
  let headersView = responseTransform(response?.headers);
  
  return (
    <div className="response">
      <h2 className="response__title">Response:</h2>
      {response?.status && <p className="response__status">Status code: {response?.status}</p>}
      {response?.data && <div className="response__data">
        <h3>Data</h3>
        {dataView}
      </div>}
      {response?.headers && <div className="response__headers">
        <h3>Headers</h3>
        {headersView}
      </div>}
      {response?.message && <div className="response__error">
        {response?.message}
      </div>}
    </div>
  )
}

export default Response

import React from 'react'
import { useSelector } from "react-redux";
import { getRequestFromState } from "../../redux/selectors";

const Response = () => {
  const { response, error } = useSelector(getRequestFromState);
  const {data, headers, status} = response;
  let dataView;
  if (data) {
    if (Array.isArray(data)) {
      dataView = data.map(el => Object.entries(el).map(obj => <p>{`${obj[0]} : ${obj[1]}`}</p>))
    } else {
      dataView = Object.entries(response.data).map(el => <p>{`${el[0]} : ${el[1]}`}</p>)
    }
  }
  
  return (
    <div>
      <p>Status code: {status}</p>
      {dataView}
      {error}
    </div>
  )
}

export default Response

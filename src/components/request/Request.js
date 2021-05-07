import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Radio } from "antd";
import { getRequestFromState } from "../../redux/selectors";
import textTransform from "../../assets/textTransform"
import requestData from "../../redux/requests/requestsActions"
import "./request.css"

const Request = () => {
  const dispatch = useDispatch();
  const options = [
    { label: "GET", value: "GET" },
    { label: "POST", value: "POST" },
    { label: "PUT", value: "PUT" },
    { label: "DELETE", value: "DELETE" },
  ];
  const { Search, TextArea } = Input;
  const { loading } = useSelector(getRequestFromState);
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState(options[0].value);
  const [headersText, setHeadersText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const headers = textTransform(headersText);
  const body = textTransform(bodyText);
  

  const myReq = {
    method: method,
    url: url,
    headers: headers,
    body: body,
  };

  const onSearch = () => {
    dispatch(requestData(myReq));
  };

  return (
    <div className="request">
      <Radio.Group
        className="request__element"
        options={options}
        onChange={(e) => setMethod(e.target.value)}
        value={method}
        optionType="button"
        buttonStyle="solid"
      />
      <Search
        className="request__element"
        placeholder="HTTP URL"
        enterButton="Send"
        size="large"
        loading={loading}
        onChange={(e) => setUrl(e.target.value)}
        onSearch={onSearch}
      />
      <div className="request__element">
        <h3>Headers</h3>
        <TextArea
          rows={4}
          onChange={(e) => setHeadersText(e.target.value)}
          value={headersText}
          placeholder={"test: test,\ntest: test"}
        />
      </div>
      {method !== "GET" && (
        <div className="request__element">
          <h3>Body</h3>
          <TextArea
            rows={4}
            onChange={(e) => setBodyText(e.target.value)}
            value={bodyText}
            placeholder={"name: value,\nsurname: value"}
          />
        </div>
      )}
    </div>
  );
};

export default Request;

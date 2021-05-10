import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Radio } from "antd";
import {
  getHistoryFromState,
  getCurrentFromState,
  getRequestFromState,
} from "../../redux/selectors";
import { addToHistoryRequest } from "../../redux/history/historyActions";
import { setCurrent } from "../../redux/currentRequest/currentRequestActions";
import textTransformToObject from "../../assets/textTransformToObject";
import textTransformFromObject from "../../assets/textTransformFromObject";
import requestHttpData from "../../redux/asyncActions/requestHttpData";
import { v4 as uuidv4 } from "uuid";
import "./requestForm.css";

const RequestForm = () => {
  const dispatch = useDispatch();
  const currentId = useSelector(getCurrentFromState);
  const history = useSelector(getHistoryFromState);
  const options = [
    { label: "GET", value: "GET" },
    { label: "POST", value: "POST" },
    { label: "PUT", value: "PUT" },
    { label: "DELETE", value: "DELETE" },
  ];
  const { Search, TextArea } = Input;
  const { loading } = useSelector(getRequestFromState);
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const [method, setMethod] = useState(options[0].value);
  const [headersText, setHeadersText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const headers = textTransformToObject(headersText);
  const body = textTransformToObject(bodyText);

  const myReq = {
    id: uuidv4(),
    date: new Date(Date.now()).toLocaleTimeString("ru-RU"),
    request: {
      method: method,
      url: url,
      headers: headers,
      body: body,
    },
  };

  useEffect(() => {
    if (currentId) {
      let currentRequest;
      for (let i = 0; i < history.length; i++) {
        if (history[i].id === currentId) {
          currentRequest = history[i];
          break;
        }
      }
      setMethod(currentRequest?.request?.method);
      setUrl(currentRequest?.request?.url);
      setHeadersText(textTransformFromObject(currentRequest?.request?.headers));
      setBodyText(textTransformFromObject(currentRequest?.request?.body));
    }
  }, [currentId]);

  const onSearch = () => {
    dispatch(requestHttpData(myReq));
    dispatch(addToHistoryRequest(myReq));
    dispatch(setCurrent(myReq.id));
  };

  return (
    <div className="request">
      <Radio.Group
        className="request-form__element"
        options={options}
        onChange={(e) => setMethod(e.target.value)}
        value={method}
        optionType="button"
        buttonStyle="solid"
      />
      <Search
        className="request-form__element"
        placeholder="HTTP URL"
        enterButton="Send"
        size="large"
        disabled={loading}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onSearch={onSearch}
      />
      <div className="request-form__element">
        <h3>Headers</h3>
        <TextArea
          rows={4}
          onChange={(e) => setHeadersText(e.target.value)}
          value={headersText}
          placeholder={"test: test,\ntest: test"}
        />
      </div>
      {method !== "GET" && (
        <div className="request-form__element">
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

export default RequestForm;

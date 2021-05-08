import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHistoryFromState } from "../../redux/selectors";
import { List, Divider } from "antd";
import { setCurrent } from "../../redux/currentRequest/currentRequestActions";
import "./history.css"

const History = () => {
  const dispatch = useDispatch();
  const history = useSelector(getHistoryFromState);
  const handleHistoryClick = (id) => {
    dispatch(setCurrent(id));
  };
  return history.length ? (
    <div className="history">
      <Divider orientation="center">History</Divider>
      <List
        size="large"
        bordered
        dataSource={history}
        renderItem={(history) => (
          <List.Item onClick={() => handleHistoryClick(history.id)} className="history__item">
            {`${history.date} - ${history.request.method} - ${history.request.url}`}
          </List.Item>
        )}
      />
    </div>
  ) : null;
};

export default History;

import React from 'react';
import { useSelector } from "react-redux";
import { getQueueFromState } from "../../redux/selectors";
import { List, Divider } from "antd";

const Queue = () => {
  const queue = useSelector(getQueueFromState);
  return queue.length ? (
    <div className="queue">
      <Divider orientation="center">Queue</Divider>
      <List
        size="large"
        bordered
        dataSource={queue}
        renderItem={(queue) => (
          <List.Item onClick={() => console.log(1)} className="queue__item">
            {`${queue.date} - ${queue.request.method} - ${queue.request.url}`}
          </List.Item>
        )}
      />
    </div>
  ) : null;
}

export default Queue;

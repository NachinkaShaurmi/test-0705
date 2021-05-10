import React, { useRef, useState } from "react";
import { Input, Divider } from "antd";
import "./webSocket.css";

const testInitState = [
  {
    event: "connection",
    username: "testUser0",
    id: "123456",
  },
  {
    event: "message",
    username: "testUser1",
    id: "654321",
    message: "Hello World",
  },
];

const MyWebSocket = () => {
  const [wsUrl, setWsUrl] = useState("ws://localhost:5500");
  const [messages, setMessages] = useState(testInitState);
  const [connected, setConnected] = useState(false);
  const [name, setName] = useState("Test");
  const socket = useRef();

  const { Search } = Input;

  function connect() {
    socket.current = new WebSocket(wsUrl);
    socket.current.onopen = () => {
      setConnected(true);
      const message = {
        event: "connection",
        username: name,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
    };
    socket.current.onclose = () => {
      console.log("Socket close");
    };
    socket.current.onerror = () => {
      console.log("Socket error");
    };
  }

  return (
    <div className="ws-form">
      <Divider orientation="center">WebSocket</Divider>
      <Search
        className="ws-form__element"
        placeholder="HTTP URL"
        enterButton="Connect"
        size="large"
        value={wsUrl}
        onChange={(e) => setWsUrl(e.target.value)}
        onSearch={connect}
      />
      <Input
        placeholder="Name"
        value={name}
        className="ws-form__element"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="ws-form__element ws-form__messages">
        {messages.map((mess) => (
          <div key={mess.id}>
            {mess.event === "connection" ? (
              <div className="ws-form__message ws-form__message_connection">
                Пользователь {mess.username} подключился
              </div>
            ) : (
              <div className="ws-form__message ws-form__message_data">
                {mess.username}: {mess.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWebSocket;

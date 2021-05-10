const ws = require("ws");

const PORT = 5500;

const wss = new ws.Server({port: PORT}, () => console.log(`Server started on ${PORT}`));

wss.on("connection", function connection(ws) {
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadcastMessage(message);
        break;
      case "connection":
        console.log("new connection");
        broadcastMessage(message);
        break;
    }
  });
});

function broadcastMessage(message) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

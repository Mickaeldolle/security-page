const http = require("http");
const port = process.env.PORT || 3000;

const app = require("./app");

app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server is running on port " + port);
});

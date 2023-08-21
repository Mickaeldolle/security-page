const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const router = require("./src/router/router");

app.set("view engine", "ejs");
app.set("views", "views");

app
  .use(express.static(__dirname + "/public"))
  .use(express.json())
  .use(cookieParser());

app.use(router);

app.listen(4000, () => {
  console.log(`Server on port 4000`);
});

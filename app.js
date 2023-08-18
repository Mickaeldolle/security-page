const express = require("express");
const app = express();
const auth = require("./auth");
const usersDataBase = require("./users_db.json");
const path = require("path");
const cookieParser = require("cookie-parser");
const routerView = require("./src/router/router");
const routerUser = require("./src/router/user");

app.set("view engine", "ejs");
app.set("views", "views");

app
  .use(express.static(path.join(__dirname, "public")))
  .use(express.json())
  .use(cookieParser());

app.use(routerView);
app.use(routerUser);

// Middleware de connexion !!

// app.use((req, res, next) => {
//   const { token, userId } = req.cookies;
//   let authorizedUser = usersDataBase.find((user) => user._id === userId);
//   if (!authorizedUser) {
//     res.redirect("/connexion");
//   } else if (authorizedUser.profil != "admin") {
//     console.log("vous n'avez pas les droits");
//   } else {
//     next();
//   }
// });

app.listen(4000, () => {
  console.log(`Server on port 4000`);
});

const express = require("express");
const app = express();
const auth = require("./auth");
const usersDataBase = require("./users_db.json");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const oneDay = 1000 * 60 * 60 * 24;

const user = {
  username: "normaluser@gmail.com",
  password: "123",
};

app
  .use(cookieParser())
  .use(
    session({
      secret: "zdada5azdinad_5azdoin:dazd$azd!",
      saveUninitialized: true,
      resave: false,
      cookie: { maxAge: oneDay },
    })
  )
  .use(express.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname, "pages")))
  .use(express.json());

app.get("/", (req, res) => {
  session = req.session;
  if (session.userId) {
    res.send("Welcome user !!");
  } else {
    res.sendFile(__dirname + "/pages/index.html");
  }
});

app.get("/connexion", (req, res) => {
  res.sendFile(__dirname + "/pages/connexion.html");
});

app.get("/admin", auth.authorisation, (req, res) => {
  res.sendFile(__dirname + "/pages/secret.html");
});

app.post("/login", (req, res) => {
  // ------------- Utilisation de la session pour l'authentification
  if (req.body.username) {
  }

  // ------------- Utilisation du token pour l'authentification
  /*
  let User = req.body;
  let founduser = usersDataBase.find((user) => user.email === User.email);
  if (!founduser) {
    res
      .status(404)
      .json({ error: "Aucun compte n'a été trouvé dans la base de donnée" });
  } else {
    let index = usersDataBase.findIndex((user) => user.email === User.email);
    if (User.password !== usersDataBase[index].password) {
      res.json({ err: "Le mot de passe ne correspond a aucune adresse mail" });
    } else {
      res.status(200).json({
        userId: usersDataBase[index]._id,
        _token: usersDataBase[index].token,
      });
    }
  }
  */
});

module.exports = app;

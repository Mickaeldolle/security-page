const express = require("express");
const app = express();
const auth = require("./auth");
const usersDataBase = require("./users_db.json");
const path = require("path");

app.use(express.static(path.join(__dirname, "pages"))).use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/connexion", (req, res) => {
  res.sendFile(__dirname + "/pages/connexion.html");
});

app.get("/admin", auth.authorisation, (req, res) => {
  res.sendFile(__dirname + "/pages/secret.html");
});

app.post("/login", (req, res) => {
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
});

module.exports = app;

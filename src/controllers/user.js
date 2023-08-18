const usersDataBase = require("../../users_db.json");
exports.login = (req, res) => {
  // ------------- Utilisation du token pour l'authentification
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
};

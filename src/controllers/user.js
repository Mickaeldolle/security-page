const usersDataBase = require("../../users_db.json");

exports.login = (req, res) => {
  console.log(req.body);
  // ------------- Utilisation du token pour l'authentification
  let userConnexion = req.body;
  let validUser = usersDataBase.find(
    (user) =>
      user.email === userConnexion.email &&
      user.password === userConnexion.password
  );

  // ------------- On vérifie que l'utilisateur est valide !
  if (!validUser) {
    res
      .status(401)
      .json({ error: "Aucun compte n'a été trouvé dans la base de donnée" });
  } else {
    res.status(200).json({
      userId: validUser._id,
      token: validUser.token,
    });
  }
};

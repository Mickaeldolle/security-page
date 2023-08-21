const usersDataBase = require("../../users_db.json");

exports.isAdmin = (req, res, next) => {
  const { userId, token } = req.cookies;
  let authorizedUser = usersDataBase.find((user) => user._id === userId);
  if (!authorizedUser) {
    res.status(200).redirect("/connexion");
  } else if (authorizedUser.profil != "admin") {
    res.status(401).render("forbidden");
  } else {
    next();
  }
};

exports.isConnected = (req, res, next) => {
  const { token, userId } = req.cookies;
  let autentifiedUser = usersDataBase.find((user) => user._id === userId);
  if (!autentifiedUser) {
    res.status(200).redirect("/connexion");
  } else {
    next();
  }
};

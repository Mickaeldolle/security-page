const usersDataBase = require("../../users_db.json");
exports.isAdmin = (req, res, next) => {
  const { token, userId } = req.cookies;
  let authorizedUser = usersDataBase.find((user) => user._id === userId);
  if (!authorizedUser) {
    res.redirect("/connexion");
  } else if (authorizedUser.profil != "admin") {
    console.log("vous n'avez pas les droits");
  } else {
    next();
  }
};

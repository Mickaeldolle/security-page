const userDataBase = require("../../users_db.json");
exports.homePage = (req, res) => {
  res.status(200).render("index");
};

exports.connexionPage = (req, res) => {
  const { userId } = req.cookies;
  let isAdmin = userDataBase.find((user) => user._id === userId);

  if (!isAdmin || isAdmin.profil != "admin") {
    isAdmin = false;
  } else {
    isAdmin = true;
  }
  res.status(200).render("connexion", { isAdmin });
};

exports.adminPage = (req, res) => {
  res.status(200).render("secret");
};

exports.myAccountPage = (req, res) => {
  const { userId } = req.cookies;
  const myInfos = userDataBase.find((account) => account._id === userId);
  delete myInfos.password;
  delete myInfos.token;
  res.status(200).render("myAccount", { myInfos });
};

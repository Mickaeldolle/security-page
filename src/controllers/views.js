exports.homePage = (req, res) => {
  res.render("index");
};

exports.connexionPage = (req, res) => {
  res.render("connexion");
};

exports.adminPage = (req, res) => {
  res.render("secret");
};

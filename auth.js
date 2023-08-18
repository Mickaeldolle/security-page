const usersDataBase = require("./users_db.json");
const cookieParser = require("cookie-parser");

exports.authorisation = (req, res, next) => {
  // console.log(req.headers);
  if (!req.headers.authorization) {
    res.status(404).end();
  } else {
    let auth = req.headers.authorization.split(" ")[1];
    let indexToken = usersDataBase.findIndex((user) => user.token === auth);
    let indexId = usersDataBase.findIndex(
      (user) => user._id === req.headers.userid
    );
    if ((indexToken || indexId) === -1 || indexToken != indexId) {
      res.status(401).json({ error: "Unauthorized" });
    } else {
      res.status(200);
      next();
    }
  }
};

exports.admin = (req, res, next) => {
  const { token, userId } = req.cookies;
  let authorizedUser = usersDataBase.find((user) => user._id === userId);
  if (!authorizedUser) {
    res.redirect("/connexion");
  } else if (authorizedUser.profil != "admin") {
    console.log("non auhorisé");
  } else {
    next();
  }
};

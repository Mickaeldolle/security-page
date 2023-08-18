const email = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const submit = document.querySelector('input[type="submit"]');
const deconnexionBtn = document.querySelector(".deconnexion");
const secretBtn = document.querySelector(".secret-page");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;

  const user = {
    email: emailValue,
    password: passwordValue,
  };

  fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.cookie = `token=${data._token}`;
      document.cookie = `userId=${data.userId}`;
    })
    .catch((err) => console.log("Erreur de requete au serveur | :", err));
});

// secretBtn.addEventListener("click", () => {
//   fetch("http://localhost:3000/admin", {
//     headers: {
//       "Content-Type": "text/html",
//       userId: JSON.parse(sessionStorage.getItem("token")).userId,
//       Authorization: `Bearer ${
//         JSON.parse(sessionStorage.getItem("token"))._token
//       }`,
//     },
//   })
//     .then((res) => res.text())
//     .then((html) => {
//       console.log(html);
//     })
//     .catch((err) => console.log(err));
// });

// deconnexionBtn.addEventListener("click", () => {
//   sessionStorage.clear();
// });

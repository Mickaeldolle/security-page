const email = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const submit = document.querySelector('input[type="submit"]');
const deconnexionBtn = document.querySelector(".deconnexion");

submit.addEventListener("click", (e) => {
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
      if (!data.userId || !data.token) {
        console.log(data.error);
      } else {
        document.cookie = `token=${data.token}`;
        document.cookie = `userId=${data.userId}`;
        window.location.reload();
      }
    })
    .catch((err) => console.log("Erreur de requete au serveur | :", err));
});

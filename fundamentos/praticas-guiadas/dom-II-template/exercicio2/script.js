const classForm = document.querySelector(".light");

classForm.classList.remove("light");
classForm.classList.add("dark");

const passwordInput = document.getElementById("password");

const escondeSenha = (event) => {
  event.preventDefault();
  passwordInput.setAttribute("type", "password");
};

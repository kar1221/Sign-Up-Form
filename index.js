const confirmPassword = document.querySelector("#confirm_password");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const nameInput = document.querySelectorAll(`input[type="text"]`);

password.addEventListener("input", (ev) => {
  const invalidMessage = document.querySelector(".invalid-message.password");
  if (ev.target.value.length < 8) {
    ev.target.classList.add("invalid");
    invalidMessage.style.display = "block";
  } else {
    ev.target.classList.remove("invalid");
    ev.target.classList.add("valid");
    invalidMessage.style.display = "none";
  }
});

confirmPassword.addEventListener("input", (ev) => {
  const invalidMessage = document.querySelector(
    ".invalid-message.confirm-password"
  );
  if (ev.target.value !== password.value) {
    ev.target.classList.add("invalid");
    ev.target.classList.remove("valid");
    invalidMessage.style.display = "block";
  } else {
    ev.target.classList.remove("invalid");
    ev.target.classList.add("valid");
    invalidMessage.style.display = "none";
  }
});

email.addEventListener("input", (ev) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const invalidMessage = document.querySelector(".invalid-message.email");

  if (ev.target.value.match(emailRegex)) {
    ev.target.classList.remove("invalid");
    ev.target.classList.add("valid");
    invalidMessage.style.display = "none";
  } else {
    ev.target.classList.add("invalid");
    ev.target.classList.remove("valid");
    invalidMessage.style.display = "block";
  }
});

nameInput.forEach((el) => {
  el.addEventListener("input", (e) => {
    if (e.target.value === "" || e.target.value.length < 1) {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    } else {
      e.target.classList.remove("invalid");
      e.target.classList.add("valid");
    }
  });
});

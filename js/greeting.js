const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const LOCALSTORAGE_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(LOCALSTORAGE_KEY, userName);
  paintGreeting(userName);
}

function paintGreeting(username) {
  const upperCaseName = username.toUpperCase();
  greeting.innerText = `HELLO ${upperCaseName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedUserName = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedUserName === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  } else {
    paintGreeting(savedUserName);
  }
});

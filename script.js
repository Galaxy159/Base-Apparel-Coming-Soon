"use-strict";

const input = document.querySelector(".component__email--input");
const errorSign = document.querySelector(".component__email--error-sign");
const errorMsg = document.querySelector(".component__email--error-msg");
const inputBtn = document.querySelector(".component__email--btn");

const validateEmail = function (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    errorMsg.classList.remove("hide");
    errorSign.classList.remove("hide");
  } else {
    errorMsg.classList.add("hide");
    errorSign.classList.add("hide");
  }
});

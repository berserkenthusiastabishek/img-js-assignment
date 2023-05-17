const { error } = require("console");

const confirmPwdDOM = document.getElementById("confirm-pwd");
const pwdDOM = document.getElementById("pwd");
const phnoDOM = document.getElementById("phno");
const emailDOM = document.getElementById("email");
const btn = document.getElementById("submit");
const inputFields = document.querySelector("input");
const qualSelector = document.querySelector("select");
const invalidCreds = document.getElementById("empty-field");
const errorMessages = document.getElementsByClassName("error-msg");
const checkEmail = (userEmail) => {
  const emailRegex = /\w+@\w+/;
  return emailRegex.test(userEmail);
};
const checkPHNO = (userNo) => {
  const phRegex = /\b\+?(91)?\d{10}\b/;
  return phRegex.test(userNo);
};
const toggleOn = (message) => {
  message.style.display = "block";
};
const toggleOff = (message) => {
  message.style.display = "none";
};
emailDOM.addEventListener("input", () => {
  if (emailDOM.value && !checkEmail(emailDOM.value)) {
    toggleOn(errorMessages[1]);
  } else {
    toggleOff(errorMessages[1]);
  }
});
phnoDOM.addEventListener("input", () => {
  if (phnoDOM.value && !checkPHNO(phnoDOM.value)) {
    toggleOn(errorMessages[0]);
  } else {
    toggleOff(errorMessages[0]);
  }
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value || !qualSelector.value) {
      toggleOn(invalidCreds);
      toggleOff(errorMessages[2]);
      return;
    }
  }
  toggleOff(invalidCreds);
  if (
    errorMessages[0].style.display === "block" ||
    errorMessages[1].style.display === "block"
  ) {
    return;
  }
  if (pwdDOM.value !== confirmPwdDOM.value) {
    toggleOn(errorMessages[2]);
    return;
  }
  toggleOff(errorMessages[2]);
});

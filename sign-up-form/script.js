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
emailDOM.addEventListener("input", () => {
  if (emailDOM.value && !checkEmail(emailDOM.value)) {
    errorMessages[1].style.display = "block";
  } else {
    errorMessages[1].style.display = "none";
  }
});
phnoDOM.addEventListener("input", () => {
  if (phnoDOM.value && !checkPHNO(phnoDOM.value)) {
    errorMessages[0].style.display = "block";
  } else {
    errorMessages[0].style.display = "none";
  }
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value) {
      invalidCreds.style.display = "block";
      errorMessages[2].style.display = "none";
      return;
    }
  }
  if (!qualSelector.value) {
    invalidCreds.style.display = "block";
    errorMessages[2].style.display = "none";
    return;
  }
  invalidCreds.style.display = "none";
  if (
    errorMessages[0].style.display === "block" ||
    errorMessages[1].style.display === "block"
  ) {
    return;
  }
  if (pwdDOM.value !== confirmPwdDOM.value) {
    errorMessages[2].style.display = "block";
    return;
  }
  errorMessages[2].style.display = "none";
});

const confirmPwdDOM = document.getElementById("confirm-pwd");
const pwdDOM = document.getElementById("pwd");
const phnoDOM = document.getElementById("phno");
const ageDOM = document.getElementById("age");
const emailDOM = document.getElementById("email");
const nameDOM = document.getElementById("name");
const cityDOM = document.getElementById("city");
const btn = document.getElementById("submit");
const inputFields = document.querySelector("input");
const qualSelector = document.querySelector("select");
const invalidCreds = document.getElementById("empty-field");
const errorMessages = document.getElementsByClassName("error-msg");
const checkField = (fieldVal, regex) => regex.test(fieldVal);
const emailRegex = /\w+@\w+/;
const phRegex = /\b\+?(91)?\d{10}\b/;
const ageRegex = /[1-9]+/;
const pwdRegex = /\w{6,}/;
const nameRegex = /[A-Za-z]+/;
// const checkEmail = (userEmail) => {
//   const emailRegex = /\w+@\w+/;
//   return emailRegex.test(userEmail);
// };
// const checkPHNO = (userNo) => {
//   const phRegex = /\b\+?(91)?\d{10}\b/;
//   return phRegex.test(userNo);
// };
// const checkAge = (userAge) => {
//   const ageRegex = /\b\d{2, 3}\b/;
//   return ageRegex.test(userAge);
// };
// const checkPWD = (userPWD) => {
//   const pwdRegex = /\w{6,}/;
//   return pwdRegex.test(userPWD);
// };
// const checkName = (userName) => {
//   const nameRegex = /\c+/
//   return nameRegex.test(userName)
// }
// const checkCity = (userName) =>
// {

// }
const toggleOn = (message) => {
  message.style.display = "block";
};
const toggleOff = (message) => {
  message.style.display = "none";
};
// const setErrorMessage = (message, errorString) =>
// {
//   message.innerHTML = errorString;
// }
const checkValidity = (value, regex, errorNo) => {
  console.log(checkField(value, regex))
  if (value && !checkField(value, regex)) {
    toggleOn(errorMessages[errorNo]);
  } else {
    toggleOff(errorMessages[errorNo]);
  }
};
phnoDOM.addEventListener("input", () => checkValidity(phnoDOM.value, phRegex, 0));
ageDOM.addEventListener("input", () => checkValidity(ageDOM.value, ageRegex, 1));
emailDOM.addEventListener("input", () =>
  checkValidity(emailDOM.value, emailRegex, 2)
);
pwdDOM.addEventListener("input", () => checkValidity(pwdDOM.value, pwdRegex, 3));
nameDOM.addEventListener("input", () => checkValidity(nameDOM.value, nameRegex, 5));
cityDOM.addEventListener("input", () => checkValidity(cityDOM.value, nameRegex, 6));

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('bp1')
  for (let i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value || !qualSelector.value) {
      toggleOn(invalidCreds);
      toggleOff(errorMessages[4]);
      console.log('bp2')
      return;
    }
  }
 console.log("bp3")
 const errorArray = []
 for(let i = 0; i < errorMessages.length; i++)
 {
  errorArray.push(errorMessages[i])
 }
  if (
    errorArray.filter(
      (error) => error.style.display === "block"
    ) === []
  ) {
    toggleOn(invalidCreds)
    console.log("bp4")
    return;
  }
  console.log("bp5")
  toggleOff(invalidCreds);
  if (pwdDOM.value !== confirmPwdDOM.value) {
    toggleOn(errorMessages[4]);
    console.log("bp5")
    return;
  }
  console.log("bp6")
  toggleOff(errorMessages[4]);
});

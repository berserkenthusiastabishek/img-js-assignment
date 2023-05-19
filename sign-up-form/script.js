const confirmPwdDOM = document.getElementById("confirm-pwd");
const pwdDOM = document.getElementById("pwd");
const phnoDOM = document.getElementById("phno");
const ageDOM = document.getElementById("age");
const emailDOM = document.getElementById("email");
const nameDOM = document.getElementById("name");
const cityDOM = document.getElementById("city");
const btn = document.getElementById("submit");
const inputFields = document.querySelectorAll("input");
const qualSelector = document.querySelector("select");
const invalidCreds = document.getElementById("empty-field");
const errorMessages = document.getElementsByClassName("error-msg");
const checkField = (fieldVal, regex) => regex.test(fieldVal);
const emailRegex = /\b\w+@\w+\.\w+\b/;
const phRegex = /\b\+?(91)?\d{10}\b/;
const ageRegex = /\b[1-9]+\b/;
const pwdRegex = /\w{6,}/;
const nameRegex = /[A-Za-z]+/;
const toggleOn = (message) => {
  message.style.display = "block";
};
const toggleOff = (message) => {
  message.style.display = "none";
};

const checkValidity = (value, regex, errorNo) => {
  console.log(checkField(value, regex));
  if (value && !checkField(value, regex)) {
    toggleOn(errorMessages[errorNo]);
  } else {
    toggleOff(errorMessages[errorNo]);
  }
};
phnoDOM.addEventListener("input", () =>
  checkValidity(phnoDOM.value, phRegex, 0)
);
ageDOM.addEventListener("input", () =>
  checkValidity(ageDOM.value, ageRegex, 1)
);
emailDOM.addEventListener("input", () =>
  checkValidity(emailDOM.value, emailRegex, 2)
);
pwdDOM.addEventListener("input", () =>
  checkValidity(pwdDOM.value, pwdRegex, 3)
);
nameDOM.addEventListener("input", () =>
  checkValidity(nameDOM.value, nameRegex, 5)
);
cityDOM.addEventListener("input", () =>
  checkValidity(cityDOM.value, nameRegex, 6)
);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(inputFields)
  for (let i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value) {
      console.log('bp1')
      alert("One or more fields are empty, please fill them")
      toggleOff(errorMessages[4]);
      return;
    }
  }
  if(!qualSelector.value)
  {
    alert("Please choose your qualification.")
    return;
  }

  const errorArray = [];
  for (let i = 0; i < errorMessages.length; i++) {
    errorArray.push(errorMessages[i]);
  }
  if (errorArray.filter((error) => error.style.display === "block") !== []) {
    alert("Please re-fill the invalid fields as indicated")
    return;
  }
  if (pwdDOM.value !== confirmPwdDOM.value) {
    toggleOn(errorMessages[4]);
    return;
  }
  toggleOff(errorMessages[4]);
  alert("Your response has been recorded")
});

const emailDOM = document.getElementById("email");
const pwdDOM = document.getElementById("password");
const btn = document.querySelector("button");
const errorMessage = document.getElementById("error-msg");

const checkEmail = (userEmail) => {
  const emailRegex = /\w+@\w+/;
  return emailRegex.test(userEmail);
};

pwdDOM.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
btn.addEventListener("click", async () => {
  const loginData = {
    username: "",
    email: emailDOM.value,
    password: pwdDOM.value,
  };
  try {
    if (!checkEmail(emailDOM.value)) {
      throw new Error("Please enter a valid email");
    }
    const loginResponse = await fetch("https://reqres.in/api/login", {
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginData),
    });
    if (!loginResponse.ok) {
      throw new Error("Invalid credentials");
    }
    const { token } = await loginResponse.json();
    console.log(token);
    errorMessage.innerHTML = `You have logged in succesfully, ${emailDOM.value}!`;
  } catch (error) {
    errorMessage.innerHTML = error;
  }
});

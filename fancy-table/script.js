// const data =
const mainTable = document.getElementById("main-table");
const createContainer = (containerClass) => {
  let container = document.createElement("div");
  container.className = containerClass;
  return container;
};
const getData = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const responseJSON = await response.json();
  const users = responseJSON.data;
  users.forEach((element) => {
    const { id, email, first_name, last_name, avatar } = element;
    let userContainer = createContainer("user");
    let emailContainer = createContainer("email");
    let nameContainer = createContainer("name");
    let pfpContainer = createContainer("pfp");
    userContainer.appendChild(pfpContainer);
    userContainer.appendChild(nameContainer);
    userContainer.appendChild(emailContainer);
    let pfp = document.createElement("img");
    pfp.src = avatar;
    pfpContainer.appendChild(pfp);
    let name = document.createTextNode(`${first_name} + ${last_name}`);
    nameContainer.appendChild(name);
    let userEmail = document.createTextNode(email);
    emailContainer.appendChild(userEmail);
    mainTable.appendChild(userContainer)
  });
};

getData();

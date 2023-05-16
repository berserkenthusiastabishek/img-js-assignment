// const data =
const mainTable = document.getElementById("main-table");
const getData = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const responseJSON = await response.json();
  const users = responseJSON.data;
  users.forEach((element) => {
    const { id, email, first_name, last_name, avatar } = element;
    const textVals = [id, email, first_name, last_name];
    
    textVals.forEach((textVal) => {
      let appendable = document.createElement("p");
      let textNode = document.createTextNode(textVal);
      appendable.appendChild(textNode);
      mainTable.appendChild(appendable);
    });
    let image = document.createElement('img')
    image.src = avatar;
    mainTable.appendChild(image)
  });
};

getData();

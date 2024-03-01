fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
const adress = "https://jsonplaceholder.typicode.com/todos/1";

let userData = [];
const loadData = (link) =>
  fetch(link)
    .then((response) => response.json())
    .then((data) => userData.push(data));

loadData(adress);
console.log(userData);

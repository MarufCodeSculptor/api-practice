const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => loadUser(data));
};

const loadUser = (data) => {
  data.forEach((data) => showUser(data));
};

const showUser = (props) => {
  const userContainer = document.getElementById("users-container");
  const userWrepper = document.createElement("div");
  userWrepper.classList.add("user");
  const userData = `<h1><strong>Name:</strong>${props.name}</h1>
  <h4> <strong>Username:</strong>${props.username}</h4>
  <h5> <strong>Email:</strong>${props.email}</h5>
  <p>
    <strong>Address:</strong> <strong></strong><strong>${props.address.suite}</strong>
    <strong>${props.address.city}</strong> <strong>${props.address.zipcode}</strong>
  </p>
  <p><strong>Phone:</strong> ${props.phone}</p>
  <p><strong>website:</strong>  ${props.website}</p>
  <p> <strong>company:
  </strong> ${props.company.name}</p>`;
  userWrepper.innerHTML = userData;
  userContainer.appendChild(userWrepper);
};
  


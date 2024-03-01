console.log("post is working");

const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPost(data));
};

const showPost = (data) => {
  data.forEach((info) => makePost(info));
};

const makePost = (data) => {
  console.log(data);
  const postWrepper = document.getElementById("post-container");
  const container = document.createElement("div");
  container.classList.add("post");

  const postData = `<h2>${data.title}</h2>
    <p>${data.body}</p>
    <span>${data.userId}</span>
    <span>${data.id}</span>`;
  container.innerHTML = postData;
  postWrepper.appendChild(container);
};

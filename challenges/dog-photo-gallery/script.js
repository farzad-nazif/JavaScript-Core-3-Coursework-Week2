let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let listHolder = document.getElementById("listHolder");
const url = "https://dog.ceo/api/breeds/image/random";
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

addBtn.addEventListener("click", (e) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.className = "img";
  li.className = "li";
  listHolder.appendChild(li);
  li.appendChild(img);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        img.setAttribute("src", data.message);
      } else if (data.status !== "success") {
        throw new Error("Server is not responsive");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
deleteBtn.addEventListener("click", (e) => {
  removeAllChildNodes(listHolder);
});

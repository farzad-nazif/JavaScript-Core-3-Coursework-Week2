function callApi(url) {
  function createImg(data) {
    let body = document.querySelector("body");
    let img = document.createElement("img");
    img.setAttribute("src", `${data.img}`);
    body.appendChild(img);
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createImg(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
callApi("https://xkcd.now.sh/?comic=latest");

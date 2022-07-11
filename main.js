import "./style.css";

let newPic = document.getElementById("picture");
let picInfo = document.getElementById("text");

fetch("https://picsum.photos/v2/list?limit=100")
  .then((result) => result.json())
  .then((output) => {
    let randNum = Math.floor(Math.random() * 101);
    let thisImage = output[randNum];
    newPic.src = thisImage.download_url;
    newPic.width = screen.availWidth * 0.7;
    picInfo.innerText =
      "Author: " + thisImage.author + "\n Image ID: " + thisImage.id;
  })
  .catch((err) => console.error(err));

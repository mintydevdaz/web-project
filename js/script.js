const toggleBtn = document.getElementById("toggle-button");
const headerText = document.getElementById("header-text");
const imageTag = document.getElementById("random-img");

const white = "#FFFFFF";
const black = "#0F0F0F";

function displayRandomImage() {
    const baseNames = ["chris_brown_dark_", "chris_brown_light_"];
    const baseFile = Math.floor(Math.random() * 2);
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const randomImage = `${baseNames[baseFile]}${randomNum}`;
    imageTag.src = `images/${randomImage}.jpg`;
}

function toggleImageColor() {
    displayRandomImage();
    const imageColor = imageTag.src;
    if (imageColor.includes("dark")) {
        setColors(black, white, "Chris Black!");
      } else {
        setColors(white, black, "Chris White!");
      }
}

function setColors(backgroundColor, textColor, textContent) {
    document.body.style.backgroundColor = backgroundColor;
    headerText.style.color = textColor;
    headerText.textContent = textContent;
  }

window.onload = displayRandomImage;

toggleBtn.addEventListener("click", toggleImageColor)

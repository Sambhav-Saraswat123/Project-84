const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const car1Image = "./car1.png";
const car2Image = "./car2.png";
const backgroundImage = "./racing.jpg";
const carHeight = 50;
const carWidth = 100;
let car1X = 10;
let car1Y = 10;
let car2X = 10;
let car2Y = 80;
window.onload = () => {
  backgroundImageTag = new Image();
  backgroundImageTag.onload = uploadBackground;
  backgroundImageTag.src = backgroundImage;
  car1ImageTag = new Image();
  car1ImageTag.onload = uploadCar1;
  car1ImageTag.src = car1Image;
  car2ImageTag = new Image();
  car2ImageTag.onload = uploadCar2;
  car2ImageTag.src = car2Image;
};
function uploadBackground() {
  ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
  ctx.drawImage(car1ImageTag, car1X, car1Y, carWidth, carHeight);
}
function uploadCar2() {
  ctx.drawImage(car2ImageTag, car2X, car2Y, carWidth, carHeight);
}
function move() {
  uploadBackground();
  uploadCar1();
  uploadCar2();
}

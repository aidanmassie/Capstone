import "./styles.css";

const left = document.getElementById("left");
const right = document.getElementById("right");

// these buttons shoudld each have event listeners that change the value of activeButton//
const solebtn = document.getElementById("button1");
const bodybtn = document.getElementById("button2");
const topbtn = document.getElementById("button3");
const colorbtn = document.getElementById("button4");

// these indices keep track of which selection the user has chosen for each part of the shoe //
let soleIndex = 0;
let bodyIndex = 0;
let topIndex = 0;
let colorIndex = 0;

// this activeButton value should change to indicate which part of the shoe the user is changing.//
let activeButton = 0;

//Identifying the assets
let soleUrls = [
  "assets/Red.png",
  "assets/Orange.png",
  "assets/Yellow.png",
  "assets/Green.png",
  "assets/Blue.png",
  "assets/Purple.png"
];

let topUrls = [
  "assets/Red.png",
  "assets/Orange.png",
  "assets/Yellow.png",
  "assets/Green.png",
  "assets/Blue.png",
  "assets/Purple.png"
];

let bodyUrls = [
  "assets/Red.png",
  "assets/Orange.png",
  "assets/Yellow.png",
  "assets/Green.png",
  "assets/Blue.png",
  "assets/Purple.png"
];

//Left/Right Button Clicks //
//Depending on which activeButton is clicked, change the index number of that specific attribute. //
left.addEventListener("click", () => {
  if (activeButton === 0) {
    soleIndex = (soleUrls.length + soleIndex - 1) % soleUrls.length;
  }
  // } else if (activeButton === 1) {
  //   skyIndex === (skyUrls.length + skyIndex - 1) % skyUrls.length;
  // } else if (activeButton === 2) {
  //   extraIndex = (extraUrls.length + extraIndex - 1) % extraUrls.length;
  // } else if (activeButton === 3) {
  //   extraIndex2 = (extraUrls.length + extraIndex2 - 1) % extraUrls.length;
  // }
  render();
});

right.addEventListener("click", () => {
  if (activeButton === 0) {
    soleIndex = (soleUrls.length + soleIndex + 1) % soleUrls.length;
  }
  // } else if (activeButton === 1) {
  //   skyIndex = (skyUrls.length + skyIndex + 1) % skyUrls.length;
  // } else if (activeButton === 2) {
  //   extraIndex = (extraUrls.length + extraIndex + 1) % extraUrls.length;
  // } else if (activeButton === 3) {
  //   extraIndex2 = (extraUrls.length + extraIndex2 + 1) % extraUrls.length;
  // }
  render();
});

//Move the URLs into another variable that allows the images to easily be drawn to the canvas. //
// Do this for each array of images. //
let soleImgs = soleUrls.map((url) => {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = url;
  return image;
});

// let skyImages = skyUrls.map((url) => {
//   const image = new Image();
//   image.crossOrigin = "anonymous";
//   image.src = url;
//   return image;
// });

// let extraImages = extraUrls.map((url) => {
//   const image = new Image();
//   image.crossOrigin = "anonymous";
//   image.src = url;
//   return image;
// });

// Drawing on the canvas //
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

soleImgs[0].addEventListener("load", render);
// skyImages[0].addEventListener("load", render);
// extraImages[0].addEventListener("load", render);
window.addEventListener("load", init);

let imgWidth = 400;
let centerWidth = canvas.width / 2 - imgWidth / 2;

function init() {
  render();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Create a new variable that calls the specific url of the index that you're on. //
  //console.log(sole) and click left/right buttons to see what happens. //
  let sole = soleImgs[soleIndex];
  // let extra = extraImages[extraIndex];
  // let sky = skyImages[skyIndex];
  // let extra2 = extraImages[extraIndex2];

  //Draw each image onto the canvas, using the correct index for each section. //
  // You might need to change the value of the img width and height depending on your assets //

  // ctx.drawImage(sky, centerWidth, 0, imgWidth, 541);
  // ctx.drawImage(extra, centerWidth, 0, imgWidth, 541);
  // ctx.drawImage(extra2, centerWidth, 0, imgWidth, 541);
  ctx.drawImage(sole, centerWidth, 0, imgWidth, 541);
}

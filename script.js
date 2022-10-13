const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "./media/flappy-bird-set.png";

// general settings
let gamePlaying = false;
const gravity = 0.5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = canvas.width / 10;

let index = 0,
  bestScore = 0,
  flight,
  flyHeight,
  currentScore,
  pipe;

// pipe settings
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => {};

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird)

  // setup first 3 pipes
};

const render = () => {
  //make the pipe and bird moving
  index++;

  // background first part
  // background second part

  // pipe display

  // draw bird

  document.getElementById("bestScore").innerHTML = `Meilleur : ${bestScore}`;
  document.getElementById(
    "currentScore"
  ).innerHTML = `Actuel : ${currentScore}`;

  // tell the browser to perform anim
  window.requestAnimationFrame(render);
};

// Launch setup
setup();
img.onload = render;

// start game
document.addEventListener("click", () => (gamePlaying = true));
window.onclick = () => (flight = jump);

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
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width,
    0,
    canvas.width,
    canvas.height
  );
  // background second part
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width),
    0,
    canvas.width,
    canvas.height
  );

  // pipe display

  // draw bird
  if (gamePlaying) {
    console.log("Jeu à faire...");
  } else {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight,
      ...size
    );
    flyHeight = canvas.height / 2 - size[1] / 2;
  }

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

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// const canvasPath = document.getElementById('path');
// var length = canvasPath.getTotalLength();
// canvas.height = window.length;
// canvas.width = window.length;


const images = {};
images.player = new Image();
images.player.src = 'character.png'

const playerWidth = 162;
const playerHeight = 205;

let playerFrameX = 0;
let playerFrameY = 0;

let playerX = 0;
let playerY = 0;

const playerSpeed = 6;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function positionPerson() {

  // What percentage down the page are we? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Get path length
  var path = document.getElementById("path");
  var pathLen = path.getTotalLength();
  
  // Get the position of a point at <scrollPercentage> along the path.
  var pt = path.getPointAtLength(scrollPercentage * pathLen);

  // ctx.clearRect(0,0, pt, pt);
  // drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, pt.playerX, pt.playerY, playerWidth, playerHeight)
  
  // playerX = pt;
  // playerY = pt;

  // if (playerFrameX < 8) playerFrameX++;
  // else playerFrameX = 0

  // if (playerX < pt + playerWidth) playerX += playerSpeed;
  // else playerX = 0 - playerWidth;

  // console.log(playerFrameX);

  //Position the person at this point
  
  var person = document.getElementById("person");
  person.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
  
};

// Update person position when we get a scroll event.
window.addEventListener("scroll", positionPerson);

// Set the initial position of the person.
positionPerson();
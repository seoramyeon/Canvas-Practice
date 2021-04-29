const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

// Arc / Circle
// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// c.beginPath();
// c.arc(500, 500, 100, 0, Math.PI * 2, false);
// c.strokeStyle = 'black';
// c.stroke();

// const array = ['tomato', 'pink', 'yellow', 'skyblue', 'gray', 'white'];

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
// }

// for (let i = 0; i < 100; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;

//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = array[getRandomIntInclusive(0, array.length)];
//   c.stroke();
// }

let x = 200;
let y = 200;
let dx = 5; // 속도
let dy = 5; // 속도
let radius = 30;

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
};

animate();

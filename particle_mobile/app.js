// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

let canvas;
let canvasWidth;
let ctx;

let particleArray;
let adjustX;
let adjustY;

function initSize() {
  canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('orientationchange', resizeCanvas, false);
    resizeCanvas();
  }
}
initSize();

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particleArray = [];
  adjustX = 10;
  adjustY = 10;
}

//handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 50,
};

const touch = {
  x: null,
  y: null,
  radius: 100,
};

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log('mouse.x, mouse.y :', mouse.x, mouse.y);
});

canvas.addEventListener('touchstart', (event) => {
  touch.x = event.x;
  touch.y = event.y;
  // console.log('mouse.x, mouse.y :', mouse.x, mouse.y);
});

canvas.addEventListener('touchmove', (event) => {
  touch.x = event.x;
  touch.y = event.y;
  // console.log('mouse.x, mouse.y :', mouse.x, mouse.y);
});

ctx.fillStyle = 'white';
ctx.font = '2vw Roboto';
ctx.fillText('THΞGRΛP', 0, 20);
const textCoordinates = ctx.getImageData(0, 0, 150, 150);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 10 + 20;
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x || touch.x - this.x;
    let dy = mouse.y - this.y || touch.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX * 3;
      this.y -= directionY * 3;
    } else if (this.x !== this.baseX || this.y !== this.baseY) {
      let dx = this.x - this.baseX;
      let dy = this.y - this.baseY;
      this.x -= dx / 20; //제자리로 돌아오는 속도
      this.y -= dy / 20;
    }
  }
}
console.log('textCoordinates :', textCoordinates);

function init() {
  particleArray = [];

  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        particleArray.push(new Particle(positionX * 10, positionY * 10));
      }
    }
  }
}
init();
console.log('particleArray :', particleArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();

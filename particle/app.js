const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 5;
let adjustY = 5;

//handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 50,
};

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log('mouse.x, mouse.y :', mouse.x, mouse.y);
});

ctx.fillStyle = 'white';
ctx.font = '20px Roboto';
ctx.fillText('THΞGRΛP', 5, 30);
const textCoordinates = ctx.getImageData(0, 0, 140, 140);

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
    // let lineargradient = ctx.createLinearGradient(1, 1, 5, 5);
    // lineargradient.addColorStop(0, 'white');
    // lineargradient.addColorStop(1, 'red');

    ctx.fillStyle = 'white';
    // ctx.fillStyle = lineargradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
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
  // i < 파티클의 수
  // for (let i = 0; i < 3000; i++) {
  //   let x = Math.random() * canvas.width;
  //   let y = Math.random() * canvas.height;
  //   particleArray.push(new Particle(x, y));
  // }
  // particleArray.push(new Particle(200, 250)); 픽스값
  // particleArray.push(new Particle(300, 350));
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

function connet() {
  // for(let a =0; a < particleArray.length; a++) {
  //   for(let b )
  // }
}

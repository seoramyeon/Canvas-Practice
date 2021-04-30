const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// 1) Fill
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100, 100, 100, 100);

// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(250, 250, 50, 50);

// c.fillRect(500, 500, 100, 100);
// c.fillRect(800, 550, 100, 100);
// console.log(canvas);

// 2) Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'tomato';
// c.stroke();

// 3) Arc / Circle
// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// c.beginPath();
// c.arc(100, 100, 10, 0, Math.PI * 2, false);
// c.strokeStyle = 'black';
// c.stroke();

// 4) 랜덤 컬러로 나타나는 원 생성하기
// for (let i = 0; i < 100; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   const colors = ['red', 'pink', 'green', 'skyblue', 'gray', 'white'];

//   let color = Math.floor(Math.random() * colors.length);
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = colors[color];
//   c.stroke();
// }

// 5) 랜덤하게 움직이는 원 생성하기
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
  };

  this.update = () => {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let dx = (Math.random() - 0.5) * 8; // canvas에서 그려지는 x축 위치
  let dy = (Math.random() - 0.5) * 8; // canvas에서 그려지는 y축 위치
  let radius = 30;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

animate();

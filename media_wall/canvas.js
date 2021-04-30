// 캔버스 사이즈 설정
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 컨텍스트 걸어주고
let ctx = canvas.getContext('2d');

// 이미지 지정
// const kimchi = new Image();
// const mulKimchi = new Image();
// const cucumberKimchi = new Image();

let imgArray = [];

// 5) 랜덤하게 움직이는 원 생성하기
function Kimchi(src, x, y, dx, dy) {
  this.src = src;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.draw = () => {
    let img = new Image();
    img.onload = function () {
      ctx.drawImage(img, this.x, this.y);
    };
  };

  this.update = () => {
    if (this.x > innerWidth || this.x < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.draw();
  };
}

for (let i = 0; i < 100; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let dx = (Math.random() - 0.5) * 8; // canvas에서 그려지는 x축 위치
  let dy = 1;
  let src = './images/kimchi.png';
  imgArray.push(new Kimchi(src, x, y, dx, dy));
}

console.log(imgArray);

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < imgArray.length; i++) {
    imgArray[i].update();
  }
};
animate();
// }

// function printImages_a(img, x, y) {
//   function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.drawImage(img, x, y);

//     x += 1;
//     if (x > ctx.canvas.width) {
//       x = -10;
//     }
//   }
//   // animate();
// }

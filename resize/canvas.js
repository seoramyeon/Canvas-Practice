const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// Fill
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100, 100, 100, 100);

c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(250, 250, 50, 50);

c.fillRect(500, 500, 100, 100);
c.fillRect(800, 550, 100, 100);
console.log(canvas);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'tomato';
c.stroke();

// Arc / Circle
// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
c.beginPath();
c.arc(500, 500, 100, 0, Math.PI * 2, false);
c.strokeStyle = 'black';
c.stroke();

for (let i = 0; i < 100; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const colors = ['red', 'pink', 'green', 'skyblue', 'gray', 'white'];
  let color = (Math.random() * colors.length).floor;
  c.beginPath();
  c.arc(x, y, 100, 0, Math.PI * 2, false);
  c.strokeStyle = colors[color];
  c.stroke();
}

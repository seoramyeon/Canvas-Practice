import Ball from './ball.js';

class App {
	constructor() {
		this.canvas = document.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');

		window.addEventListener('resize', this.resize.bind(this), false);
		this.resize();

		// ball 생성
		this.radius = 100;
		this.speed = 15;
		this.ball = new Ball(this.stageWidth, this.stageHeight, this.radius, this.speed);

		window.requestAnimationFrame(this.animate.bind(this));
	}   
	
	resize() {
		// console.log(this.stageWidth, this.stageHeight);
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;
		this.ctx.scale(2, 2); //왜 스케일을 넣지??
	}

	animate(t) {
		window.requestAnimationFrame(this.animate.bind(this));

		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
		this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
	}
}



window.onload = () => {
	new App();
}
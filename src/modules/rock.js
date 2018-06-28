import {constrainNumber} from '../helper.js';

export default class Rock {
	constructor(x,y,r,speed,id) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.r = r;
		let radians = Math.random() * Math.PI * 2;
		this.dx = speed * Math.sin(radians)
		this.dy = speed * Math.cos(radians)
	}

	update(SCREEN_X, SCREEN_Y) {
    let newX = this.x + this.dx
    let newY = this.y + this.dy
    this.x = constrainNumber(newX, 0, SCREEN_X)
    this.y = constrainNumber(newY, 0, SCREEN_Y)
	}

	render() {
		let rockNode = document.getElementById(this.id);
		rockNode.style.left = this.x + 'px';
		rockNode.style.top = this.y + 'px';
	}
}
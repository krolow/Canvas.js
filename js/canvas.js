function Canvas() {
	return this.Canvas();
}

Canvas.prototype.Canvas = function (width, height) {
	if (width) {
		this.WIDTH = width;			
	} else {
		this.WIDTH = window.innerWidth;
	}
	if (height) {
		this.HEIGHT = height;	
	} else {
		this.HEIGHT = window.innerHeight;
	}
	
	return this.getCanvas();
};

Canvas.prototype.getCanvas = function () {
	var canvas = document.createElement('canvas');
	canvas.width = canvas.style.width = this.WIDTH;
	canvas.height = canvas.style.height = this.HEIGHT;
	document.body.appendChild(canvas);
	document.body.style.margin = 0;
	document.body.style.padding = 0;
	
	return this.getProperties(canvas.getContext('2d'));
}

Canvas.prototype.getProperties = function (context) {
	return {
		context : context,
		width : this.WIDTH,
		height : this.HEIGHT,
		c_width : this.WIDTH / 2,
		c_height : this.HEIGHT / 2
	}
};
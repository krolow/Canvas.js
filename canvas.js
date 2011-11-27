function Canvas(width, height) {
	this.canvas;
	
	return this.Canvas(width, height);
}

Canvas.prototype.Canvas = function (width, height) {
	if (!width && !height) {
		this.onResize();
	}
	
	this.setSize(width, height);	
	this.createCanvas();
	this.setCanvas();
	
	return this;
};

Canvas.prototype.onResize = function () {
	var self = this;
	
	if (window.addEventListener) {
		window.addEventListener('resize', function () {
			self.setSize();
			self.setCanvas();
		});
	}
};

Canvas.prototype.createCanvas = function () {
	//create the element canvas
	this.canvas = document.createElement('canvas');

	//set context
	this.context = this.canvas.getContext('2d')

	//apend canvas in the body of page
	document.body.appendChild(this.canvas);
	
	//apply margin and paddign 0 at the page
	document.body.style.margin = 0;
	document.body.style.padding = 0;	
};

Canvas.prototype.setCanvas = function () {
	//set the width and weight
	this.canvas.width = this.canvas.style.width = this.WIDTH;
	this.canvas.height = this.canvas.style.height = this.HEIGHT;	
};

Canvas.prototype.setSize = function (width, height) {
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
};

Canvas.prototype.getProperties = function (context) {
	return {
		canvas : this.canvas,
		context : this.context,
		width : this.WIDTH,
		height : this.HEIGHT,
		c_width : this.WIDTH / 2,
		c_height : this.HEIGHT / 2
	}
};
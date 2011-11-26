Canvas.js
=====


Canvas it's a simple class that I use as my startup for personal projects in Canvas Javascript.

To use just instance the Canvas class, and use the draw method to pass what you want.


window.onload = function () {
	var canvas = new Canvas();
	
	canvas.draw(function (canvas) {
		canvas.context.fillStyle = 'rgb(0, 0, 0)';
		canvas.context.fillRect(0, 0, canvas.width, canvas.height);
	});
};

The properties of canvas parameter in draw callback are:

* context
* width
* height
* c_width (center width)
* c_height (center height)
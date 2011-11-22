Canvas.js
=====


Canvas it's a simple class that I use as my startup for personal projects in Canvas Javascript.

To use just instance the Canvas class:

<code>
	window.onload = function () {
		var canvas = new Canvas();

		canvas.context.fillStyle = 'rgb(0, 0, 0)';
		canvas.context.fillRect(0, 0, canvas.width, canvas.height);
	};
</code>
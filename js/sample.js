window.onload = function () {
	var canvas = new Canvas();
	
	canvas.draw(function (canvas) {
		canvas.context.fillStyle = 'rgb(0, 0, 0)';
		canvas.context.fillRect(0, 0, canvas.width, canvas.height);
	});
};
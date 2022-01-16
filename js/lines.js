const container = document.getElementById("svg");
const svgLines = document.getElementById("svgLines");
const listPoints = [];

function genPosition() {
	let pLeft = Math.floor(Math.random() * (container.clientWidth - 10));
	let pTop = Math.floor(Math.random() * (container.clientHeight - 10));
	listPoints.push([pLeft, pTop]);
	return `cx="${pLeft}" cy="${pTop}"`;
}

function genDot() {
	let element = `<circle class="dots fade-in-dots" ${genPosition()} r="4"/>`;
	return element;
}

function draw() {
	let point = svgLines.insertAdjacentHTML("beforeend", genDot());
	return point;
}

function line() {
	if (listPoints.length < 2) {
	} else {
		console.log(listPoints.length, listPoints[listPoints.length - 1]);
		listPoints.forEach((x) => {
			let newPoint = listPoints[listPoints.length - 1];
			if (x !== newPoint) {
				let svgLine = `<line class="line fade-in-line" x1="${x[0]}" y1="${x[1]}" x2="${newPoint[0]}" y2="${newPoint[1]}"/>`;
				svgLines.insertAdjacentHTML("afterbegin", svgLine);
			}
		});
	}
}

var timesRun = 0;
var interval = setInterval(function () {
	timesRun++;
	if (timesRun === 80) {
		clearInterval(interval);
	}
	draw();
	line();
}, 500);
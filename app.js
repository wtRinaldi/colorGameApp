let numSquares = 6;
let colors = [];
let pickedColor;
let message = document.querySelector('#message');
let colorDisplay = document.querySelector('#colorDisplay').innerHTML = pickedColor;
let resetButton = document.querySelector('#resetButton');
let modeButtons = document.querySelectorAll('.modeButton');
let squares = document.querySelectorAll('.square');

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	modeButtons.forEach(function(modeButton) {
		modeButton.addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.innerHTML === 'Easy' ? numSquares = 3: numSquares = 6;
			reset();
		});
	});
}

function setupSquares() {
	squares.forEach((square) => {
		square.addEventListener('click', function() {
			let clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				message.innerHTML= 'Bingo!';
				resetButton.innerHTML = 'Play Again?';
				changeColors();
			} else {
				this.style.background = '#232323';
				message.innerHTML = 'Nope';
			}  
		})
	})	
}

function reset() {
	resetButton.innerHTML = 'New Color?';
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	document.querySelector('#colorDisplay').innerHTML = pickedColor;
	resetButton.innerHTML = 'New Color';
	squares.forEach(function(square, index) {
		colors[index] ? (square.style.display = 'block', square.style.background = colors[index]) : square.style.display = 'none';
	});
	document.querySelector('h1').style.background = 'steelblue';
	message.innerHTML = '';

}

resetButton.addEventListener('click', function() {
	reset();
});

function changeColors() {
	squares.forEach(square => {
		square.style.background = pickedColor;
		document.querySelector('h1').style.background = pickedColor;
	})
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num) {
	let colorArray = [];
	for(let i = 0; i < num; i++) {
		let randomR = Math.floor(Math.random() * 256);
		let randomG = Math.floor(Math.random() * 256);
		let randomB = Math.floor(Math.random() * 256);
		colorArray.push('rgb(' + randomR + ', ' + randomG + ', ' + randomB + ')');
	}
	return colorArray;
}

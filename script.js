const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const randomBtn = document.getElementById('randomBtn');
const copyBtn = document.getElementById('copyBtn');

// Function to generate random hex color
function getRandomColor(){
	const letters = '0123456789ABCDEF';
	let color = '#';
	for(let i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)];		
	}
	return color;
}

// Change color when button clicked
randomBtn.addEventListener('click', () =>{
	const newColor = getRandomColor();
	colorBox.style.backgroundColor = newColor;
	colorCode.textContent = newColor;
});

// Copy color code to clipboard
copyBtn.addEventListener('click', () =>{
	navigator.clipboard.writeText(colorCode.textContent)
	.then(() => alert('Color Copied: ' + colorCode.textContent))
	.catch(err => console.error('Failed to copy: ', err));
});
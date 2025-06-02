const container = document.querySelector('.container');
const resetBtn = document.getElementById('reset-btn');

function createGrid(size) {
  container.innerHTML = ''; // Clear any existing squares
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', () => {
      square.classList.add('hovered');
    });

    container.appendChild(square);
  }
}

function askGridSize() {
  let size = prompt("Enter grid size (max 100):");
  size = parseInt(size);
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  createGrid(size);
}

resetBtn.addEventListener('click', askGridSize);

// Default grid
createGrid(16);

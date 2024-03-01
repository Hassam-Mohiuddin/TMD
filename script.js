// Get the grid container
const gridContainer = document.querySelector('.grid-container');

// Row and column names
const rowNames = ['Thermal', 'Current', 'Screw', 'Audio', 'Antenna', 'LCM', 'Glue', 'Batcover', 'SQT', 'Extra'];
const columnNames = ['L05', 'L06', 'L07', 'L08', 'L10', 'L11', 'L12', 'L13'];

// Function to create and append switches to the grid
function createSwitches(rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const switchElem = document.createElement('div');
      switchElem.classList.add('switch', 'green'); // Add 'green' class to make switches green on startup
      switchElem.textContent = rowNames[i];
      switchElem.addEventListener('click', toggleSwitchColor);
      gridContainer.appendChild(switchElem);
    }
  }
}

// Function to toggle switch color
function toggleSwitchColor() {
  this.classList.toggle('green');
}

// Create switches with 8 columns and 10 rows
createSwitches(rowNames.length, columnNames.length);

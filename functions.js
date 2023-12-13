let bars = [];
let values = [];
let isSorting = false;
let speed = 200;
let currentStep = 0;

function delay(ms) {
  //  a simple utility function for introducing a delay in the code
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomizeArray() {
  if (isSorting) return;

  // Generate a random number for our bar
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  // Create an array of bars of those random numbers
  const randomArray = Array.from({ length: 40 }, generateRandomNumber);

  setBarsData(randomArray);
}

function setBarsData(data) {
  // Reset our bars
  bars = [];
  // Create a shallow copy
  values = data.slice();
  for (let i = 0; i < data.length; i++) {
    bars.push(i);
  }
  renderBars();
}

function renderBars() {
  const container = document.getElementById("container");

  // Removes all the previous bars if any exist.
  container.innerHTML = "";

  // Loop to create the bars
  for (let i = 0; i < bars.length; i++) {
    const barContainer = document.createElement("div");
    barContainer.className = "bar-container";

    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = values[i] + "px";

    const valueLabel = document.createElement("div");
    valueLabel.className = "value-label";
    valueLabel.textContent = values[i];

    barContainer.appendChild(bar);
    barContainer.appendChild(valueLabel);
    container.appendChild(barContainer);
  }
}

function changeSize() {
  // Check if a sorting process is not currently active
  if (!isSorting) {
    // Reduce the size of each element in the array by 20%
    values = values.map((element) => Math.round(element * 0.8));

    // Update the visual representation
    renderBars();
  }
}

async function startSorting(sortFunction) {
  // Check if a sorting process is not currently active
  if (!isSorting) {
    // Set isSorting to true to indicate the start of the sorting process
    isSorting = true;

    // Initialize the current step to 0
    let currentStep = 0;

    // Iterate through each step of the sorting process
    while (currentStep < bars.length - 1) {
      // Perform one step of the sorting algorithm
      await sortFunction();

      // Move to the next step
      currentStep++;

      // Introduce a delay based on the speed parameter
      await delay(speed);
    }

    // Set isSorting back to false to indicate the end of the sorting process
    isSorting = false;
  }
}

// Pauses the sorting
function pauseSorting() {
  isSorting = false;
}

function changeCanvasSize() {
  const widthInput = document.querySelector('input[type="number"]');
  const heightInput = document.querySelectorAll('input[type="number"]')[1];
  const container = document.getElementById("container");

  const newWidth = parseInt(widthInput.value);
  const newHeight = parseInt(heightInput.value);

  if (!isNaN(newWidth) && !isNaN(newHeight)) {
    container.style.width = newWidth + "px";
    container.style.height = newHeight + "px";
  }
}

document
  .getElementById("changeSizeButton")
  .addEventListener("click", changeCanvasSize);

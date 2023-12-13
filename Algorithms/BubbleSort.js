// Initialize a variable to keep track of the current step in Bubble Sort
let bubbleSortStepIndex = 0;

// Function to perform one step of Bubble Sort
async function performBubbleSortStep() {
  // Get the length of the array
  const arrayLength = values.length;

  // Iterate through the array to perform comparisons and swaps
  for (let i = 0; i < arrayLength - bubbleSortStepIndex - 1; i++) {
    // If the current element is greater than the next element, swap them
    if (values[i] > values[i + 1]) {
      let temp = values[i];
      values[i] = values[i + 1];
      values[i + 1] = temp;
    }
  }

  // Increment the step index
  bubbleSortStepIndex++;

  // Check if the sorting process is complete
  if (bubbleSortStepIndex >= arrayLength - 1) {
    // Reset the step index and mark the sorting as complete
    bubbleSortStepIndex = 0;
    isSorting = false;
  }

  // Update the visual representation of the array
  renderBars();
}

// Function to initiate the Bubble Sort algorithm
async function initiateBubbleSort() {
  // Reset the step index and set the sorting flag to true
  bubbleSortStepIndex = 0;
  isSorting = true;

  // Continue sorting until the last step or until sorting is paused
  while (bubbleSortStepIndex < values.length - 1 && isSorting) {
    // Perform one step of Bubble Sort and introduce a delay for visualization
    await performBubbleSortStep();
    await delay(speed);
  }

  // Mark the sorting process as complete
  isSorting = false;
}

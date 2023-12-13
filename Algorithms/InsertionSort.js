// Initialize a variable to keep track of the current step in Insertion Sort
let insertionSortStepIndex = 0;

// Asynchronous function to perform one step of Insertion Sort
async function performInsertionSortStep() {
  let i = insertionSortStepIndex;
  let key = values[i];
  let j = i - 1;

  // Move elements greater than key to one position ahead of their current position
  while (j >= 0 && values[j] > key) {
    values[j + 1] = values[j];
    j = j - 1;
  }

  // Place the key at its correct position in the sorted array
  values[j + 1] = key;
  renderBars();

  // Increment the step index
  i++;

  // Check if there are still elements to be sorted
  if (i < values.length) {
    insertionSortStepIndex = i;
    setTimeout(performInsertionSortStep, speed); // Schedule the next step after a delay
  } else {
    // Reset the step index and mark the sorting as complete
    insertionSortStepIndex = 0;
    isSorting = false;
  }
}

// Asynchronous function to initiate the Insertion Sort algorithm
async function initiateInsertionSort() {
  // Set the sorting flag to true and reset the step index
  isSorting = true;
  insertionSortStepIndex = 0;

  // Start the insertion sort process
  await performInsertionSortStep();
}

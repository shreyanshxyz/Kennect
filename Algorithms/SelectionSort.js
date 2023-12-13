// Initialize a variable to keep track of the current step in Selection Sort
let selectionSortStepIndex = 0;

// Asynchronous function to perform one step of Selection Sort
async function performSelectionSortStep() {
  let arrayLength = values.length;

  // Check if there are still elements to be sorted
  if (selectionSortStepIndex < arrayLength - 1) {
    let minIndex = selectionSortStepIndex;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = selectionSortStepIndex + 1; j < arrayLength; j++) {
      if (values[j] < values[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element in the unsorted part
    let temp = values[minIndex];
    values[minIndex] = values[selectionSortStepIndex];
    values[selectionSortStepIndex] = temp;

    // Update the visual representation of the array
    renderBars();
    await delay(speed);
    selectionSortStepIndex++;
  } else {
    // Reset the step index and mark the sorting as complete
    selectionSortStepIndex = 0;
    isSorting = false;
  }
}

// Asynchronous function to initiate the Selection Sort algorithm
async function initiateSelectionSort() {
  // Set the sorting flag to true and reset the step index
  isSorting = true;
  selectionSortStepIndex = 0;

  // Continue sorting until the last step or until sorting is paused
  while (selectionSortStepIndex < values.length - 1 && isSorting) {
    // Perform one step of Selection Sort
    await performSelectionSortStep();
  }
}

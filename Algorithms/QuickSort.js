// Initialize a variable to keep track of the current step in Quicksort
let quickSortStepIndex = 0;

// Asynchronous function to perform one step of Quicksort
async function performQuickSortStep(low, high) {
  if (low < high) {
    // Find the pivot index
    let pivotIndex = await partition(low, high);

    // Recursively sort the sub-arrays before and after the pivot
    await performQuickSortStep(low, pivotIndex - 1);
    await performQuickSortStep(pivotIndex + 1, high);

    // Update the visual representation of the array
    renderBars();
    await delay(speed);
  }
}

// Asynchronous function to initiate the Quicksort algorithm
async function initiateQuickSort() {
  // Start the quicksort process with the entire array
  await performQuickSortStep(0, values.length - 1);

  // Reset the step index and mark the sorting as complete
  quickSortStepIndex = 0;
  isSorting = false;
}

// Asynchronous function to partition the array
async function partition(low, high) {
  let pivot = values[high];
  let i = low - 1;

  // Iterate through the array and rearrange elements based on the pivot
  for (let j = low; j < high; j++) {
    if (values[j] < pivot) {
      i++;
      // Swap values[i] and values[j]
      let temp = values[i];
      values[i] = values[j];
      values[j] = temp;

      // Update the visual representation of the array
      renderBars();
      await delay(speed);
    }
  }

  // Swap values[i + 1] and pivot
  let temp = values[i + 1];
  values[i + 1] = values[high];
  values[high] = temp;

  // Return the pivot index
  return i + 1;
}

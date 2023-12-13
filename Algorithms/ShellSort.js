// Initialize a variable to keep track of the current step in Shell Sort
let currentStepShellSort = 0;

// Asynchronous function to perform one step of Shell Sort
async function performShellSortStep() {
  let arrayLength = values.length;
  let gap = Math.floor(arrayLength / 2);

  // Iterate over the array with the specified gap
  while (gap > 0) {
    for (let i = gap; i < arrayLength; i++) {
      let temp = values[i];
      let j = i;

      // Perform insertion sort within the current gap
      while (j >= gap && values[j - gap] > temp) {
        values[j] = values[j - gap];
        j -= gap;

        // Update the visual representation of the array
        renderBars();
        await delay(speed);
      }

      values[j] = temp;
    }

    // Reduce the gap size and update the visual representation
    gap = Math.floor(gap / 2);
    renderBars();
    await delay(speed);
  }

  // Reset the step index and mark the sorting as complete
  currentStepShellSort = 0;
  isSorting = false;
}

// Asynchronous function to initiate the Shell Sort algorithm
async function initiateShellSort() {
  await performShellSortStep();
}

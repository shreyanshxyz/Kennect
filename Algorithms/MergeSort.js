// Initialize a variable to keep track of the current step in Merge Sort
let mergeSortStepIndex = 0;

// Asynchronous function to perform one step of Merge Sort
async function performMergeSortStep(left, right) {
  if (left < right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // Recursively perform Merge Sort on the left and right halves
    await performMergeSortStep(left, mid);
    await performMergeSortStep(mid + 1, right);

    // Merge the sorted halves
    merge(left, mid, right);

    // Update the visual representation of the array
    renderBars();
    await delay(speed);
  }
}

// Asynchronous function to initiate the Merge Sort algorithm
async function initiateMergeSort() {
  // Call the recursive function starting with the entire array
  await performMergeSortStep(0, values.length - 1);

  // Reset the step index and mark the sorting as complete
  mergeSortStepIndex = 0;
  isSorting = false;
}

// Function to merge two sorted halves of an array
function merge(left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  // Create temporary arrays to hold the left and right halves
  let leftArray = new Array(n1);
  let rightArray = new Array(n2);

  // Copy data to temporary arrays
  for (let i = 0; i < n1; i++) {
    leftArray[i] = values[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = values[mid + 1 + j];
  }

  // Merge the two halves back into the original array
  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      values[k] = leftArray[i];
      i++;
    } else {
      values[k] = rightArray[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of leftArray, if any
  while (i < n1) {
    values[k] = leftArray[i];
    i++;
    k++;
  }

  // Copy the remaining elements of rightArray, if any
  while (j < n2) {
    values[k] = rightArray[j];
    j++;
    k++;
  }
}

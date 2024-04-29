function fibs(num) {
  let result = 0;

  let fibstart = [0, 1];

  for (let j = 2; j < num; j++) {
    for (let i = 0; i < fibstart.length; i++) {
      result += fibstart[i];
      console.log(result);
      fibstart.push(result);
      fibstart.shift();
    }
  }
}

function fibsRec(n) {
  console.log(`Calculating fibsRec(${n})`);

  if (n < 2) {
    console.log(`Result for fibsRec(${n}): ${n}`);
    return n;
  } else {
    const result = fibsRec(n - 1) + fibsRec(n - 2);
    console.log(`Result for fibsRec(${n}): ${result}`);
    return result;
  }
}
function mergeSort(array) {
  if (array.length <= 1) {
    return array; // Return the array when it's the base case
  } else {
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    // Merge the sorted left and right halves
    return merge(sortedLeft, sortedRight);
  }
}

function merge(sortedLeft, sortedRight) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the sorted left and right arrays while maintaining the sorted order
  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      mergedArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  // Append remaining elements from sortedLeft (if any)
  while (leftIndex < sortedLeft.length) {
    mergedArray.push(sortedLeft[leftIndex]);
    leftIndex++;
  }

  // Append remaining elements from sortedRight (if any)
  while (rightIndex < sortedRight.length) {
    mergedArray.push(sortedRight[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

let array = [105, 79, 100, 110];
console.log("Sorted array:", mergeSort(array)); // Log the sorted array only at the end

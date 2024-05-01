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

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }
  append(value) {
    let current;
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  checkSize() {
    let count = 0;
    let current;

    if (this.head === null) return count;
    else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
        count++;
      }
      return count;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current;

    if (this.head === null) {
      return this.head;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  }

  at(index) {
    let current = this.head;
    let count = 0;

    if (index === 0) return this.head;
    else {
      while (current !== null && count < index) {
        current = current.nextNode;
        count++;
      }
      return current;
    }
  }

  pop() {
    if (this.head === null) {
      // If the list is empty, return null
      return null;
    } else if (this.head.nextNode === null) {
      // If there's only one node in the list
      let value = this.head.value;
      this.head = null; // Set head to null
      return value; // Return the value of the popped node
    } else {
      let current = this.head;
      let previous = null;

      // Traverse the list until reaching the last node
      while (current.nextNode !== null) {
        previous = current;
        current = current.nextNode;
      }

      // Now, current points to the last node
      // If previous is null, it means there was only one node in the list
      if (previous === null) {
        this.head = null; // Set head to null
      } else {
        // Set the nextNode of the previous node to null
        previous.nextNode = null;
      }

      // Return the value of the popped node
      return current.value;
    }
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;

    if (this.head.value == value) return count;
    else {
      while (current) {
        if (current.value === value) return count;
        current = current.nextNode;
        count++;
      }
      return "value not found :(";
    }
  }
  toString() {
    let current = this.head;
    let printString = "This is the string that will be printed: ";

    if (!current) {
      return "krijg kanker";
    }

    let result = printString;

    while (current) {
      if (current.value === null) {
        result += "null ";
      } else {
        result += `${current.value} `;
      }
      current = current.nextNode;
    }

    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

console.log(ll);

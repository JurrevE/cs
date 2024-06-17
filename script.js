function sumRange(num) {
  if (num == 1) {
    return num;
  } else {
    return num + sumRange(num - 1);
  }
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

function factorial(num) {
  if (num == 1) return 1;
  else return num * factorial(num - 1);
}
function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
}
let nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
function contains(nestedObject, value) {
  for (let key in nestedObject) {
    if (nestedObject.hasOwnProperty(key)) {
      if (nestedObject[key] === value) {
        return true;
      }
      if (typeof nestedObject[key] === "object") {
        if (contains(nestedObject[key], value)) {
          return true;
        }
      }
    }
  }
  return false;
}

function fibs(num) {
  let fibSequence = [0, 1];

  for (let i = 2; i < num; i++) {
    let nextFib = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextFib);
  }

  return fibSequence;
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
    return array;
  } else {
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    return merge(sortedLeft, sortedRight);
  }
}

function merge(sortedLeft, sortedRight) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      mergedArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < sortedLeft.length) {
    mergedArray.push(sortedLeft[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < sortedRight.length) {
    mergedArray.push(sortedRight[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

let array = [105, 79, 100, 110];
console.log("Sorted array:", mergeSort(array));

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
      return null;
    } else if (this.head.nextNode === null) {
      let value = this.head.value;
      this.head = null;
      return value;
    } else {
      let current = this.head;
      let previous = null;

      while (current.nextNode !== null) {
        previous = current;
        current = current.nextNode;
      }

      if (previous === null) {
        this.head = null;
      } else {
        previous.nextNode = null;
      }

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
      return "beep boop";
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

function stringToNumber(string) {
  let hashCode = 0;
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    console.log(
      `Iterating over letter '${string[i]}' with Unicode value ${charCode}`
    );
    hashCode += charCode;
  }
  return hashCode;
}

function hash(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}

const name = "John";
const surname = "Doe";

const combinedHash = hash(name, surname);
console.log(`Combined hash code: ${combinedHash}`);

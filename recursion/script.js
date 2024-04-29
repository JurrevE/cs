function sumRange(num) {
  if (num == 1) {
    return num;
  } else {
    return num + sumRange(num - 1);
  }
}

function power(base, exponent) {
  if (exponent == 0) return 1;
  else {
    console.log(base * power(base, exponent - 1));
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

function contains(netsedObject, value) {
  if (netsedObject.hasOwnProperty(value)) return true;
  else 
}

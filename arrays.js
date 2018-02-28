var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  console.log(`Original Array is ${array} and the new Array is ${newArray}`);
  console.log(`the new element is ${element}`);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
}

function addElementToEndOfArray(array, element){
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
}
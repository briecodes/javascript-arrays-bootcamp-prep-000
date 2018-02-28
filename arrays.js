var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  // var newArray = array;
  // console.log(`original array: ${array} | new array: ${newArray}`);
  // newArray.shift();
  // console.log(`cool now updated new array: ${newArray}`);
  // return newArray;
  return array.slice();
}
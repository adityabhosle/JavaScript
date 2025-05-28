//create another array with use the first element in the array
//remove first element from array

let arr = [67, 89, 90, 49]
let arr1 = arr.slice(1)
console.log(arr1)
// also the below is the same since the endIndex has been omitted so it takes the length of the array
let arr2 = arr.slice(1,4)
console.log(arr2)
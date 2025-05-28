function largestNum(arr){
    let largest = arr[0]
    for (let i = 0 ; i< arr.length; i++){
        if(arr[i]> largest)
        {
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNum([99,200,10, 0, 8,]))


function findLargest(arr) {
    // Math.max() is used to find the largest number
    return Math.max(...arr); 
}

console.log("Using the Math.max() - " + findLargest([99, 5, 3, 100, 1]));
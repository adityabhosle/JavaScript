function computeSum(arr){
let sum = 0

for (let i=0; i<arr.length; i++)
{
    sum = sum + arr[i]
}
}

function highestExpense(arr){
    let high = arr[0]
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]>high){
            high = arr[i]
        }
    }
    return high
}

function lowestExpense(arr){
    let low = arr[0]
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]<low){
            low = arr[i]
        }
    }
    return low
}

let expenses = [56,78,100,67,42]

console.log("total expenses:" + computeSum(expenses))
console.log("Highest expense:" + highestExpense(expenses))
console.log("Lowest expense:" + lowestExpense(expenses))


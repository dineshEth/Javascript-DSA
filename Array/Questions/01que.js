// Given a series of numbers ( sorted || unsorted ) from 1 to n
// Q1. How to find single missing number in an Array 

/**
 * APPROACH
 * find sum of array ======> ArraySum
 * calculate sum of (n-1) integers. =====> ActualSum
 * subtract ArraySum from ActualSum  =====> ActualSum-ArraySum
 * the difference is missing number
 */


function sumOfArray (arr = []){
    let sum = 0;
    for(let i = 0; i<arr.length;i++){
        sum = sum + arr[i] 
    }
    return sum;
}

function totalSum (arr){
    let totalSum;
    totalSum = ((arr.length+1)/2) * (1 + arr.length+1);
    return totalSum;
}

function missingNumber (arr){
    return totalSum(arr) - sumOfArray(arr)
}


console.log(missingNumber([1,2,3,5,6,7,8,9]));




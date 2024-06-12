// import { unique_array } from "./Array.global.js";
import { findSumOfArray } from "./01array.js";

// console.table(unique_array)

function subArrayOfSumK(arr = [], k = 0){
    try {
        if(arr.length === 0) return 0;
        let arraySum = findSumOfArray(arr) 
        if(arraySum < k) return 0;
        let sumArray = [];
        let sum = k;
        for(let j = 0; j < arr.length; j++)
            {
                arraySum = arraySum - arr[j-1];
                if(arraySum < k) return 0;
                if(sum === 0 ) {
                    return sumArray;
                }
                else{
                    sumArray = [];
                    sum = k;
                    for(let i=j; i< arr.length; i++){
                        if(sum === 0 ) {
                            return sumArray;
                        }
                        if(sum !== 0 && arr[i] <= sum){
                            sum = sum - arr[i];
                            sumArray.push(arr[i]);
                        }
                    }
                }   
            }
        return 0;
    } catch (error) {
        console.log("subArrayOfSum Error :: ", error)
    }
}

const result = subArrayOfSumK([11,4,2,9,15,6,7,8], 12);
console.table(result);
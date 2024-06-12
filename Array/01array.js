import { unique_array, negative_array } from './Array.global.js';

function findMax (arr = []) {
    try {
        if(arr.length === 0) return 0;
        if(arr.length === 1) return arr[0];
        let max = arr[0];

        arr.
        map((index)=>
            {
                if(index > max) max = index;
            });
        return max; 
    } catch (error) {
        console.log("FindMax Error :: ", error);
        throw error;
    }
}

function findMin (arr = []) {
    try {
        if(arr.length === 0) return 0;
        if(arr.length === 1) return arr[0];

        let min = arr[0];
        arr.map((elem)=>{
            if(min > elem) min = elem;
        })
        return min;
    } catch (error) {
        console.log("FindMin Error :: ", error);
        throw error;
    }
    return
}

function findSecondMax(arr){
    try {
        if(arr.length === 0) return -1;
        let max = arr[0];
        let secondMax = max;
        arr.map((elem)=>{
            if(elem > max) {
                secondMax = max;
                max = elem;
            }
            else if(secondMax < elem && secondMax < max){
                secondMax = elem;
            }
        })
        return secondMax;
    } catch (error) {
        console.log("FindSecondMax Error :: ", error);
        throw error;
    }
}

function findSumOfArray (arr) {
    try {
        if(arr.length === 0) return -1;
        let sum = 0;
        arr.map((elem)=>{
            sum =  sum + elem;
        });
        return sum;
    } catch (error) {
        console.log("FindSumOfArray Error :: ", error);
        throw error;
    }
}

function printResult (fn){
    try {
        console.log(fn())
    } catch (error) {
        console.log("Print Error :: ", error)
    }
}

// printResult(()=>findMax(unique_array));
// printResult(()=>findMin(unique_array));
// printResult(()=>findSecondMax(unique_array));
// printResult(()=>findSumOfArray(unique_array));

export {
    findSumOfArray,
    findMax,
    findMin,
    findSecondMax
}

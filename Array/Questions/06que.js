// How to reverse an Array;


/**
 * APPROACH 
 * swap(i, n-i-1) element in array 
 * swap(0,4) => 5-0-1 = 4  ,Where 5 is length
 * swap(1,3) => 5-1-1 = 3
 * swap(2,2) => 5-1-2 = 2
 * iterate upto n/2
 */

function reverseArray(arr =[]){
    if(arr.length == 0 || arr.length == 1){
        return arr;
    }
    for(let i=0;i<= Math.floor(arr.length/2);i++){
        let temp = arr[i];
        arr[i]= arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

console.log(reverseArray([1,4,5,9,8]));
console.log(reverseArray([1,4,5,9,8,6]));
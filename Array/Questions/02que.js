// How to find duplicate number in a given integer array;


/**
 * APPROACH
 * Compare each element with other elements 
 */

function duplicate(arr = []){
    if(arr.length == 0 || arr.length == 1){
        return -1;
    }
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]=== arr[j]){
                return arr[j];
            }
        }
    }
};

console.log(duplicate([1,2,3,4,4]));
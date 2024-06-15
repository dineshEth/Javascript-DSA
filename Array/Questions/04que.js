// How to remove duplicates from an integer array;

/**
 * APPROACH 1
 * Compare each element with other element;
 * if duplicate exist delete data ;
 * return array
 */


function removeDuplicates(arr =[]){
    if(arr.length == 0 || arr.length == 1){
        return arr;
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]=== arr[j]){
                delete arr[j];
            }
        }
    }

    return arr;
}

// OR

/**
 * APPROACH 2 
 * Update the array through set operation
 */


console.log(removeDuplicates([1,2,2,3,3,4,5,6]))


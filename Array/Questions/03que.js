// How to find duplicate numbers (multiple duplicates) from an integer Array;

/**
 * APPROACH 
 * compare each element with other element
 * store duplicate element in Set 
 * return the set of duplicate numbers set
 */


function duplicates(arr =[]){
    if(arr.length == 0 || arr.length ==1 ) return -1;
    
    const duplicateSet = new Set();

    for(let i=0; i<=arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i] == arr[j]){
                duplicateSet.add(arr[j]);
            }
        }
    }
    return duplicateSet;
}

console.log(duplicates([1,8,3,3,4,5,4,8,9,1,7]))
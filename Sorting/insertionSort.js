// InsertionSort

/**
 * insert element from unsorted arr to sorted arr
 * each pass inserts 1 element at right place
 * n-passes full arr get sorted 
 */


let arr = [80,10,20,10,42,20,10,15]

function insertionSort(arr = []){
    if(arr.length == 0 || arr.length ==1 ) return arr;
    // array of 1 element is sorted 
    let key, j;
    for(let i=1;i<arr.length;i++){
        key = arr[i];
        j=i-1;  // index of sorted array
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j]; // shift greater element one step behind
            j=j-1;
        }
        arr[j+1] = key;
    }
}

insertionSort(arr);
console.log(arr);
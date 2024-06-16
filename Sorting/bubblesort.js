// Bubble sort

/**
 * Compare each element with other element in each iteraction and shift its position
 * to left if smaller
 */

let arr = [80,60,20,55,42,16,10,15]

function bubblesort (arr = [] ) {
    if(arr.length == 0) return arr;
    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]> arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

bubblesort(arr);
console.log(arr)


// the below sorting algorithm is inspired from bubble sort
// randomly i come to develop this algorithm

function OnePassBubble(arr = []) {
    if(arr.length == 0){
        
    }
}
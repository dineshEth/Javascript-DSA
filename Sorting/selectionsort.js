// Selection sort

/**
 * Select a smaller element in each iteration and replace it at its proper position
 * 
 */

function selectionsort (arr = []) {
    if(arr.length == 0) return arr;
    for(let i=0; i<arr.length;i++){
        let MIN = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[MIN]) {
                MIN = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[MIN];
        arr[MIN] = temp;
    }
}

let arr = [80,60,20,55,42,16,10,15]
selectionsort(arr);

console.log(arr);
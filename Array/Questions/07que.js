// Remove Zeroes from an Array without changing the order.




function removeZeroesFromArray(arr=[]){
    if(arr.length == 0 ) return;
    let length = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            length++;
        }
    }

    let NEW_ARRAY = new Array(length);
    for(let i=0,j=0;i<arr.length;i++){
        if(arr[i] != 0) {
            NEW_ARRAY[j] = arr[i];
            j++
        }
    }
    return NEW_ARRAY;
}


// console.log(removeZeroesFromArray([4,2,0,0,4,0,9,0,0,3,7,8,9,0,0,5,0,0,3,5]));

export { removeZeroesFromArray }
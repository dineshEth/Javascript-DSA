// Find all pairs of integer array whose sum is K 
// NOTE : Pair consist 2 elements only;

/**
 * APPROACH 
 * array of pairs
 * add each element with another element form array
 * if sum is eqaul store it in array;
 */

function pairsOfSumK(arr = [], k = 0){
    let PAIR_ARRAY = [];
    if(k === 0 || arr.length === 0 ) return -1;

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]+arr[j] === k){
                PAIR_ARRAY.push([arr[i],arr[j]]);
                console.log(`(${arr[i]}, ${arr[j]})`)
                break;
            }
        }
    }
    return PAIR_ARRAY;
}

console.log(pairsOfSumK([3,4,8,5,9,11,7],12))
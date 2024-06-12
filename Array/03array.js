import { unique_array } from "./Array.global.js";

// pass a sorted array 
function wavyArray (arr = []){
    try {
        let array = [];
        if(arr.length === 0) return 0;
        if(arr.length === 1 || arr.length ===2) return arr;

        array[0]= arr[0];
        array[1]=arr[2]
        for(let i= 2;i<arr.length-1;i++){
            if(i%2 === 0){
                array[i]=arr[i-1]
            }else{
                array[i]=arr[i+1];
            }
        }
        return array; 
    } catch (error) {
        console.log("WAVY ERROR :: ", error)
    }
}

console.log(wavyArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

// OUTPUT
[
    1,  3,  2,  5,  4,  7,  6,
    9,  8, 11, 10, 13, 12, 15,
   14, 17, 16, 19, 18
]
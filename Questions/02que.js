// STRING SORT
// ?? String contains only alphabet characters

import { removeZeroesFromArray } from "../Array/Questions/07que.js";

/**
 * APPROACH 
 * store the frequency of charcters in an Array of size 26(alphabets);
 * "a"-"a" = 0 and "b"-"a" = 1
 * take "a" as base character to compare and store in array
 * concat the string if required and update to original string
 */


function string_sorting (str = "") {
    str.toLowerCase();
    if(str.length==0 || str.length==1) return;
    let FREQUENCY_ARRAY = new Array(26).fill(0);

    for(let i=0;i<str.length;i++){
        let positionOfCharacter = str[i].charCodeAt() - "a".charCodeAt();
        FREQUENCY_ARRAY[positionOfCharacter]++;
    }
    
    let sorted_arr ="";
    for(let i=0;i<FREQUENCY_ARRAY.length;i++){
        for(let j=0;j<FREQUENCY_ARRAY[i];j++){
            let ch = String.fromCharCode(97+i);
            sorted_arr = sorted_arr + "" + ch;
        }
    }
    return sorted_arr;
}

console.log(string_sorting("freecodecamp"))

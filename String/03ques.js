// check if a string is palimdrome

/**
 * APPROACH 
 * compare (i, n-i-1) charcters of string
 * if not equal return false
 * else true
 */

function palimdrome(str = ""){
    str = str.toLowerCase();
    if(str.length == 0 || str.length == 1)  return true;
    for(let i=0; i< Math.floor(str.length/2);i++){
        if(str[i] != str[str.length-i-1]) return false;
    }
    return true;
}

console.log(palimdrome("Nemoe"))
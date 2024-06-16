// Reverse a string

/**
 * let reverse ="";
 * traverse str from end and
 * add each character at each iteraction in reverse
 * override str = reverse;
 */

function reverse(str = ""){
    if(str.length == 0 || str.length == 1) return str;
    let REVERSE = "";
    for(let i=str.length-1;i>=0;i--){
        REVERSE = REVERSE + "" + str.charAt(i);
    }
    str = REVERSE;
    return str;
}


console.log(reverse("Hello from Switzerland"))
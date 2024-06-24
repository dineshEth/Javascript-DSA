// SWAP TWO NUMBERS WITHOUT USING THIRD VARIABLE

/**
 * APPROACH
 * Add both the numbers
 * Subtract the alternative number from sum
 * x = x+y;
 * y = x-y;
 * x = x-y;
 */

 let A = 13;
 let B = 46;
function swapTwoNumber(x = 0, y = 0){
    if(x===y) return;
    x = x + y;
    y = x-y;
    x = x-y;
}

A = A+B;  // 13+46 = 59
B = A-B;  // 59-46 = 13
A = A-B   // 59-13 = 46
// swapped

console.log("A => ",A ,"\n", "B => ", B);

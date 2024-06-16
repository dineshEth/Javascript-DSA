// find duplicates in string also find their frequency


/**
 * APPRAOCH 
 * create a empty Map to store duplicates and their frequency
 * traverse the string and check if character exist in map
 * if yes then increase frequency
 * else add to the map
 * return the map
 */

function duplicates(str = ""){
    if(str.length == 0 || str.length == 1) return str;
    let map = new Map();
    for(let i=0; i<str.length;i++){
        if(map.has(str[i])){
            map.
            set( 
                str[i], 
                map.get(str[i])+1 
            )
        }
        else {
            map.set(str[i], 1);
        }
    }
    return map;
}

console.log(duplicates("Hello World"));

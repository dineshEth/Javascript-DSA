// How to find if an Array contains a cycle.


/**
 * APPROACH 1
 * FAST and Slow Node
 * FAST node traverse faster than SLOW NODE
 * FAST = FAST.next.next;
 * SLOW = SLOW.next;
 * if FAST node and Slow Node intersect then a cycle is detected
 * else no cycle
 */

function cycleInLL(LLNode){
    if(LLNode ) return -1;
    if(LLNode.next) return -1;
    let FAST = LLNode.next;
    let SLOW = LLNode;
    while(FAST && FAST.next){
        if(FAST == SLOW){
            return true;
        }
        FAST == LLNode.next.next;
        SLOW = LLNode.next
    } 
    return false;
}

/**
 * APPROACH 2
 * traverse tthe LL 
 * store each node in an HashMap || Set || Array
 * compare each time if the node is exist in HashMap || Set || Array
 * if the node exist in LL then cycle detected
 * else No Cycle;
 */

function cycleInLL(LLNode){
    if(LLNode ) return -1;
    if(LLNode.next) return -1;
    let set = new Set();
    while(LLNode){
        if(set.has(LLNode)){
            return true;
        }
        else {
            set.add(LLNode);
            LLNode = LLNode.next;
        }
    }
    return -1;
}
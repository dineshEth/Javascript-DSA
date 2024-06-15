// Reverse LinkedList

/**
 * APPROACH 
 * Three pointer
 * CURR, NEXT, PREV
 * NEXT = CURR.next;  <= Save
 * CURR.next =  PREV; <= Reverse
 * PREV = CURR; 
 * CURR = NEXT
 */

function reverseLL (LLNode){
    if(LLNode) return -1;
    if(LLNode.next) return LLNode;
    let CURR = LLNode;
    let PREV = null;
    let NEXT;
    while(CURR) {
        NEXT = CURR.next;
        CURR.next =  PREV;
        PREV = CURR;
        CURR = NEXT;
    }
}


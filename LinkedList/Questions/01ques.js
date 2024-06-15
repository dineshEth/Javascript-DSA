// Find Middle element in Sigle LinkedList
// Note: even => 2nd middle node

/**
 * APPROACH - 1
 * traverse the LL 
 * store each node in a HashMap || Set || Array
 * find the middle element of HashMap || Set || Array
 * return the data at middle
 */

/**
 * T(n) = O(n);
 * S(n) = O(n);
 */

function middleNode (LLNode){
    if(LLNode === null) return -1;
    if(LLNode.next === null) return LLNode.data;
    let NodeArray = [];
    while(LLNode){
        NodeArray.push(LLNode);
        LLNode = LLNode.next;
    }
    return NodeArray[Math.floor(NodeArray.length/2)+1];
}

/**
 * APPROACH 2
 * Traverse the LL 
 * find count of Nodes
 * Again traverse the LL upto count/2
 */

/**
 * T(n) = O(n)
 * S(n) = O(1)
 */

function middleNode2(LLNode){
    if(LLNode === null) return -1;
    if(LLNode.next === null) return LLNode.data;
    let count = 0;
    let node = LLNode;
    while(node){
        count++;
        node = node.next;
    }
    for(let i =0 ;i<=Math.floor(count/2) + 1;i++){
        LLNode = LLNode.node;
    }
    return LLNode;
}
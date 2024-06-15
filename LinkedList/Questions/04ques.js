// How to find Duplicate Nodes in LL

/**
 * APPROACH 
 * Compare each Node with other Node 
 * store duplicate node in Set || Array || hashMap;
 * return duplicate nodes
 */


function duplicateNodes (LLNode) {
    if(LLNode || LLNode.next) return -1;
    let PTR1 = LLNode;
    let set  =  new Set();
    while(PTR1){
        let PTR2 = PTR1.next;
        while(PTR2){
            if(PTR1.data == PTR2.data) {
                set.add(PTR2);
                break
            }
            PTR2 = PTR2.next;
        }
    }

    return set;
}

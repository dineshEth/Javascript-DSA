// count nodes of Binary Tree

/**
 * APPROACH 
 * node is null => return node;
 * traverse the left tree and count all nodes in left sub tree
 * traverse the righ tree and count all nodes in right sub tree
 * return count = leftTree nodes + rightTree nodes + 1 (root);
 */

function countNodes(node){
    if(!node) return 0;
    let leftTree =  countNodes(node.left);
    let righTree =  countNodes(node.right);
    return leftTree + righTree + 1;
}

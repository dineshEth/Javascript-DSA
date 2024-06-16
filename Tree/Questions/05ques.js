// count leaf nodes of a Binary Tree;

/**
 * node is null return 0
 * if node's LEFT && RIGHT are null then return 1;
 * find nodes in leftSubTree recursively
 * find nodes in rightSubTree recursively
 * add both and return;
 */


function CountLeafNodes (node){
    if(!node) return 0;
    if(!node.left && !node.right){
        return 1;
    }
    else{
        return CountLeafNodes(node.left) + CountLeafNodes(node.right);
    }
}
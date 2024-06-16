// How to find leaf Nodes of Binary Tree

/**
 * APPROACH 
 * if node is null return;
 * if node's left && right are null then print the node ;
 * node not null then traverse the left subtree
 * then traverse the right subtree
 */


function leafNodes (node){
    if(!node) return node;
    if(!node.left && !node.right){
        console.log(node);
        return;
    }
    if(node.left){
        leafNodes(node.left);
    }
    else{
        leafNodes(node.right);
    }
}
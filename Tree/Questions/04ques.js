// Search key in Binary Tree

/**
 * APPROACH 
 * compare key with root
 * if lesser than root then seacrh in leftTree
 * else search on rightTree;
 * return node contain the key;
 */

function search(node,key){
    if(!node) return node;

    if(key === node.data) return node;
    if(key < node.data && node.left){
        search(node.left);
    }
    else if(key > node.data && node.right) {
        search(node.right);
    }
}
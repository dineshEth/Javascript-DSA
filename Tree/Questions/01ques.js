// Height of a Tree OR Max Depth of a Tree

/**
 * APPROACH
 * node is null => return
 * find leftTree height 
 * find rightTree height
 * compare leftTree height && rightTree height
 * add 1 (root node) to the max height return by tree
 */

function heightTree (node){
    if(!node) return node;
    if(!node.left &&  !node.right) return node;

    let Lheight = heightTree(node.left);
    let Rheight = heightTree(node.right);

    if(Lheight >= Rheight) {
        return Lheight + 1;
    } else {
        return Rheight + 1;
    }
}
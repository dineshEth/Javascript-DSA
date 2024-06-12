class Node {
    constructor(data){
        this.data = data;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }


    insert = function (node, data){
        if(node.data == data) return -1;
        if(data < node.data){
            if(node.left){
                this.insert(node.left, data);
            }
            else {
                let new_node = new Node(data);
                new_node.parent = node;
                node.left = new_node;
            }
        }
        else if(data>node.data){
            if(node.right){
                this.insert(node.right, data);
            }
            else {
                let new_node = new Node(data);
                new_node.parent = node;
                node.right = new_node;
            }
        }
    }

    search = function (node, key){
        if(node == null) return -1;
        if(key == node.data){
            // console.log("node parent data : ",node.parent.data)
            return node;
        }
        else {
            if( key < node.data ){
                return this.search(node.left, key);   
            }
            else if(key > node.data){
                return this.search(node.right, key);
            }
        }
    }


    deleteLeafNode = function (node){
        let deleteNode = node;
        if(node.parent.data < node.data){
            node.parent.right = null;
            return deleteNode;
        }
        else{
            node.parent.left = null;
            return deleteNode;
        }
    }

    deleteOneChildNode = function(node){
        let deleteNode =  node;
        if(node.parent.data < node.data){
            node.parent.right = node.right || node.left;
            if(node.left){
                node.left.parent = node.parent;
            } else {
                node.right.parent =  node.parent;
            }
            return deleteNode;
        }
        else{
            node.parent.left = node.left || node.right;
            if(node.left){
                node.left.parent = node.parent;
            } else {
                node.right.parent =  node.parent;
            }
            return deleteNode;
        }

    }

    delete = function (node, key){
        let deleteNode = this.search(node, key);
        let deleteN = {...deleteNode}  // deep copy => call by value
        if(!deleteNode) return -1;
        // leaf node
        if(deleteNode.right == null && deleteNode.left == null){
            return this.deleteLeafNode(deleteNode)
        }
        // node of single child
        if(deleteNode.right == null || deleteNode.left == null){
            return this.deleteOneChildNode(deleteNode);
        }

        let temp = deleteNode.right;
        while(temp.left != null){
            temp = temp.left;
        }
        if(temp.right){
            temp.right.parent = temp.parent;
            temp.parent.left = temp.right;
        }

        deleteNode.data = temp.data;
        // console.log(deleteN)
        return deleteN;
    }

    preorder = function (start){
        if(start == null) return;
        console.log(start.data);
        this.preorder(start.left);
        this.preorder(start.right);

    }

    inorder = function(start){
        if(!start) return;
        this.inorder(start.left);
        console.log(start.data);
        this.inorder(start.right);
    }

    postorder = function(start){
        if(!start) return;
        this.postorder(start.left);
        this.postorder(start.right);
        console.log(start.data)
    }
}

const tree =  new BinaryTree();
const root = new Node(12)
tree.insert(root, 15)
tree.insert(root, 55)
tree.insert(root, 13)
// console.log("Node Inserted 15 : ", tree.insert(root, 15));
tree.insert(root, 5)
tree.insert(root, 8)
tree.insert(root, 7)
tree.insert(root, 10)
tree.insert(root, 9)

// console.log(" Search result :: ", tree.search(root, 13));
// console.log(" Search result :: ", tree.search(root, 10));

console.log("Deleted Node :: ",tree.delete(root,8));   // Node with 2 children
// console.log("Deleted Node :: ",tree.delete(root,10));  // Leaf Node 
// console.log("Deleted Node :: ",tree.delete(root,5));   // Node of single child
// tree.delete(root,8)
tree.preorder(root);
// tree.inorder(root);
// tree.postorder(root);

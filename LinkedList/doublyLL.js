class DoublyLL {
    constructor(head = null){
        this.head = head;
    }

    printLL = function(){
        try {
            let start = this.head;
            if(start){
                while(start !=null){
                    console.log(start.data, " -> ");
                    start = start.next;
                }
            }
        } catch (error) {
            console.log("Print Error :: ",error)
        }
    }

    appendNode = function(node){
        try {
            if(this.head == null){
                this.head = node;
                return;
            } 
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } catch (error) {
            console.log("AppendNode Error :: ",error)
        }
    }

    size = function (){
        let count = 0;
        let start =  this.head;
        if(start){
            while(start != null){
                count++;
                start = start.next;
            }
        }
        return count;
    }

    delete = function (){
        try {
            let node = this.head;
            this.head = this.head.next;
            return node;
        } catch (error) {
            console.log("DELETE ERROR ", error)
        }
    }

    indexOf = function(key){
        try {
            let start = this.head;
            let index = -1;
            if(start){
                while(start != null){
                    ++index;
                    if(start.data == key) return index;
                    start =  start.next;
                }
            }
            return index;
        } catch (error) {
            console.log("INDEXOF ERROR ::",error)
        }
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


const node1 = new Node(12);
const node2 = new Node(15);
const node3 =  new Node(8);

node1.next = node2;

node2.next = node3;
node2.prev = node1;

node3.prev = node2;



const doublyLL = new DoublyLL(node1);
doublyLL.appendNode(new Node(36));
doublyLL.appendNode(new Node(82));
doublyLL.appendNode(new Node(45));
doublyLL.printLL();
console.log("INDEX OF :: ",doublyLL.indexOf(12));
// console.log(doublyLL.delete());
// doublyLL.printLL();
console.log("SIZE OF :: " ,doublyLL.size())


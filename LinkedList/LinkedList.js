class LinkedList {
    constructor(head = null){
        this.head = head;
    }
}

class Node {
    constructor(data) {
        this.data =  data;
        this.next = null;
    }
}


const node1 = new Node(2);
const node2 = new Node(5);
const node3 = new Node(15);

node1.next = node2;
node2.next = node3;

const linkedlist = new LinkedList(node1);

function printlist (ll){
    try {
        let head =  ll.head;
        while(head !=null){
        console.log(`${head.data} -> `);
        head = head.next;
    }
    } catch (error) {
        console.log("LL Print ERROR :: ", error)
    }  
}

function countNodes(ll){
    try {
        let count=0;
        let start = ll.head;
        while(start !=null){
            count++;
            start = start.next;
        }
        return count;
    } catch (error) {
        console.log("COUNT NODE ERROR :: ",error)
    } 
}

function addNodeAtFirst (ll, data){
    try {
        let node =  new Node(data)
        node.next = ll.head;
        ll.head = node;
    } catch (error) {
        console.log("ADDNODEATFIRST ERROR :: ",error)
    }
}

function deleteAtFirst (ll){
    try {
        if(ll.head){
            ll.head = ll.head.next;
        }
    } catch (error) {
        console.log("DELETENODE ERROR:: ", error)
    }
}

function indexOf(ll, key){
    try {
        let start = ll.head;
        let index = -1;
        if(start){
            while(start != null){
                index = index+1;
                if(start.data == key) return index;
                start = start.next;
            }
        }
        return index;
    } catch (error) {
        console.log("INDEXOF ERROR :: ",error)
    }
}

function clearLL (ll){
    ll.head = null;
}



addNodeAtFirst(linkedlist,25);
printlist(linkedlist);
// deleteAtFirst(linkedlist)
console.log(indexOf(linkedlist, 5))
// printlist(linkedlist);
console.log(countNodes(linkedlist));


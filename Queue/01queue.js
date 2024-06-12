class Queue {
    constructor(size){
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.length = size;
    }

    enqueue = function (data){
        try {
            if(this.isFull()) return -1;
            if(this.front === -1 && this.rear === -1) this.front++;
            this.rear++;
            this.items[this.rear] = data;
        } catch (error) {
            console.log("Enquque Error :: ", error)
        }
    }

    dequque = function (){
        try {
            if(this.isEmpty()) return -1;
            if(this.front >= this.length) return -1;
            let elem = this.items[this.front]
            delete this.items[this.front]
            this.front++;
            return elem;
        } catch (error) {
            console.log("Dequque Error :: ", error)
        }
    }

    count = function (){
        return this.rear - this.front + 1;
    }

    contains = function(key){
        if(this.isEmpty()) return false;
        for(let i = this.front; i<=this.rear; i++){
            if(key === this.items[i]) return true;
        }
        return false;
    }

    isEmpty = function (){
        return this.rear === -1 && this.front === -1 ? true : false;
    }
    
    isFull = function (){
        return this.rear >= this.length -1 ? true : false;
    }
}


const queue = new Queue(5);
console.log(queue.items);
console.log("IsEmpty :: ",queue.isEmpty());
console.log("IsFull :: ",queue.isFull());

/// enqueue ====> insertertion of element in queue at REAR;
queue.enqueue(15);
queue.enqueue(26);
queue.enqueue(82);
queue.enqueue(16);
queue.enqueue(19);
queue.enqueue(50);  // Not Inserted ::: stack overflow
console.log(queue.items);
console.log("IsEmpty :: ",queue.isEmpty());
console.log("IsFull :: ",queue.isFull());

/// dequeue ====> deleletion of element in queue at FRONT
// console.log(queue.dequque());
queue.dequque();
queue.dequque();
// queue.dequque();
// queue.dequque();
// console.log(queue.dequque());  // front > rear ===> no deletion 
console.log(queue.items);
console.log(queue.count());
console.log(queue.contains(16));





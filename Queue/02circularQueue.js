class CircularQueue {
    constructor(size){
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.length = size
    }

    isFull = function(){
        return this.front === (this.rear +1)%this.length;
    }

    isEmpty = function(){
        return this.rear == -1 && this.front == -1 ? true : false;
    }

    enqueue = function(data){
        try {
            if(this.isFull()) return -1;
            if(this.front===-1 && this.rear === -1){
                this.front = this.rear = 0;
                this.items[this.rear] = data;
                return;
            }
            if(this.rear === this.length-1 && this.front > 0 ){
                this.rear = -1;
            }
            this.rear++;
            this.items[this.rear] = data;
        } catch (error) {
            console.log("enqueue ERROR :: ", error)
        }
    }

    dequeue = function(){
        try {
            if(this.isEmpty()) return -1;
            if(this.front === this.length-1) {
                let elem = this.items[this.front];
                delete this.items[this.front]
                this.front=0;
                return elem
            }
            if(this.front === this.rear){
                let elem = this.items[this.front]
                delete this.items[this.front];
                this.front = this.rear = -1;
                return elem;
            }
            let elem = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            return elem;   
        } catch (error) {
            console.log("dequeue ERROR :: ",error)
        }
    }

}

const c_queue = new CircularQueue(5);
console.log("IsEmpty :: ",c_queue.isEmpty());
console.log("IsFull :: ",c_queue.isFull());
console.log(c_queue.items);


// enqueue in circular queue
c_queue.enqueue(15);
c_queue.enqueue(30);
c_queue.enqueue(12);
c_queue.enqueue(82);
c_queue.enqueue(96);
c_queue.enqueue(16);  // STACK OVERFLOW
console.log("IsFull :: ",c_queue.isFull());
console.log("IsEmpty :: ",c_queue.isEmpty());
console.log(c_queue.items);

// dequeue in circular key
console.log("Deleted Element :: ", c_queue.dequeue());
console.log("Deleted Element :: ", c_queue.dequeue());
console.log(c_queue.items);

c_queue.enqueue(1000);
c_queue.enqueue(2000);
c_queue.enqueue(3000);// STACK OVERFLOW
console.log(c_queue.items);


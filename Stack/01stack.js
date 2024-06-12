class Stack {
    constructor(size){
        this.items = new Array(size);
        this.top = -1;
        this.length = size;
    }

    push = function (data){
        try {
            if(this.isFull()) return -1;
            this.top++;
            this.items[this.top] = data;
        } catch (error) {
            console.log("Push Error :: ", error)
        }
    }

    pop = function (){
        try {
            if(this.isEmpty()) return -1;
            let elem =  this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return elem;
        } catch (error) {
            console.log("Pop ERROR :: ",error);
            return -1
        }
    }

    isEmpty = function (){
        return this.top < 0 ? true : false; 
    }

    isFull = function(){
        return this.top >= this.length - 1 ? true : false;
    }

    indexOf = function (key){
        if(this.top === -1) return -1;
        for(let i=0; i<=this.top; i++){
            if(key === this.items[i]) return i;
        }
        return -1;
    }
}

const stack =  new Stack(10);
stack.push(15);
stack.push(80);
stack.push(12);
stack.push(18);
stack.push(119);
stack.push(120);
stack.push(1);
stack.push(2);
stack.push(13);
stack.push(122);
console.log("Index of :: ",stack.indexOf(1));
console.log("Index of :: ",stack.indexOf(100));
// console.log("isEmpty :: ",stack.isEmpty());
// console.log("isFull :: ",stack.isFull());
// console.log(stack.items);
// console.log("isEmpty :: ",stack.isEmpty());
// console.log("isFull :: ",stack.isFull());
// console.log(stack.push(125));
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.pop());
// console.log(stack.items);
// console.log("isEmpty :: ",stack.isEmpty());
// console.log("isFull :: ",stack.isFull());


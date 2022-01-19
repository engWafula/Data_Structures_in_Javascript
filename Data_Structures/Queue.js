//implementing a queue with 2 stacks
// function Stack(capacity) {
//     this._capacity=capacity||Infinity;
//     this.count=0;
//     this.storage={}
//  this.rear={}
// }

// Stack.prototype.push = function(value) {
//   if(this.count<this._capacity){
//       this.storage[this.count++]=value;
//       return this.count;
//   }
//   return "This is very  full you  can't push  anything  else since it has  reached  maximum";
// };
// // Time complexity:

// Stack.prototype.pop = function() {
//   if(this.count===0){
//       return "There  is nothing to pop off the  stack"
//   }
//   var value=this.storage[--this.count]
//   delete this.storage[this.count]
//   if(this.count<0){
//       this.count=0
//   }

//   return value;
// };
// // Time complexity:

// Stack.prototype.peek = function() {
//   return this.storage[this.count-1]
// };
// // Time complexity:

// Stack.prototype.Count = function() {
//   return this.count;
// };

// Stack.prototype.contains=function(value){
//   for(var i=this.count;i<this.rear;i++){
//     if(this.storage[i]===value){
//       return true
//     }
//     return false
//   }
// }

// //implementing a Queue with  2  stacks

// const trickyQueue=()=>{
//     this.stackin=new Stack();
//     this.stackout=new Stack();
// }
// //pushing contents in  a  stackin
// trickyQueue.prototype.enqueue=function(value){
//      return  this.stackin.push(value)
// }
//  //transfering contents  of stackin  to  stackout

//  trickyQueue.prototype.transfer=()=>{
//      while(this.stackin.count()>0){
//         this.stackout.push(this.stackin.pop())

//      }
//  }

//  // dequeing the queue

//  trickyQueue.prototype.dequeue=()=>{
//      if(this.stackout.count()===0)
//       this.transfer()
//      return this.stackout.pop()
//  }

//  //counting elements
//  trickyQueue.prototype.count=()=>{
//      return this.stackin.count()+this.stackout.count()
//  }

//  trickyQueue.prototype.peek=()=>{
//     if(this.stackout.count()===0)
//     this.transfer()
//     return this.stackout.peek()
//  }

//  var myQueue = new trickyQueue(3);
//  console.log(myQueue.enqueue('a'), 'should be 1');
//  console.log(myQueue.enqueue('b'), 'should be 2');
//  console.log(myQueue.enqueue('c'), 'should be 3');

function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
  }
  
  Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
      this._storage[this._count++] = value;
      return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
  };
  
  Stack.prototype.pop = function() {
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
      this._count = 0;
    }
    return value;
  };
  
  Stack.prototype.peek = function() {
    return this._storage[this._count-1];
  }
  
  Stack.prototype.count = function() {
    return this._count;
  };
  
  function Queue_TwoStacks() {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
  }
  
  Queue_TwoStacks.prototype.enqueue = function(val) {
   return  this._stackIn.push(val);
  };
  
  Queue_TwoStacks.prototype._transferStacks = function() {
    while (this._stackIn.count() > 0) {
     this._stackOut.push(this._stackIn.pop());
    }
  };
  
  Queue_TwoStacks.prototype.dequeue = function() {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.pop();
  };
  
  Queue_TwoStacks.prototype.count = function() {
    return this._stackIn.count() + this._stackOut.count();
  };
  
  Queue_TwoStacks.prototype.peek = function() {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.peek();
  };
  
   var myQueue_TwoStacks = new Queue_TwoStacks(3);
  console.log(myQueue_TwoStacks.enqueue('a'));
 console.log(myQueue_TwoStacks.enqueue('b'));
 console.log(myQueue_TwoStacks.enqueue('c'));
 console.log(myQueue_TwoStacks.dequeue(), 'is  dequeued');
 console.log(myQueue_TwoStacks.peek());
 console.log(myQueue_TwoStacks.count());

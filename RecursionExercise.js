const exercise=(num)=>{
    while(num>=0){
        console.log(num);
        num--;
        
    }
}
//console.log(exercise(8))

//looping like  above  using  recursion
//My Solution
const Exercise=(num)=>{
    if(num==0){
        return ''

    }
    else{
         console.log(num)
        return console.log(Exercise(--num))
    }

    return
   
}

//Exercise(4)

//Lecturere Solution

var recursiveCountDown = function(n) {
    while (n > 0) {
      console.log(n);
      return recursiveCountDown(--n);
    }
  }
  //recursiveCountDown(9)

//non Recursive solution
  const exponent=(base,expo)=>{
    var value=base;
    while(expo>1)
    {
      value=base*value
      expo--
    }
  return value
  }
//console.log(exponent(2,2))

//recursive solution

const Exponent=(base,expo)=>{
    if(expo==1){
        return base
    }
    else if(expo==0){
        return 1
    }
   
        return base*exponent(base,--expo)
    
    
}
//console.log(Exponent(2,0));


const  recursiveMultiplier=(arr,num)=>{
    if(arr.length===0){
        return arr
    }
    var last=arr.pop()
    recursiveMultiplier(arr,num)
    arr.push(last*num)
    return arr
}
console.log(recursiveMultiplier([1,2,3],2))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse order

var recursiveReverse = function(arr) {
    var reversedArr = [];
    var addItems = function(orderedArr) {
      if (orderedArr.length > 0) {
        reversedArr.push(orderedArr.pop());
        addItems(orderedArr);
      }
      return;
    }
  
    addItems(arr);
  
    return reversedArr;
  }
// console.log( recursiveReverse([1,2,3,4]))

//Recursively  reversing  a  string

const StringReverse=(str)=>{
    if(str.length===0)
    return ""
    return str[str.length-1] + StringReverse(str.substr(0,str.length-1));
}
console.log(StringReverse("abcd"));

//implementing a Queue with  2  stacks

const trickyQueue=()=>{
    this.stackin=new Stack();
    this.stackout=new Stack();
}
//pushing contents in  a  stackin
trickyQueue.prototype.enqueue=function(value){
      this.stackin.push(value)
}
 //transfering contents  of stackin  to  stackout

 trickyQueue.prototype.transfer=()=>{
     this.stackout.push(this.stackin.pop())
 }

 // dequeing the queue

 trickyQueue.prototype.dequeue=()=>{
     this.stackout.pop()
 }

 var myQueue = new trickyQueue();
 console.log(myQueue.enqueue('a'), 'should be 1');
 console.log(myQueue.enqueue('b'), 'should be 2');
 console.log(myQueue.enqueue('c'), 'should be 3');


function Stack(capacity) {
    this._capacity=capacity||Infinity;
    this.count=0;
    this.storage={}
    this.rear={}
}

Stack.prototype.push = function(value) {
  if(this.count<this._capacity){
      this.storage[this.count++]=value;
      return this.count;
  }
  return "This is very  full you  can't push  anything  else since it has  reached  maximum";
};
// Time complexity:

Stack.prototype.pop = function() {
  if(this.count===0){
      return "There  is nothing to pop off the  stack"
  }
  var value=this.storage[--this.count]
  delete this.storage[this.count]
  if(this.count<0){
      this.count=0
  }

  return value;
};
// Time complexity:

Stack.prototype.peek = function() {
  return this.storage[this.count-1]
};
// Time complexity:

Stack.prototype.Count = function() {
  return this.count;
};

Stack.prototype.contains=function(value){
  for(var i=this.count;i<this.rear;i++){
    if(this.storage[i]===value){
      return true
    }
    return false
  }
}


// var myStack = new Stack(3);
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.pop());
// console.log("This is  on top of the stack:",myStack.peek());
// console.log("The total is",myStack.Count())
// console.log(myStack.contains('a'))

//MIN  STACK SOLUTION

function MinStack(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
    this._min = new Stack();
  }
  
  // O(1)
  MinStack.prototype.push = function(value) {
    if (this._count < this._capacity) {
      if (this._min.peek() < value) {
        this._min.push(this._min.peek());
      } else {
        this._min.push(value);
      }
      this._storage[this._count++] = value;
      return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one......';
  };
  
  // O(1)
  MinStack.prototype.pop = function() {
    this._min.pop();
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
      this._count = 0;
    }
    return value;
  };
  
  // O(1)
  MinStack.prototype.peek = function() {
    return this._storage[this._count-1];
  };
  
  // O(1)
  MinStack.prototype.count = function() {
    return this._count;
  };
  
  // O(1)
  MinStack.prototype.min = function() {
    return this._min.peek();
  };
  var minStack=new MinStack(100)

  console.log(minStack.push("10"))
  console.log(minStack.push("2"))
  console.log(minStack.push("8"))
  console.log(minStack.push("1"))
  console.log(minStack.push("7"))
  console.log(minStack.push("6"))
  console.log(minStack.min())
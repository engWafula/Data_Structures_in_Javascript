
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
    return this._storage[--this._count];
  };
  
  // O(1)
  MinStack.prototype.count = function() {
    return this._count;
  };
  
  // O(1)
  MinStack.prototype.min = function() {
    return this._min.peek();
  };
  var minStack=new MinStack(10)
  
//    console.log(minStack.push('1'), 'should be 1');
//    console.log(minStack.push('b'), 'should be 2');
//     console.log(minStack.push('c'), 'should be 3');
  console.log(minStack.push("90"))
//   console.log(myStack.push('20'));
  console.log(minStack.push("60"))
  console.log(minStack.push("8"))
  console.log(minStack.push("12"))
  console.log(minStack.push("7"))
  console.log(minStack.push("6"))
  console.log(minStack.min())
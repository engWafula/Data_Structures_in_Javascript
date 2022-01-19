// var Stack =function(){
//     this.storage=""
// }

// Stack.prototype.push= function(val){
//   this.storage=this.storage.concat("***",val)
// }

// Stack.prototype.pop= function(){

// }

// Stack.prototype.size =function(){

// }

// var myStack= new Stack();
// myStack.push("readBeans")

// console.log(myStack.push("readBeans"))






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
    return this.storage[--this.count]
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


  var myStack = new Stack(3);
  console.log(myStack.push('a'), 'should be 1');
  console.log(myStack.push('b'), 'should be 2');
  console.log(myStack.push('c'), 'should be 3');
 console.log(myStack.pop());
 console.log("This is  on top of the stack:",myStack.peek());
  console.log("The total is",myStack.Count())
console.log(myStack.contains('a'))
//   console.log(myStack.pop(), 'should be c');
//   console.log(myStack.pop(), 'should be c');
  // Time complexity:
  
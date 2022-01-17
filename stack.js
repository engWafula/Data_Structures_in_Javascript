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
  
  Stack.prototype.count = function() {
    return this.count;
  };

  var myStack = new Stack(3);
  console.log(myStack.push('a'), 'should be 1');

  // Time complexity:
  
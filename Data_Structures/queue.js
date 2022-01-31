function Queue(capacity) {
    this.head=0;
    this.tail=0;
    this._capacity= capacity||Infinity;
    this.storage={}
  }
  
  Queue.prototype.enqueue = function(value) {
    if(this.count()<this._capacity){
        this.storage[this.tail++]=value;
        return this.count();
    }
     return "The queue is at  maximum"
  };
  // Time complexity:
  
  Queue.prototype.dequeue = function() {
    if(this.head==0){
        return "There is  nothing  to  remove  from the  queue"
    }   
     var value=this.storage[this.head]
    delete this.storage[this.head]
    if(this.head<this.tail){
        this.head++;
    }

    return value;
  };
  // Time complexity:
  
  Queue.prototype.peek = function() {
    return this.storage[this.head]
  };
  
  Queue.prototype.count = function() {
    return this.tail-this.head;
    
  };
  // Time complexity:

  Queue.prototype.contains=function(value){
    for(var i=this.head;i<this.tail;i++){
      if(this.storage[i]===value){
        return true
      }
      return false
    }
  }

  Queue.prototype.until=function(value){
    for(var i=this.head;i<this.tail;i++){
      if(this.storage[i]===value){
        return i-this.head+1
      }
      return null
    }
  }


  var myQueue = new Queue(3);

console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
//console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.contains("b"));
console.log(myQueue.until('a'))
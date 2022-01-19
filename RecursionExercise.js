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



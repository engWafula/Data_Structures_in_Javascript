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
console.log(exponent(2,2))

//recursive solution
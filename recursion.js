var tracker=0;
const call_me=()=>{
    tracker++;
    if(tracker===3){
    return "no looping"//everything below the  return statement  wont execute
    
    }
   
 return call_me("anytime")
}
console.log(call_me())
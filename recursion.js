// var tracker=0;
// const call_me=()=>{
//     tracker++;
    
//     if(tracker===3){
//     return "no looping"//everything below the  return statement  wont execute
   
//     }

//    return  call_me("anytime")
// }
// console.log(call_me())


const LoopNtimes=(n)=>{
    console.log("the number is ",n)
    if(n<=1){
        return "completed"
    }
    else{
        return LoopNtimes(n-1)
    }
}

console.log(LoopNtimes(9))
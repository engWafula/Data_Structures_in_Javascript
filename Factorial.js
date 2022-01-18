//Factorial  of  a number  using  recursion

const Factorial=(num)=>{
    if(num==1){
        return 1
    }
    
       return  num*Factorial(num-1)
    
}
console.log(Factorial(4))
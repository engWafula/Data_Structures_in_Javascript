let sum = 0;
const numbers = [65, 44, 12, 4];
// const nums=numbers.forEach(myFunction);
// //console.log(nums)
// function myFunction(item) {
//   sum += item;
// }
const callBack=(val)=>{
  console.log(val)
}

const ForEach=(arr,cb)=>{
for(var i=0;i<arr.length;i++){
  //we pass the callBack function in our loop
    cb(arr[i])
}
}

ForEach(numbers,callBack)
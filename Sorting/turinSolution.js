//rough work

const nums = [1, 23, 45, 56, 64, 102];
const firstNums = nums.slice(0, nums.length-1);
const lastNums=nums.slice(nums.length)
//const lastNum   =nums.slice(5,1)
const last = [nums[nums.length-1]]
// console.log(last)
// //console.log(firstNums);
// // console.log(lastNum)
// //console.log(last)
// console.log(nums.length)
// console.log(last.concat(firstNums))

//  concrete solution
const ConcatNum=(arr)=>{
    //check if the arr's length is less or  equal to 1 if so  just  return  the arr
if(arr.length<=1){
return arr
}
else{
    //we slice the  arr from position zero to  the second  last element leaving  out  the  last  element
    const firstNums = arr.slice(0, arr.length-1);

    //to get the last element in a seperate array we get the postion by subtracting  off one from length
    const last = [arr[arr.length-1]]

    // here we use the concat method of  javascript  on  concatinate both  arrays
    console.log(last.concat(firstNums))
}

}
ConcatNum([1,9,3,5,6,90])
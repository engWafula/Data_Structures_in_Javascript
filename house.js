function Building(floors){
    this.what="building";
    this.floors=floors;
 
}
Building.prototype.countfloors=()=>{
  if(this.floors>=1){
    console.log("I have the best  house")
  }
  else{
    console.log("I have the smallest house")
  }
  
};
const myHouse=new Building(3)

console.log(myHouse)
console.log(myHouse.countfloors())
console.log(myHouse.what)

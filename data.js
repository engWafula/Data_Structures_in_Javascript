function Building(floors){
    this.what="building";
    this.floors=floors;
 
}
Building.prototype.countfloors=function(){

    console.log("I have ",this.floors,"floors")
};
const myHouse=new Building(3)

console.log(myHouse.countfloors())
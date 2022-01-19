var countChars = function(str){
    var count = 0;//0(1)

    for(var i = 0; i < str.length; i++){//0(n)
        count++;//0(2)
    }
    
    return count;//0(1)
};

countChars("dance");//0(1)

countChars("walk");//

//Time complexity is  0(n)


var countChars = function(str){

    return str.length;

};

countChars("dance");

countChars("walk");

//Time complexity  in 0(1)


//How much more work would it take to get the 
//length of 1 million char string?




var myList = ["hello", "hola"];//0(1)

myList.push("bonjour");//0(1)

myList.unshift();//0(n)


//calculate the time complexity for the 
//native methods above (separately)
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


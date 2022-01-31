function logNumbers(start, end) {
    for(var i = start; i <= end; i++) {
      if(i%2==1)
      console.log(i);
    }
  }
  logNumbers(1,10)


  //top  numbers
  function logNumbers(num) {
    for(var i = 1; i <= num; ++i) {
      if(i%2>0)
      console.log(i++);
    }
  }
  logNumbers(10)

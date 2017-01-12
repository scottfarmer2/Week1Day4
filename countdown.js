var countdownGenerator = function (x) {
  return function(){
    if (x > 0){
      console.log(x)
      x = x -1;
    } else if (x === 0) {
      console.log("Blast off");
      x = x - 1;
    } else {
      console.log("Rockets already gone, bub!")
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

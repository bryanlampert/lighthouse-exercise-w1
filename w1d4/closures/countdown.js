var countdownGenerator = function (x) {  // var y = 0;
  var strCd = "T-minus ";
  var strBo = "Blast Off!";
  var strGone = "Rockets already gone, bub!";
  x++;

  return function(y) {
    x--;
    if (x > 0) {
      return strCd + x + "...";
    } else if (x === 0) {
      return strBo;
    } else {
      return strGone;
    }
  };

};

var countdown = countdownGenerator(3);


countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

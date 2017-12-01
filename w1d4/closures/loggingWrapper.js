var wrapLog = function (callback, name) {
  return function() {
    if (arguments.length === 2) {
      var x = arguments[0];
      var y = arguments[1];
      console.log(name + "(" + x + ", " + y + ") => " + callback(x,y));
    } else if (arguments.length === 3) {
      var a = arguments[0];
      var b = arguments[1];
      var c = arguments[2];
      console.log(name + "(" + a + ", " + b + ", " + c + ") => " + callback(a,b,c));
    }

  };
};
var area = function (x, y) {return x * y;};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {return x * y * z;};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
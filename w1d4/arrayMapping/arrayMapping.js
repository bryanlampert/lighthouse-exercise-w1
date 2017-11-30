var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(z){
  var a = z.x;
  var b = z.y;
  var zPow = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(zPow);


});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

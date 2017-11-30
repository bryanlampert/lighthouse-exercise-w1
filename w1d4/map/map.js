var map = function(arr, callback) {
  var resultArr = [];
  arr.forEach(function(element) {
    var result = callback(element);
    resultArr.push(result);
  });

  console.log(resultArr);

  return resultArr;

};


var words = ["ground", "control", "to", "major", "tom"];

 map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
function countLetters(words) {
  words = words.split(" ").join("").toLowerCase();
  var letters = {};

  for (var i = 0; i < words.length; i++) {
    var char = words.charAt(i);
    var pos = i;
    if (!letters[char]) {
      letters[char] = [pos];
    } else {
      letters[char].push(pos);
    }
  }
  console.log(letters);
}

countLetters("lighthouse in the house");
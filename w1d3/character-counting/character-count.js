function countLetters(words) {
  words = words.split(" ").join("").toLowerCase();
  var letters = {};

  for (var i = 0; i < words.length; i++) {
    var char = words.charAt(i);
    if (letters[char]) {
      letters[char] += 1;
    } else {
      letters[char] = 1;
    }
  }
  console.log(letters);
}

countLetters("lighthouse in the house");
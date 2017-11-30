// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var loc = i;
      found(loc);   // execute callback
    }
  }
}

function actionWhenFound(loc) {
  console.log("Found Waldo at index " + loc + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (i, j) {
    if (i === "Waldo") {
      found(j);   // execute callback
    }
  });
}

function actionWhenFound(loc) {
  console.log("Found Waldo at index " + loc + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
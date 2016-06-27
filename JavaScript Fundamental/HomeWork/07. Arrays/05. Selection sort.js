function solve(arr) {
    var original = arr[0].split('\n'),
    n = +original[0],
    nArr = [];
    for (var i = 0, j = 1; i < n; i += 1, j += 1) {
        nArr[i] = +original[j];
    }
    
    var selectionSort = function (a) {
  // Move forward through an array, swapping the value at i with the smallest value after i
  for (var i = -1; ++i < a.length;) {
      // Move forward from i and remember the position of the smallest value
      for (var m = j = i; ++j < a.length;) {
          // If the value at j is smaller than our current minimum, remember it's position
          if (a[m] > a[j]) m = j;
      }

      // Swap the value at i with the minimum value following i
      var t = a[m];
      a[m] = a[i];
      a[i] = t;
      Console.log(t);
    }
  return a;
}
var sorted = selectionSort(nArr);

for (var i = 0; i < n; i++) {
    console.log(sorted[i]);
}
}

solve(["6\n2\n4\n5\n6\n1\n3"])



    



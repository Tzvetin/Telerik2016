function solve(input) {

  var size = +input[0], numbers = input[1].split(' ').map(Number);

  function LargerThanNeighbours(size, numberArr) {
    var max, maxIndex, temp;
    for (var i = 0; i < size; i += 1) {
      max = MaxElement(i, size, numberArr);
      maxIndex = numberArr.indexOf(max, i);
      temp = numberArr[i];
      numberArr[i] = max;
      numberArr[maxIndex] = temp;
    }
    return numberArr;
  }

  function MaxElement(index, size, numberArr) {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = index; i < size; i += 1) {
      if (numberArr[i] > max) {
        max = numberArr[i];
      }
    }
    return max;
  }
  return (LargerThanNeighbours(size, numbers).reverse().join(' '));
}

console.log(solve(['6', '-26 -25 -28 31 2 27']));

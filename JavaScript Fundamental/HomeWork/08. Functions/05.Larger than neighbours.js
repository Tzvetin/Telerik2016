function solve(input) {
  var argn = input[0].split('\n');
  var size = +argn[0], numbers = argn[1].split(' ');

  function LargerThanNeighbours(size, numberArr) {

    var times = 0;
    for (var i = 1; i < size-1; i += 1) {
      if (+numberArr[i] > +numberArr[i-1] && +numberArr[i] > +numberArr[i+1]) {
        times += 1;
      }
    }
    return times;
  }

return (LargerThanNeighbours(size,numbers));

}
console.log(solve(['6\n-26 -25 -28 31 2 27']));
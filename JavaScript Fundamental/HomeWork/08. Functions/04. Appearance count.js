function Appearance(input) {
  var argn = input[0].split('\n');
  var size = +argn[0], numbers = argn[1].split(' '), expectedNum = +argn[2];

  function manyTimes(size, numberArr, expectedNum) {

    var times = 0;
    for (var i = 0; i < size; i += 1) {
      if (+numberArr[i] === expectedNum) {
        times += 1;
      }
    }
    return times;
  }

return (manyTimes(size,numbers,expectedNum));

}

console.log(Appearance(['8\n28 6 21 6 -7856 73 73 -56\n73']));
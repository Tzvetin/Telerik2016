function solve(args) {

  var input = args[0].split('\n'),
    len = +input[0],
    searched = input[input.length-1],
    numbers = [],
    min = 0,
    
    mid,
    element;
  
  for (var i = 1, j = 0; i < len - 1; i += 1, j += 1) {
    numbers[j] = +input[i]
  }
 var max = numbers.length -1;
  while (min <= max) {
    mid = Math.floor((min + max) / 2, 10)
    element = +numbers[mid];
    if (element < searched) {
      min = mid + 1;
    }
    else if (element > searched) {
      max = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}

console.log (solve(["10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32"]))

function solve(args) {
    var number = String(args);
    var hex = '0123456789ABCDEF';

    var result = 0;

    for (var i = 0; i < number.length; i += 1) {
        result = hex.indexOf(number[i]) + result * 16;
    }
    console.log(result);
}

solve('FE');
solve("1AE3");
solve("4ED528CBB4");

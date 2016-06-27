function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    var minus = 0, plus = 0;
    var sign = "";
    if (a === 0 || b === 0 || c === 0) {
        sign = "0";
    }
    else if (a > 0 && b > 0 && c > 0) {
        sign = "+";
    }
    else if (a < 0 && b <0 && c < 0) {
        sign = "-";
    }
    else {
        for (var i = 0; i < args.length; i++) {
            if (+args[i] < 0) {
                minus += 1;
            }
            else if (args[i] > 0) {
                plus += 1;
            }
        }
        if (minus > plus) {
            sign = "+";
        }
        else {
            sign = "-";
        }
    }
    console.log(sign);
}
solve([5, 2, 2]);
solve([-2, -2, 1]);
solve([-2, 4, 3]);
solve([0, -2.5, 4]);
solve([-0.1, -0.5, -5.1]);
function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    var D = (b * b) - (4 * a * c);

    if (D < 0) {
        console.log("no real roots")
    }
    else if (D > 0) {
        x1 = (((-b) + Math.sqrt(D)) / (2 * a)).toFixed(2);
        x2 = (((-b) - Math.sqrt(D)) / (2 * a)).toFixed(2);
        var max;
        if (+x2 < +x1) {
            max = +x1;
            x1 = (+x2).toFixed(2);
            x2 = (+max).toFixed(2);
        }
        console.log("x1=" + x1 + "; x2=" + x2);
    }
    else if (D === 0) {
        x = (((-b) - Math.sqrt(D)) / (2 * a)).toFixed(2);
        console.log("x1=x2=" + x);
    }
}

// solve([5, 2, 8]);
// solve([-0.5, 4, -8]);
solve([2, 5, -3]);
solve([-1, 3, 0]);
solve([0.2, 9.572, 0.2]);
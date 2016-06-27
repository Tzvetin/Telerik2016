function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if (a > b && a > c && b > c) {
        console.log(a + " " + b + " " + c);
    }
    else if (a > b && c > b && a > c) {
        console.log(a + " " + c + " " + b);
    }
    else if (b > a && b > c && a > c) {
        console.log(b + " " + a + " " + c);
    }
    else if (b > a && b > c && c > a) {
        console.log(b + " " + c + " " + a);
    }
    else if (c > b && c > a && b > a) {
        console.log(c + " " + b + " " + a);
    }
    else if (c > a && c > b && a > b) {
        console.log(c + " " + a + " " + b);
    }
    else{
        console.log(c + " " + a + " " + b);
    }
  
}

solve([5, 1, 2]);
solve([-2, -2, 1]);
solve([-2, 4, 3]);
solve([0, -2.5, 5]);
solve([-1.1, -0.5, -0.1]);
solve([10, 20, 30]);
solve([1, 1, 1]);
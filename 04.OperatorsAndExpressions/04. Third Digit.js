function solve(args) {
    var nubmer;
    number = +args;
    
    number /= 10;

    number /= 10;

    number = Math.floor(number);
    number = (number).toFixed(0);
    if (number % 10 == 7) {
        console.log("true");
    }
    else {
        console.log("false " + number % 10);
    }
}

solve(9999799);


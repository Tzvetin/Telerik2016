function solve(args) {
    var x = +args[0],
     y = +args[1];
    var hipo = Math.sqrt((x * x) + (y * y)).toFixed(2)


    if (hipo <= 2) {
        console.log("yes " + hipo)
    }
    else {
        console.log("no " + hipo);
    }

}

solve([1.5, 1.5]);
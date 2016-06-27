function solve(args) {
    var a = +args[0],
     b = +args[1],
     h = +args[2];
    
    var result = (((a + b) / 2)*h).toFixed(7);

    console.log(result);
}


solve([8.5, 4.3, 2.7]);
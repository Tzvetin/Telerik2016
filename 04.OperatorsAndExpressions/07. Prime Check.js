function solve(args) {
    var number = +args;
    var result = "true";

    if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                result = "false";
                break;
            }
        }
        console.log(result);
    }
    else {
        console.log("false")
    }
}
solve(2);
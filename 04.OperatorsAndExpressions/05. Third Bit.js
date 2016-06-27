function solve(args) {
    var number = +args;
    var position = 3;
    var mask = 1 << position;
    var nAndMask = number & mask;
    var bit = nAndMask >> position;

    console.log(bit);
}

solve(15);
solve(1024);
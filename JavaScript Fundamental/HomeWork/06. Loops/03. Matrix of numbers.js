function solve(args) {
    var n = +args[0];
    var result = '';

    for (var i = 0; i < n; i += 1) {
        for (var j = i + 1; j <= n + i; j += 1) {
            result += j + ' ';
        }
        result += '\n';
    }
    return result;
}

console.log(solve(['2']));
console.log(solve(['3']));
console.log(solve(['4']));
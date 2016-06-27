function solve(arr) {
    var arra = arr[0].split('\n');
    var n = +arra[0], 
    numbers = [];
    var nArr = [];
    for (var i = 0, j = 1; i < n; i++, j++) {
        nArr[i] = +arra[j];  
    }
    var count = 0;
    var currentCount = 0;
    for (var i = 1; i < n; i += 1) {
        if (nArr[i] === nArr[i - 1]) {
            currentCount += 1;

            if (currentCount > count) {
                count = currentCount;
            }

        }
        else {
            currentCount = 1;
        }
    }
    console.log(count);
}

solve(["10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1"])
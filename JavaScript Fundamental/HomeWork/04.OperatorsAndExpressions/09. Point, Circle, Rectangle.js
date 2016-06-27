function solve(args) {
    var x = +args[0];
    var y = +args[1];
    var point;
    var circleResult = "outside circle";
    var rectangleResult = "outside rectangle";


    point = Math.sqrt((x-1) *( x-1) + (y-1) *(y-1)).toFixed(2);
    //Circle
    if ((point <= 1.5)) {

        circleResult = "inside circle";
    }

    //Rectangle
    if ((x >= -1 && x <= 5) && (y >= -1 && y <= 1)) {

        rectangleResult = "inside rectangle";
    }
    console.log(circleResult + " " + rectangleResult);
}



solve([2.5, 2])
solve([0, 1])
solve([2.5, 1])
solve([1, 2])
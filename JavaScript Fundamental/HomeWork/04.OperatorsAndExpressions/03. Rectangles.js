function solve(args) {
	var a = +args[0],
     b = +args[1];

     var area = (a * b).toFixed(2);
     var perimeter = ((a*2) + (b*2)).toFixed(2);
console.log( area + " " + perimeter);	
}
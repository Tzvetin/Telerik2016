function solve(args) {
    var n = +args, arr = new Array (n),
    i = 0;

for(i = 0; i < n; i += 1){
    arr[i] = i * 5;
    console.log(arr[i]);    
}

}
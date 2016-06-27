function solve(args) {
    var word = args[0].split('\n'),
        wordOne = word[0],
        wordTwo = word[1];
    var result = "false";
    
 
        if (wordOne > wordTwo) {
            result = ">";
        }
        else if (wordOne < wordTwo) {
            result = "<";
        }
        else{
            result = "=";
        }
    console.log(result)
}

solve(['hello\nhalo'])
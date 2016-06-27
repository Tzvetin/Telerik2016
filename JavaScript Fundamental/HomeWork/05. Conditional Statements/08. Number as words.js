function solve(args) {
    var fromZeroToNineCap = ['Zero', 'One', 'Two', 'Trhee', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
        fromZeroToNIneLower = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        fromTenToNineteenCap = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
        fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        fromTenToNinetCap = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
        fromTenToNinet = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundred = "hundred",
        and = "and";
    var len = (args.toString()).length;
    var numberToString = args.toString();
    if (len === 1) {

        console.log(fromZeroToNineCap[+args]);

    }
    else if (len === 2) {
        if (+args <= 19) {
            console.log(fromTenToNineteenCap[+args - 10]);
        } else if (+numberToString[1] === 0) {
            console.log(fromTenToNinetCap[+numberToString[0] - 1]);
        }
        else {
            console.log(fromTenToNinetCap[+numberToString[0] - 1] + " " + fromZeroToNIneLower[+numberToString[1]]);
        }
    }
    else {
        if (+numberToString[1] === 0 && +numberToString[2] === 0) {
            console.log(fromZeroToNineCap[+numberToString[0]] + " " + hundred);
        }
        else if (+numberToString[1] === 0) {
            console.log(fromZeroToNineCap[+numberToString[0]] + " " + hundred + " " + and + " " + fromZeroToNIneLower[+numberToString[2]]);
        }
        else if (+numberToString[1] === 1) {
            console.log(fromZeroToNineCap[+numberToString[0]] + " " + hundred + " " + and + " " + fromTenToNineteen[+numberToString[2]]);
        }
        else {
            console.log(fromZeroToNineCap[+numberToString[0]] + " " + hundred + " " + and + " " + fromTenToNinet[+numberToString[1] - 1] +" " + fromZeroToNIneLower[+numberToString[2]]);
        }
    }
}

solve(536);
solve(999);
solve(20);
solve(18);
solve(19);
// solve(51);
// solve(9);
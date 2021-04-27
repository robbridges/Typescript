function add(n1, n2, printResult, resultPhrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
var resultPhrase = 'Result is: ';
+console.log(add(number1, number2, printResult, resultPhrase));

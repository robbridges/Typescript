function add(n1, n2, printResult, resultPhrase) {
    if (printResult) {
        console.log(resultPhrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
var resultPhrase = 'Result is: ';
+console.log(add(number1, number2, printResult, resultPhrase));

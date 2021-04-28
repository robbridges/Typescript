function addBasics(n1:number, n2:number, printResultBasics: boolean, resultPhrase: string) {
  const result = n1 + n2;
  if (printResultBasics) {
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2= 3;
const printResultBasics = true;
const resultPhrase = 'Result is: ';+

console.log(addBasics(number1, number2, printResultBasics, resultPhrase));
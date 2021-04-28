type NumOrString = number | string;
type CoversionDecriptor = 'as-number' | 'as-string';


function combine(
  input1: NumOrString, 
  input2: NumOrString,
  resultConversion: CoversionDecriptor,
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 ==='number' || resultConversion === 'as-number') {
     result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

console.log(combine(30, 26, 'as-number'));
console.log(combine('30', '26', 'as-number'));
console.log(combine('Max', 'Anna', 'as-string'));
// basic add function just with type script to force us to get numbers as results

function addinFunction(n1: number, n2: number) {
  return n1 + n2;
}

// printing result of a number, practice making sure that a function returns void, it does not force us to always return void, just says in this instance I will not return anything
function printResult(num: number): void {
  console.log( 'Result: ' +num );
}

// setting up function with a cb as a third parameter
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(addinFunction(5,12));
// casting combine values to a fuction
let combineValues: (a: number, b: number) => number;

combineValues = addinFunction;


console.log(combineValues(8,8));
// writing out function with requirements as originated in AddandHandle.
addAndHandle(10, 20, (result) => {
  console.log(result);
});
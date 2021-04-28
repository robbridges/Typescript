// we don't know what user input would supply us, so we throw it as an unknown variable. better than any!
let userInput: unknown;
let userName: string;


userInput = 5;
userInput = 'Max';

// we have to type check userInput before we assign userName to user input
if (typeof userInput === 'string') {
  userName = userInput;
}
// this function throws an object error, it should never actually return anything as the throws keyword crashes our script. 
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

const hobbies = ['Games', 'Javascript',];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const personSpread = {
  personName: 'Rob',
  age: 33
}
const copiedPerson ={ ...personSpread };
console.log(copiedPerson);

const addRestParameters = (...numbers: number[]): number => {
  let result = 0;
  numbers.forEach(number => result += number);
  return result;
};

console.log(addRestParameters(5,10,24,53,48,38));
/* array destrucring, does not change the origional value, just copies it */
const [hobby1,hobby2, ...remainingHobbies] = hobbies; 

const { personName, age, } = personSpread;

console.log(personName, age);
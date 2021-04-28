"use strict";
// we don't know what user input would supply us, so we throw it as an unknown variable. better than any!
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// we have to type check userInput before we assign userName to user input
if (typeof userInput === 'string') {
    userName = userInput;
}
// this function throws an object error, it should never actually return anything as the throws keyword crashes our script. 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const hobbies = ['Games', 'Javascript',];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const personSpread = {
    name: 'Rob',
    age: 33
};
const copiedPerson = Object.assign({}, personSpread);
console.log(copiedPerson);
const addRestParameters = (...numbers) => {
    let result = 0;
    numbers.forEach(number => result += number);
    return result;
};
console.log(addRestParameters(5, 10, 24, 53, 48, 38));

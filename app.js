// we don't know what user input would supply us, so we throw it as an unknown variable. better than any!
var userInput;
var userName;
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
generateError('An Error Occured', 500);

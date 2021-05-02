"use strict";
// const names: Array<string> = ['Rob', 'Shawn'];
// //names[0].split('');
// const promise:Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000)
// });
// promise.then(data => {
//   //data.split('');
// })
/* passing in generic types instead of object allows us to tell typescript that we intend to merge the two types of Generics */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Rob' }, { age: 33 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = `Got ${element.length}`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Rob' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getitems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Rob');
textStorage.addItem('Is');
textStorage.addItem('Great');
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// we can set arrays to readonly, so that Typescript gets upset in we push or pop the array. We could also do this to objects!
const names = ['Rob', ' Developing'];
// names.push('Shawn');

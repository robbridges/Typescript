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

function merge<T extends object, U extends object>(objA: T, objB: U ) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Rob'}, {age: 33});
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = `Got ${element.length}`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
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

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({name: 'Rob'}, 'name'));

class DataStorage<T extends string| number | boolean> {
  private data: T[] = [];

  addItem(item: T ) {
    this.data.push(item);
  }
  removeItem(item : T ) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getitems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Rob');
textStorage.addItem('Is');
textStorage.addItem('Great');

const numberStorage = new DataStorage<number>();


// we are setting up a partial Coursegoal below (say we needed to validate ach input before returning the object) this can be done by using a Partial utility type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string, 
  description: 
  string, date: Date
  ): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}


// we can set arrays to readonly, so that Typescript gets upset in we push or pop the array. We could also do this to objects!
const names: Readonly<string []> = ['Rob', ' Developing'];
// names.push('Shawn');


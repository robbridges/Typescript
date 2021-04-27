const person = {
  name: 'Rob',
  age:30,
  hobbies: ['Sports', 'Cooking']
};


console.log(person.name); 

let favoriteActivities: string[]; 
person.hobbies.forEach(hobby => console.log(hobby));
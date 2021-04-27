const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Rob',
  age:30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin');
//person.role[1] = 10;


console.log(person.name); 

let favoriteActivities: string[]; 
person.hobbies.forEach(hobby => console.log(hobby));
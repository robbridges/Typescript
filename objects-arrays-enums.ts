enum userRole { ADMIN, READ_ONLY, AUTHOR};

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  userRole: userRole,
} = {
  name: 'Rob',
  age:30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'developer'],
  userRole: userRole.ADMIN,
};

person.role.push('admin');
//person.role[1] = 10;


console.log(person.name); 

let favoriteActivities: string[]; 
person.hobbies.forEach(hobby => console.log(hobby));
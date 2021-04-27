var person = {
    name: 'Rob',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
console.log(person.name);
var favoriteActivities;
person.hobbies.forEach(function (hobby) { return console.log(hobby); });

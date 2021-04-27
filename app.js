var userRole;
(function (userRole) {
    userRole[userRole["ADMIN"] = 0] = "ADMIN";
    userRole[userRole["READ_ONLY"] = 1] = "READ_ONLY";
    userRole[userRole["AUTHOR"] = 2] = "AUTHOR";
})(userRole || (userRole = {}));
;
var person = {
    name: 'Rob',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    userRole: userRole.ADMIN
};
person.role.push('admin');
//person.role[1] = 10;
console.log(person.name);
var favoriteActivities;
person.hobbies.forEach(function (hobby) { return console.log(hobby); });

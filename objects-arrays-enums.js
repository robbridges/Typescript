"use strict";
var userRole;
(function (userRole) {
    userRole[userRole["ADMIN"] = 0] = "ADMIN";
    userRole[userRole["READ_ONLY"] = 1] = "READ_ONLY";
    userRole[userRole["AUTHOR"] = 2] = "AUTHOR";
})(userRole || (userRole = {}));
;
const person = {
    name: 'Rob',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'developer'],
    userRole: userRole.ADMIN,
};
person.role.push('admin');
//person.role[1] = 10;
console.log(person.name);
let favoriteActivities;
person.hobbies.forEach(hobby => console.log(hobby));

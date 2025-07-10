"use strict";
// primitive data types
let a = 10;
let b = 'janisar hyder';
let c = false;
// non-primitive data types (Arrays, tuples, enums)
let x = [1, 2, 3, 4, 5, 6];
let y = ['janisar', 1234];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.SUPER_ADMIN);

"use strict";
function GetData(obj) {
    console.log(obj.age, obj.email, obj.name, obj.isAdmin);
}
GetData({
    name: 'janisar',
    email: 'janisarhyder@gmail.com',
    age: 19,
    isAdmin: false
});
function Abcd(a) {
    console.log(a.name, a.email, a.age);
    a.GetDetails("Hi I am under the water.");
}
Abcd({
    name: 'janisar',
    email: 'janisar@gmail.com',
    age: 19,
    GetDetails(user) {
        console.log(user);
    }
});

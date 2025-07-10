"use strict";
// Introduction to Classes & Objects
// Fundamental ofClasses & Objects 
class MyData {
    constructor() {
        this.age = 10;
        this.name = 'janisar';
        this.email = 'janisa@gmail.com';
    }
}
let x = new MyData();
console.log(x.age, x.email, x.name);
// Classes & Objects : Constructor
class NewData {
    constructor(MyName, MyAge) {
        this.MyName = MyName;
        this.MyAge = MyAge;
    }
}
let b = new NewData('janisar', 19);
// Classes & Objects : this. keyword
// Classes & Objects : Public & Private 
// Access Modifier
// Classes & Objects : Protected, Optional Properties
// Classes & Objects : Parameter Properties
// Classes & Objects : Getters & Setters
// Classes & Objects : Static Members  
// Classes & Objects : Abstract Classes

// Introduction to Classes & Objects
// Fundamental ofClasses & Objects 

class MyData{
    age=10;
    name='janisar';
    email = 'janisa@gmail.com';
}
let x = new MyData();
console.log(x.age,x.email,x.name);



// Classes & Objects : Constructor ,this. keyword
 class NewData{
    
    constructor(public MyName: string, public MyAge: number){}
    show(): void  {
        console.log('Name:  ' +this.MyName+'Age: '+ this.MyAge);
    }
 }
 let b = new NewData('janisar', 19)

 
// Classes & Objects : Public & Private 

// Access Modifier
// Classes & Objects : Protected, Optional Properties
 
// Classes & Objects : Parameter Properties
// Classes & Objects : Getters & Setters
// Classes & Objects : Static Members  
// Classes & Objects : Abstract Classes
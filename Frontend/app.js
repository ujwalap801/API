// constructor-doesn't return anything & starts with captial
function  Person(name,age)
{
    this.name =name;
    this.age = age;
}

Person.prototype.talk=function()
{
    console.log(`hi, my name is ${this.name}`)
}

let p1 = new Person("uju",12);
let p2 = new Person("eve",24)


// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object 
// types that has a constructor function.

class People{
    constructor(name,age)
    {
        console.log("parent called");
        this.name =name;
        this.age =age;
    }
    talk()
    {
        console.log(`hi, my name is ${this.name}`);
    }
}
// CLASSES are a template for creating objects
// The constructor method is a special method of a class for creating and initializing an object instance of that class
class Student extends People{
    constructor(name,age)
    {
        console.log("students constuctor")
       super(name,age)  //parent  class constructor is being called
    }

}

let s1 = new Student("uju",23);


// Inheritance is a mechanism that allow us to create new 
class Teacher extends People{
    constructor(name,age,subject)
    {
        super(name,age)  //parent  class constructor is being called

        this.subject=this.subject
    }

   
}
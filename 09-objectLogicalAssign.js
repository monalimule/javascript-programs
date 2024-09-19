
console.log(`===================== 1.WAP to list the properties of a JavaScript Object ====================`);
var student ={
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

var properties = Object.keys(student);
console.log(properties);



console.log(`=========== 2.WAP to delete the rollno property from the object.Also print the object before or after deleting the property ===========`);
var student = {
    name: "Ravi Sharma",
    sclass: "VI",
    rollno: 101
};

console.log("Before deleting  rollno:");
console.log(student);
delete student.rollno;
console.log("After deleting rollno:");
console.log(student);



console.log(`===================== 3.WAP to get the length of a javascript ====================`);
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
    
};
function getObjectLength(obj) {
    return Object.keys(obj).length;
}
console.log("Length of thr car object:"+ getObjectLength(car));


console.log(`===================== 4.WAP to How to get dynamic access to an object property in JS ====================`);
var person = {
    name: "john Doe",
    age: 30,
    profession: "Developer"
};

console.log("Given object is:",person);
const{profession} = person;
console.log("Dynamic access object property- profession:", profession);



console.log(`===================== 5.WAP to How to modify an object's property in an array object in JS ====================`);
var employee = {
    
        id: 1,
        name: "John Doe",
        position: "Developer",
        salary: 50000

};
console.log("Given object is:",employee);

employee.position = "Software Engineer";
employee.salary = 80000;
const{position,salary} = employee;
console.log("Updated Position:", position);
console.log("Updated Salary:", salary);


console.log(`===================== 6.How to get the last item of JavaScript object? ====================`);
console.log(`====================== 6.1. using Object.keys() Method =====================`);
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
}
// Using Object.keys()
var keys = Object.keys(car);
var lastkey = keys[keys.length - 1];
console.log("Last property using keys:", lastkey, car[lastkey]);

console.log(`====================== 6.2. using Object.entries() Method =====================`);
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
}
// Using Object.entries()
var entries = Object.entries(car);
var lastEntry = entries[entries.length - 1];
console.log("Last property using entries:", lastEntry[0], lastEntry[1]);


console.log(`========== 7.How to use array that include & check an object against a property of an object? =========`);
var students = [
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Smith", grade: "B" },
    { id: 3, name: "Samuel Green", grade: "C "}
];
function checkStudentExists(id) {
    return students.filter(student => student.id == id).length > 0;
}
console.log("Given Object Is:",students);

console.log(checkStudentExists(2));
console.log(checkStudentExists(4));


console.log(`================ 8.How to add an object to an array in JavaScript? ================`);
var fruits = [`apple`, `banana`, `orange`];
var newFruits = {
    name: `grape`,
    color: `purple`
};
fruits.push(newFruits);
console.log(fruits);



console.log(`============ 9.How to remove duplicates from an array of objects using JavaScript? =============`);
var students = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 1, name: "John Doe" },
    { id: 3, name: "Samuel Green" },
    { id: 2, name: "Jane Smith" }
];

function removeDuplicates(arr) {
    return arr.filter((student, index, self) =>
        index === self.findIndex((t) =>
            t.id === student.id && t.name.trim() === student.name.trim() // Use trim() to remove extra spaces
        )
    );
}

var uniqueStudents = removeDuplicates(students);
console.log(uniqueStudents);




console.log(`============ 10.How to get a subset of a javascript objects properties? =============`);
var person = {
    firstName: `John`,
    lastName: `Doe`,
    age: 30,
    city: `Pune`,
    country: `India`
};

var{firstName, lastName, age, city, country} = person;
console.log(firstName, lastName, age, city, country);


console.log(`============ 11.How to convert an object {} to an Array[] of key-value pairs in JavaScript=============`);
console.log(`=======================a).Using Object.entries() ===========================`);
const obj = {
    key1: `value1`,
    key2: `value2`,
    key3: `value3`
};

const entrie =  Object.entries(obj);
console.table(entrie);

console.log(`=======================b).Using Object.keys() ===========================`);
const object = {
    key1: `value1`,
    key2: `value2`,
    key3: `value3`
};

const entriesKey = Object.keys(object).map(key => [key, object[key]]);
console.log(entriesKey);



console.log(`============ 12.How to check if a value is object-like in JavaScript? =============`);
function isObjectLike(value) {
    return typeof value == `object` && value != null;
}

console.log(isObjectLike({}));
console.log(isObjectLike([]));
console.log(isObjectLike(null));
console.log(isObjectLike(42));
console.log(isObjectLike(`string`));


console.log(`============ 13.How to use a variable for a key in a JavaScript object literal? ==============`);
let key = `name`;
let value = `John Doe`;      

let objects = {
    [key]:value
};

console.log(objects);

  
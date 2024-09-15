
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

var propertyName = "age";
console.log(person[propertyName]);

console.log(`===================== 5.WAP to How to modify an object's property in an array object in JS ====================`);
var employee = {
    
        id: 1,
        name: "John Doe",
        position: "Developer",
        salary: 50000

};
function updateEmployeeSalary(id,newSalary) {
    for (var i = 0; i< employee.length; i++) {
        if (employee[i].id == id) {
            employee[i].salary = newSalary;
            return;
        }
    }
}
updateEmployeeSalary(1,60000);
console.log(employee);





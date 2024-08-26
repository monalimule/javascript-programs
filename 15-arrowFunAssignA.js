
console.log(`======================== 1.Arrow function with no arguments and no return value ==========================`);
// Arrow function with no arguments and no return value
let show = ()=>{
    console.log("Good Morning,Today is Monday");  
}
show();


console.log(`======================== 2.Arrow function with arguments and no return value ==========================`);
// Arrow function with arguments and no return value
let multiply = (n1, n2,n3=1)=>{
    console.log(`Multiplication is: ${n1*n2*n3}`);
}
multiply(5,5,2);
multiply(10,4);


console.log(`======================== 3.Arrow function with arguments and return value ==========================`);
// Arrow function with arguments and return value
let addition = (num1,num2,num3,num4,num5)=>{
    let result = num1+num2+num3+num4+num5;
    return result;
}
let add = addition(100,100,200,349,756);
console.log(`Addition is: ${add}`);
let sum = addition("I am"," learning"," ES6"," features"," In depth"); 
console.log(`Addition is: ${sum}`);
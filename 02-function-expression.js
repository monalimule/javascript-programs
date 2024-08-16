

console.log(`===============Function Expression with no argument and no return value ===============`);
var add = function() {
    console.log("Inside Function Expression...........");
}
add();


console.log(`===============Function Expression with argument and no return value ===============`);
var add = function(n1,n2){
    console.log(`Addition is: ${n1+n2} `);
}
add(10,20);


console.log(`===============Function Expression with argument and with return value ===============`);
var add = function(n1,n2){
    var result = n1 + n2;
    return result;
}
var result = add(10,20);
console.log(result);
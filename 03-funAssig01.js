

console.log("======== function with no arguments and no return value =============");

function Hello(){
    console.log("Hello World!");
}
Hello(); // Function call or invoke


function add(){
    console.log("Monali This Side...");
}
add(); // Function call or invoke


console.log("======== function with arguments and no return value =============");
function personalDetails(firstName, lastName, collegeName) {
    console.log("My First Name is:",firstName);
    console.log("My Last Name is:",lastName);
    console.log("My College Name is:",collegeName);
}
personalDetails("Monali","Mule", "DAV Velankar college");


console.log("======== function with arguments and no return value =============");
function addThreeValues(para1, para2, para3) {
    console.log("Given numbers:",para1, para2, para3);
    var result =para1+para2+para3;
    console.log("Addition is: ", result);
}
addThreeValues(10.12, 600, 40);
addThreeValues("Hello", " Good", " Morning");


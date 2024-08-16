

console.log(`=========================== String Template ====================================`);
var givenString="   Hey you are doing good, keep it up   ";
function stringHandsOn(){
    console.log("The given string is:",givenString);
    var lengthGivenString=givenString.length;
    console.log("Length of string is: ",lengthGivenString);

    console.log("=============================== Trim string ====================================");
    
    var newString=givenString.trim(" ");
    console.log("String after trim is:",newString);
    console.log("Total number of extra spaces are:",lengthGivenString-newString.length);
    console.log("First and Last Character are: ", newString.charAt(0),newString.charAt(newString.length-1));
    var Array1=newString.split(" ");
    console.log("total number of words are: ",Array1.length );
    console.log('Index of word "good" is: ',givenString.indexOf("good"));
    console.log("Substring staring form index 22 is:",givenString.substring(22));
    console.log('Is String Ends with "up": ',newString.endsWith("up"));
    console.log('Is string start with "Hey": ',newString.startsWith("Hey"));
    
}
stringHandsOn();



console.log(`===================== String Template ====================`);
console.log(`I love only "javascript"`);
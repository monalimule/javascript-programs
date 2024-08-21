
console.log(`=================== WAP to find the length and total number of characters =================`);
const str1 = "Hello, World!";
const length1 = str1.length;
console.log(`The length of the string "${str1}" is: ${length1}`);

const str2 = "JavaScript is the language of Internet";
const length2 = str2.length;
console.log(`The length of the string "${str2}" is: ${length2}`);


console.log(`=================== WAP to print or log the last character of given string =================`);
function getLastCharacter(str) {
    return str.charAt(str.length - 1);
}

const str01 = "Hey, my friend, Programming Language";
const str02 = "I am learning logical programs";
const str03 = "Angular";

console.log(`The last character of the string "${str01}" is: ${getLastCharacter(str01)}`);
console.log(`The last character of the string "${str02}" is: ${getLastCharacter(str02)}`);
console.log(`The last character of the string "${str03}" is: ${getLastCharacter(str03)}`);


console.log(`=================== WAP to print or log the first character of given string =================`);
function getFirstCharacter(str) {
    return str.charAt(0);
}

const string1 = "React"
const string2 = "Elon Musk";
const string3 = "Apple founder is Stew Job";

console.log(`The first character of the string "${string1}" is: ${getFirstCharacter(string1)}`);
console.log(`The first character of the string "${string2}" is: ${getFirstCharacter(string2)}`);
console.log(`The first character of the string "${string3}" is: ${getFirstCharacter(string3)}`);

console.log(`=================== WAP to check whether given strings contains word 'UI' or noy? =================`);
function containsUI(str) {
    return str.includes('UI');
}

const string01 = "React - UI Developer"
const string02 = "UI Developer";
const string03 = "Front end and backend technologies";

console.log(`Does the string "${string01}"  contain 'UI'? ${containsUI(string01)}`);
console.log(`Does the string "${string02}"  contain 'UI'? ${containsUI(string02)}`);
console.log(`Does the string "${string03}"  contain 'UI'? ${containsUI(string03)}`);


console.log(`=================== WAP to How do you split a string into an array of substrings? =================`);
function splitString(str,delimiter) {
    return str.split(delimiter);
}
const string11 = "apple,orange,banana";
const string22 = "Stew,Bill,Jenny,Elon";

const result1 = splitString(string11, ',');
console.log(`The array of substrings from "${string11} is:`,result1);

const result2 = splitString(string22, ',');
console.log(`The array of substrings from "${string22} is:`,result2);


console.log(`=================== Reverse string 1)Using Predefined Methods =================`);
function reverseStringUsingMethods(str) {
    return str.split('').reverse().join('');
}
const str11 = "Software";
const str22 = "UI Developer";

console.log(`The reverse of the string "${str11} is:${reverseStringUsingMethods(str11)}`);
console.log(`The reverse of the string "${str22} is:${reverseStringUsingMethods(str22)}`);



console.log(`=================== Reverse string 2)Without Using Predefined Methods =================`);
function reverseStringManually(str) {
   let reversedStr = '';
   for (let i = str.length-1; i >=0; i--) {
    reversedStr += str[i];
    }
    return reversedStr;
}

const stg1 = "Web Developer";
const stg2 = "Billion Dollar";
const stg3 = "Java";

console.log(`The reverse of the string "${stg1}" is:${ reverseStringManually(stg1)}`);
console.log(`The reverse of the string "${stg2}" is:${ reverseStringManually(stg2)}`);
console.log(`The reverse of the string "${stg3}" is:${ reverseStringManually(stg3)}`);
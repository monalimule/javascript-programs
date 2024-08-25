

console.log(`====================== Using for loop remove duplicate element ===================`);

const arrayNum = [11,3,4,11,4,7,3];

const arrayNew = [];

for (let i = 0; i < arrayNum.length; i++) {
    // Check if the element is already in the arrayNew
    if (!arrayNew.includes(arrayNum[i])) {
        arrayNew.push(arrayNum[i]);
    }
}

console.log(arrayNew);  


console.log(`=============== Make first and last character capital from given string ==============`);
const str = "How are you mate";
console.log(`Given string is: ${str}`);
let splitStr = str.toLowerCase().split(' ');
let array = [];
for (let i = 0; i < splitStr.length; i++) {
    const char = splitStr[i];
    let firstChar = char.charAt(0).toUpperCase();
    let lastChar  = char.charAt(char.length-1).toUpperCase();
    let middleChar= char.slice(1,-1);
    let result    =  firstChar+middleChar+lastChar;
    array.push(result);


} 
console.log(`New string with first and Last character capitalize: ${array.join(' ')}`);

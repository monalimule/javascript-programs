

console.log("======================= 1st Function =====================");
function squareOfWordLength(word){
    console.log(`The Given Sentence is: ${word}`);
    var result=word.split(" ");
    var len=result.length;
    console.log(`Length of the word is: ${len}`);
    var square=len*len;
    return square;
}
var result=squareOfWordLength("javaScript");
console.log(`square of word length is: ${result}`);
var result=squareOfWordLength("Google Chrome");
console.log(`square of word length is: ${result}`);
var result=squareOfWordLength("Web Development Smart");
console.log(`square of word length is: ${result}`);

console.log("======================= 2st Function =======================");
givenString="i am Angular Developer";
console.log("The Given String is: ",givenString);

function divideMultipleOFString(){
    var lengthOfString=givenString.length;
    console.log(`Length of given string: ${lengthOfString}`);
    var wordDivide=givenString.split(" ");
    var wordLength=wordDivide.length;
    console.log(`Length of words is: ${wordLength}`);
    var divide=lengthOfString/wordLength;
    console.log(`The String length Divide by number of word of string is: ${divide}`);
    var multiply=lengthOfString*wordLength;
    console.log(`The string length multiply by number of word of string is: ${multiply}`);   
}
divideMultipleOFString()
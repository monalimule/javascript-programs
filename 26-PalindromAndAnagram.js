
console.log("======== 1. Write a function to check whether given string is Palindrome or not. ========");
function palindrome(word) {
    console.log(`Given string: ${word}`);
    let pali = word.split('').reverse().join('');
    if (word === pali) {
        console.log(`'${word}' is palindrome`);
    } else {
        console.log(`'${word}' is not palindrome`);
    }
}
palindrome('madam');
palindrome('dad');
palindrome('hello')


console.log("======== 2. Write a function to check whether given string is anagram or not. ========");
function anagram(word1, word2) {
    let toLowerStr1 = word1.toLowerCase().split('').sort().join('');
    let toLowerStr2 = word2.toLowerCase().split('').sort().join('');
    if (toLowerStr1 == toLowerStr2) {
        console.log(`Given String is: ${word1}, ${word2} :"It is Anagram."`);
    } else {
        console.log(`Given String is: ${word1}, ${word2} :"It is not Anagram."`); 
    }
}
anagram('Silent','Listen');
anagram('Hello','World');
anagram('Such','much');

console.log(`============================= 10.Program to find duplicate characters ============================`);
function duplicateCharCount(str) {
    const charCount = {};
    for (let i= 0; i < str.length; i++) {
        const char = str[i];
        if (char != ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    for (const char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}
const strings = ["Banana", "Apple", "Software Developer" ];

strings.forEach(str =>{
    console.log(`Duplicate characters in the string "${str}" are:`);
    duplicateCharCount(str);
    console.log('');
    
    
});


console.log(`========================= 11.Program to check the given string is palindrome or not =========================`);
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    const len = cleanStr.length;

    for (let i = 0; i < len/ 2; i++) {
      if (cleanStr[i] != cleanStr[len-1-i]) {
        return false;
      }
    }
    return true;
}
const stringNew = ["madam","banana","radar","civil","noon"];

stringNew.forEach(str =>{
    if (isPalindrome(str)) {
        console.log(`"${str}" is a palindrome.`);
    }else{
        console.log(`"${str}" is not a palindrome.`);
    }
});
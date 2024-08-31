
console.log(`================================= Program to count character 'a' ===============================`);
function charCount(str) {
    let count = 0;
    for (let i = 0;i < str.length; i++) {
       if (str[i].toLowerCase() == 'a') {
        count++;
       }
    }
    return count;
}

const strings = ["JavaScript","Do or Die","Learn with us,Job with us",
                "Empowering Dreams,Guaranteeing Future",
                "Anny, My favorite fruit is Apple"]

strings.forEach(str => {
    console.log(`The number of 'a' characters in the string "${str}" is: ${charCount(str)}`);
});


console.log(`================================= Program to count Vowels ===============================`);
function vowelsCount(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i  = 0; i < str.length; i++) {
       if (vowels.includes(str[i])) {
         count++;
       }
        
    }
    return count;
}

const string = ["JavaScript","HTML and CSS","Language Of Internet","I am UI Developer","Do or Die"];
  string.forEach(str => {
    console.log(`The number of vowels in the string "${str}" is: ${vowelsCount(str)}`);
    
});



console.log(`================================= Program to count Words ===============================`);
function wordCount(str) {
    const words = str.split('').filter(word => word.length > 0);
    return words.length;
}

const stringNew = ["JavaScript The language of Internet",
                "Enhance Your Learning Journey with Exclusive Add-ons",
                "Beyond frameworks,Beyond Imagination",
                "I am passionate Software Developer"
];

string.forEach(str => {
    console.log(`The number of words is the string "${str}" is: ${wordCount(str)}`);
    
});
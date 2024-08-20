
console.log(`============ Program to count the character e=============`);

var word = "Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char=='e') {
        count++;
    }
}
console.log(`Count of char e is : ${count}`);


console.log(`=================== Write a program to Count Vowels ===================`);

var sentence = " I am very good IT Developer";
var vowelCount = 0;
var vowels = "aeiou";
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log(`Vowels count is: ${ vowelCount}`);


console.log(`============  sum of  1 to 5 =========== `);
var sum = 0;
for (let index = 1; index <=5; index++) {
    sum = sum + index;
}
console.log(`Sumation is: ${sum}`);



console.log(`============ write a function to get the sum of the cube numbers from 1 to 5 =========== `);
var sumCube = 0;
for (let index = 1; index <=5; index++) {
    sumCube = sumCube + index * index * index;
}
console.log(`sum cube is: ${sumCube }`);

console.log("========== log odd char from the given string ===========");
function  oddPositionedChars(oddchar){
    console.log(`Given String: ${oddchar}`);
    for (let index = 0; index < oddchar.length; index++) {
        var char = oddchar.charAt(index);
        if (index%2==1 && char != " ") {
            console.log(char);        
        }
    }
}
oddPositionedChars("Hard work always pays back.")
oddPositionedChars("Soon I will be UI IT champ.")






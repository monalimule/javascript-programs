

console.log("===================== Greater Number Check ====================");
function greaterNumber(n1,n2){
    var result=n1>=n2?n1:n2;
    console.log(`the Given are: ${n1},${n2} and Greter number is: ${result}`);  
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("====================== Even Odd Number ========================");
function isEvenOrOddNum(num){
    var result=num%2==0?true:false;
    console.log(`The given number is: ${num} is even? : ${result}`);  
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("==================== Word length Even or Odd =====================");
function wordLength(word){
    var len=word.length;
    var result=len%2==0?"EVEN":"ODD";
    console.log(`Given word is: ${word}, length of ${word} is: ${len} is ${result}`);
}
wordLength("javaScript");
wordLength("developer");
wordLength("Google");



console.log("======================== Using if-else Statement =========================");
var voteEligible= function(age,person){
    if (age>=18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote`);
    }
}
voteEligible(45,"Monali");
voteEligible(17,"Snehita");
voteEligible(8,"Ashutosh");
voteEligible(-10,"Akshay");
voteEligible(200,"Jahnavi");
voteEligible(0,"Sanket");
voteEligible(null,"Shrikant");
console.log("======================= Height Eligibility ==============================");
var heightEligible =function (height,person){
    if (height>=160) {
        console.log(`hey ${person} your height is ${height} and you are eligible for ground Exam`);
        
    } else {
        console.log(`sorry,hey ${person} your height is less ${height} you are not eligible for ground Exam`);
        
    }
}
heightEligible(122,"Ashutosh");
heightEligible(168,"Akshay");
heightEligible(170,"Snehita");
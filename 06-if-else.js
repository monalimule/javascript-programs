

var votingChecker = function(age, person){
    if (age>=18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`Unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote`);
    }
}
votingChecker(21, "Jenny");
votingChecker(17, "Elon");


var voteEligibility = function(age){
    if (age==0 || age < 0 || age > 130) {
        console.log(`Invalid Date: Age - ${age}`);
    } else {
        console.log(`Valid date: ${age}`);
        if (age>=18) {
            console.log(`Eligible for voting`);
        } else {
            console.log(`Not Eligible for voting`);
        }
    }
}
voteEligibility(45);   
voteEligibility(17);
voteEligibility(8);      
voteEligibility(-10);   
voteEligibility(200);   
voteEligibility(0);   
voteEligibility(null);        
    

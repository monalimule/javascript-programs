

console.log("================== Interview Eligibility =================");

function interviewCheck(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore>=70|| hscScore>=80 || sscScore>90
    ?`Congratulation ${candidateName} you are eligible for TCS interview`
    : `Unfortunately ${ candidateName}  you are not eligible for interview`
    console.log(result);  
}

console.log("Given Criteria's:80,86,90");   
interviewCheck(80,86,90,"Monali");
console.log(`============================================================`);

console.log("Given Criteria's:70,65,55");
interviewCheck(70,65,55,"Snehita");
console.log(`============================================================`);

console.log("Given Criteria's:60,79,88");
interviewCheck(60,79,88,"Ashutosh");
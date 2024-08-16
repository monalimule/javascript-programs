

console.log(`================== Interview Eligibility ========================`);
 var interviewCheck = function(person,gradScore,hscScore,sscScore  ){
    if (gradScore>=70|| hscScore>=80|| sscScore>=90) {
        console.log(`Hii  ${person} your score are ${gradScore}, ${hscScore},${sscScore} and you are eligible for TCS interview`);
        }else {
        console.log(`Hii  ${person} your score are ${gradScore}, ${hscScore},${sscScore} and you are not eligible for TCS interview`);
    }
}
interviewCheck("Monali",75,45,52);
interviewCheck("Akshay",70,65,55);
interviewCheck("Snehita",60,79,88);
interviewCheck("Ashutosh",80,86,90);
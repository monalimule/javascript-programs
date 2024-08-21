

console.log(`==================================== Object Creation ====================================`);

const professor ={
    name:"Amol lamkhede",
    age : "32",
    department:" Electrical power system",
    experience:8,
    specialization:"Power system",
    ismarried:true,

    degree:{
        engineering:"EPS",
        masters:"MTech in ps" ,
        phd:"Power system"
    },

    certificates:[
        "Certificate of IEE course",
        "Certificate of Advance IOT project",
        "certificate of Advance programming in ps",
    ]
     
}
console.log(professor);
console.log(`================================= Experience ================================`);

professor.totalExperience = "14 years";
console.log("After adding totalExperience:", professor);
console.log(`================================= Modify Age ====================================`);

professor.age=50;
console.log("After Modifiying age:",professor);
console.log(`================================= Adding Certificate ==================================`);

professor.certificates.splice(1,0,"Oracle certificate");
console.log("After adding new certificate:",professor);


for (let i =0;  i< professor.certificates.length; i++) {
console.log("Professor.certificates[i]");    
}
console.log("Logging the complete object:",);
console.log("professor:",professor);
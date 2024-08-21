

console.log("========== Create object 'Professor' =========");
let professor = {
  firstName: "Siddheshwar",
  lastName : "Deore",
  city : "Pune",
  state : "Maharashtra",
  pinCode :411052,
  degrees: {
    diploma: "Computer",
    engineering: "CSC",
    m_tech: "IT",
    pg_diploma: "AWS",
    PHD: "Adv Computing",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
    "Power BI",
  ],
};
console.log(professor);

console.log("========== Add new property- totalExperience in 'professor' object =========");
professor.totalExprience = "14 years";
console.log(`totalExperience: ${professor.totalExprience}`);

console.log("========== Modify one property =========");
professor.city="Aurangabad";
professor.pinCode=431001;
console.log(professor);

console.log("========== Add new certificate =========");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);

console.log("========== Laat element of certificate =========");
console.log(`last element: ${professor.certificates[professor.certificates.length-1]}`);

console.log("========== traverse the array using for loop =========");
const certi = professor.certificates;
for (const element of certi) {
    console.log(element); 
}

console.log("========== complete object using for in loop =========");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`);   
    }
}


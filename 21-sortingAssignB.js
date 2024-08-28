

class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`================== 1.Sort the array in Descending order ang log its Id,Name,Dept ====================`);
const arrayEmpSortId = arrayEmployee.sort((e1, e2)=>{
    return e1.emp_id<e2.emp_id ? 1 : -1;
});
for (const element of arrayEmpSortId) {
    console.log(`Employee Id is: ${element.emp_id} , Employee Name is:${element.emp_name}, Department is:${element.emp_dept}`);
}


console.log(`================== 2.Sort the array in Ascending order ang log its Id,Dept,Company ====================`);
const arrayEmpSortDept = arrayEmployee.sort((e1, e2)=>{
    return e1.emp_id>e2.emp_id ? 1 : -1;
});
for (const element of arrayEmpSortDept) {
    console.log(`Employee Id is: ${element.emp_id} , Department is:${element.emp_dept}, Company is: ${element.emp_company}`);
}


console.log(`================== 3.Sort the array in Descending order ang log its Name,Salary,company ====================`);
const arrayEmpSortSalary = arrayEmployee.sort((e1, e2)=>{
    return e1.emp_id<e2.emp_id ? 1 : -1;
});
for (const element of arrayEmpSortSalary) {
    console.log(`Employee Name is: ${element.emp_name} , Salary is:${element.emp_salary}, Company is: ${element.emp_company}`);
}



class arrayEmployees{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new arrayEmployees(22,"Anil","IT",50000,"TCS");
const emp_radha = new arrayEmployees(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new arrayEmployees(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new arrayEmployees(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new arrayEmployees(77,"Monika","IT",40000,"Wipro");
const emp_viny = new arrayEmployees(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new arrayEmployees(99,"Mahesh","HR",85000,"Infy");

const array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`============================== 1.Log employees who works in TCS =================================`);
for (const element of array) {
   if (element.emp_company=="TCS") {
    console.log(`Employee Name is: ${element.emp_name} , Company Name is:${element.emp_company}`);
   }
}

console.log(`======================== 2.Log employees who works in Finance Department ========================`);
for (const element of array) {
   if (element.emp_dept=="Finance") {
    console.log(`Employee Name is: ${element.emp_name} , Department is:${element.emp_dept}`);
   }
}

console.log(`========================== 3.Log employees whos name start with 'R' =============================`);
for (const element of array) {
   if (element.emp_name.startsWith('R')) {
    console.log(`Employee Id:${element.emp_id},Employee Name is:${element.emp_name},Department is:${element.emp_dept},Salary is: ${element.emp_salary},Company is:${element.emp_company}`);
   }
}

console.log(`====================== 4.Log employees whos salary is greater than 75000 ========================`);
for (const element of array) {
   if (element.emp_salary>75000) {
    console.log(`Employee Name is:${element.emp_name},Salary is: ${element.emp_salary},Company is:${element.emp_company}`);
   }
}

console.log(`======= 5.Log employees whos salary is greater than or equal to 50000 and from "IT Department" =========`);
for (const element of array) {
   if (element.emp_salary>=50000 && element.emp_dept=="IT") {
    console.log(`Employee Id:${element.emp_id},Employee Name is:${element.emp_name},Department is:${element.emp_dept},Salary is: ${element.emp_salary},Company is:${element.emp_company}`);
   }
}

console.log(`=============================== 6.Log employees who works in Infosys =============================`);
for (const element of array) {
   if (element.emp_company=="Infy") {
    console.log(`Employee Id:${element.emp_id},Employee Name is:${element.emp_name},Department is:${element.emp_dept},Salary is: ${element.emp_salary},Company is:${element.emp_company}`);
   }
}

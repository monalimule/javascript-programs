
function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName = bankName ;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;

}

console.log(`===================================== Create and Log Bank Details ==================================`);

let yesBank = new Bank("Yes Bank","Solapur","YES07774535","112233");
console.log(`Bank Details is: Name:${yesBank.bankName}, Location:${yesBank.location}, IFSCcode: ${yesBank.ifscCode}, Branch-Code: ${yesBank.branchCode}`);

let sbiBank = new Bank("SBI Bank","Pune","SBI67843285","896745");
console.log(`Bank Details is: Name:${sbiBank.bankName}, Location:${sbiBank.location}, IFSCcode: ${sbiBank.ifscCode}, Branch-Code: ${sbiBank.branchCode}`);

let mahBank = new Bank("MAH Bank","Mumbai","MAHB08736526","746276");
console.log(`Bank Details is: Name:${mahBank.bankName}, Location:${mahBank.location}, IFSCcode: ${mahBank.ifscCode}, Branch-Code: ${mahBank.branchCode}`);

let axisBank = new Bank("Axis Bank","Delhi","AXIS09876543","098765");
console.log(`Bank Details is: Name:${axisBank.bankName}, Location:${axisBank.location}, IFSCcode: ${axisBank.ifscCode}, Branch-Code: ${axisBank.branchCode}`);


console.log(`================================= Add Data Members to the Prototype Object ======================================`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`======================= Log Open Time And Close Time For SBI Bank =======================`);
console.log(`SBI Bank Details: Open-Time is:${sbiBank.openTime}, Close-Time is:${sbiBank.closeTime}`);

console.log(`======================= Log Bank Name and Close Time for Axis Bank =======================`);
console.log(`Bank Name is: ${axisBank.bankName}, Close-Time is: ${axisBank.closeTime}`);

console.log(`======================= Log Bank Name,Branch Code and Open Time for YesBank =======================`);
console.log(`Bank Name is: ${yesBank.bankName},Branch-Code is: ${yesBank.branchCode} Open-Time is: ${axisBank.openTime}`);
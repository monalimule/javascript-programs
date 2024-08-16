

//numeric string used with + given string type 
console.log("===============implicit - conversion===================");

let result;
result = 3+2;
console.log(result);
console.log('Reason is + operator perform string concatenation when one operands is string');
console.log("=======================string======================" );

result = 8+10;
console.log(result);
console.log("============================true====================" );

result = 3+ true;
console.log(result);
console.log('Reason is:true is boolean value true=1');

console.log("=========================undefined======================" );
result = 3+ undefined;
console.log(result); 
console.log("Reason is :3 a string undefined=undefined concat two string =3undefined");

console.log("===========================null=========================" );
result = 3+ null;
console.log(result);
console.log("Reason is:null=string concat two string 3null");
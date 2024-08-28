
console.log(`====================== 1.Reverse the given Array ======================`);
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log(`Given Array is: ${arrayRollNumbers}`);
const reverseArray = arrayRollNumbers.reverse();
console.log(`Reverse Array is: ${reverseArray}`);


console.log(`=========== 2.Use the sort() method without any custom logic ===========`);
console.log(`Given Array is: ${arrayRollNumbers}`);
arrayRollNumbers.sort();
console.log(`Sorting Array is: ${arrayRollNumbers}`);


console.log(`================ 3. Sort the array in ascending order =================`);
const arrayOne = arrayRollNumbers.sort();
console.log(`Given Array is: ${arrayRollNumbers}`);
const arrayTwo = arrayRollNumbers.sort( (n1, n2)=>{
    return n1>n2 ? 1 : -1; 
});
console.log(`Ascending Order is: ${arrayTwo}`);


console.log(`============== 4. Find the greatest number from the array ==============`);
console.log(`Given Array is: ${arrayRollNumbers}`);
const greatestNumber = Math.max(...arrayRollNumbers);
console.log(`Greatest Number is :${greatestNumber}`);  // expected output 799


console.log(`============== 5. Find the smallest number from the array ==============`);
console.log(`Given Array is: ${arrayRollNumbers}`);
const smallestNumber = Math.min(...arrayRollNumbers);
console.log(`Greatest Number is :${smallestNumber}`);  // expected output 11


console.log(`================= 6. Remove duplicates from the array ==================`);
console.log(`Given Array is: ${arrayRollNumbers}`);
const duplicateArray = [...new Set(arrayRollNumbers)];
console.log(`New Array is: ${duplicateArray}`);         //  expected Output: [113, 45, 56, 11, 32, 109, 799]








    
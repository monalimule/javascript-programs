

console.log(`========================== 1.Add 10 into each element of array ==========================`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`Given Array is: ${arrayNumbers}`);
const newArray = arrayNumbers.map((element)=>{
        return element+10;
});
console.log(`New Array is: ${ newArray}`);

console.log(`========================== 2.Log and cube the each array element ==========================`);
console.log(`Given Array is: ${arrayNumbers}`);
const arrayNew = arrayNumbers.map((element)=>{
        return element*element*element;
});
console.log(`Given Array Cube is: ${arrayNew}`);

console.log(`============= 3.Add index value into its corresponding each array element ==================`);
console.log(`Given Array is: ${arrayNumbers}`);
const arrayNum = arrayNumbers.map((value, index) => value + index);

console.log(`Transform Array is: ${arrayNum}`);

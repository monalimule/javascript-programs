
const arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`======================= 1.Log the array with its index using forEach ========================`);
console.log(`Given array is: ${arrayNumber}`);
arrayNumber.forEach( (element,index)=>{
       console.log(`Element is: ${element}, Index is: ${index}`);
});


console.log(`======================= 2.Log and Find the positive numbers ========================`);
console.log(`Given array is: ${arrayNumber}`);
arrayNumber.forEach( (element)=>{
    if(element>0) {
        console.log(element);
    }  
});

console.log(`======================= 3.Log and Find the Negative numbers ========================`);
console.log(`Given array is: ${arrayNumber}`);
arrayNumber.forEach( (element)=>{
    if(element<0) {
        console.log(element);
    }  
});

console.log(`======================= 4.Log and Find the Even numbers ========================`);
console.log(`Given array is: ${arrayNumber}`);
arrayNumber.forEach( (element)=>{
    if(element%2==0) {
        console.log(element);
    }  
});

console.log(`======================= 5.Log and Find the sum of all array elements ========================`);
console.log(`Given array is: ${arrayNumber}`);
const sum = arrayNumber.reduce((runningTotal, element)=>{
    return runningTotal+ element;
}, 0);

console.log(`Sum of all array elements is: ${sum}`);


console.log(`======================= 6.Log and Find the only even index array elements ========================`);
console.log(`Given array is: ${arrayNumber}`);
arrayNumber.forEach( (element)=>{
    if(element%2==0) {
        console.log(element);
    }  
});








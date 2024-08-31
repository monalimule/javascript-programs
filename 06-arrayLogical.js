
console.log(`===================== 1.Print the number of an element present in array ===================`);
function printNumberOfElements(arr) {
    console.log(`NUmber Of Elements In Array:`, arr.length);
}
let array = [1, 2, 3, 4, 5, 6 ];
console.log(`Given Array is: ${array}`);
printNumberOfElements(array);



console.log(`====================== 2.Print the sum of all the items of the array =====================`);
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum = sum + arr[i];
    }
    return sum;
}
let arrayNew = [1, 2, 3, 4, 5, 6 ];
console.log(`Given Array is: ${arrayNew}`);
console.log("Sum of all the items in the array:", calculateSum(arrayNew));




console.log(`========================= 3.Right rotate the element of an array ========================`);
function rightRotateArray(arr) {
    if (arr.length == 0) {
        return arr;
    }
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
let arrayOne = [1, 2, 3, 4, 5, 6 ];
console.log(`Given Array is: ${arrayOne}`);
console.log("Original Array:", arrayOne);
let rotatedArray = rightRotateArray(arrayOne);
console.log("Array After Right Rotation", rotatedArray);



console.log(`========================= 4.Sort the element of an array in ascending order ===================`);
function sortArrayAscending(arr) {
    return arr.slice().sort(function (a,b) {
          return a-b;
    })
}
let arrayTwo = [4, 8, 5, 3, 2, 7, 1, 9, 3 ];
console.log(`Given Array is: ${arrayTwo}`);
let sortedArray = sortArrayAscending(arrayTwo);
console.log("Array After sorting in ascending order",sortedArray);



console.log(`========================= 5.Sort the element of an array in descending order ===================`);
function sortArrayDescending(arr) {
    return arr.slice().sort(function (a,b) {
          return b-a;
    })
}
let arrayThree = [4, 8, 5, 3, 2, 7, 1, 9, 3 ];
console.log(`Given Array is: ${arrayTwo}`);
let sortArray = sortArrayDescending(arrayTwo);
console.log("Array After sorting in ascending order",sortArray);


console.log(`========================= 6.Find the third largest number in the array ===================`);
function findThirdLargest(arr) {
    if (arr.length < 3) {
        return "Array doesn't have enough elements";
    }
    arr.sort(function (a,b){
        return b-a;
    });
    return arr[2];
}
let arrayFour = [5, 4, 6, 8, 3, 9, 1, 4 ];
console.log(`Given Array is: ${arrayFour}`);
console.log("Third largest number in the array :",findThirdLargest(arrayFour));


console.log(`========================= 7.Find the second largest number in the array ===================`);
function findSecondLargest(arr) {
    if (arr.length < 3) {
        return "Array doesn't have enough elements";
    }
    arr.sort(function (a,b){
        return b-a;
    });
    return arr[1];
}
let arrayFive = [5, 7, 1, 8, 4, 9, 3, 2 ];
console.log(`Given Array is: ${arrayFive}`);
console.log("Second largest number in the array :",findSecondLargest(arrayFive));



console.log(`========================= 8.Find the largest number in the array ===================`);
function findLargestNumber(arr) {
    if (arr.length == 0) {
        return "Array is empty";
    }
    let largest = arr[0];
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let arraySix = [5, 8, 3, 6, 9, 2, 7, 4 ];
console.log(`Given Array is: ${arraySix}`);
console.log("Largest number in the array :", findLargestNumber(arraySix));




console.log(`========================= 8.Find the Second smallest number in the array ===================`);

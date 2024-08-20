

const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Given Array:", array);

console.log("=====Find the total elements available or length and log on console:=====");
console.log("Total elements:", array.length);

console.log("=====Log the first element and last element in arrayNumbers and log on console:=====");
console.log("First element:", array[0]); // Output: 20
console.log("Last element:", array[array.length - 1]); // Output: 11

console.log("=====Log the third last element using length property and log on console:=====");
console.log("Third last element:", array[array.length - 3]); // Output: 60

console.log("=====Find the all even numbers using for of loop and log on console:=====");

const evenArray = [];
for (let number of array) {
    if (number % 2 === 0) {
        evenArray.push(number);
    }
}
console.log("Even numbers: " + evenArray.join(", "));

console.log("=====Find the odd numbers for of loop and log on console:=====");

const oddArray = [];
for (let number of array) {
    if (number % 2 !== 0) {
        oddArray.push(number);
    }
}
console.log("Odd numbers: " + oddArray.join(", "));

console.log("=====Find all the even positioned elements from arrayNumbers, sum it and log on console:=====");
let evenSum = 0;
for (let i = 0; i < array.length; i += 2) {
    evenSum += array[i];
}
console.log("Sum of even positioned elements:", evenSum);

console.log("=====Find all the odd positioned elements from arrayNumbers, sum it and log on console:=====");
let oddSum = 0;
for (let i = 1; i < array.length; i += 2) {
    oddSum += array[i];
}
console.log("Sum of odd positioned elements:", oddSum);

console.log("=====Find the sum of all elements from arrayNumbers, log on console:=====");
let sum = 0;
for (let number of array) {
    sum += number;
}
console.log("Sum of all elements:", sum);

console.log("=====Find the numbers which are multiple of 5:=====");

const fiveArray = [];
for (let number of array) {
    if (number % 5 === 0) {
        fiveArray.push(number);
    }
}
console.log("Numbers which are multiple of 5: " + fiveArray.join(", "));

console.log("=====Is number 115 available in arrayNumbers?=====");
console.log("Is 115 available in arrayNumbers:", array.includes(115)); // Output: false

console.log("=====Is number 23 available in arrayNumbers ?=====");
console.log("Is 23 available in arrayNumbers:", array.includes(23)); // Output: true

console.log("=====Insert numbers → 55, 66 at index 3 and log array on console:=====");
array.splice(3, 0, 55, 66);
console.log("Array after inserting 55 and 66:", array);

console.log("=====Delete 3 elements starting from index 4 and log arrayNumbers on console:=====");
array.splice(4, 3);
console.log("Array after deleting 3 elements:", array);
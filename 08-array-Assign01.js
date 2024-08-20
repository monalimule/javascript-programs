

const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("=====Fruits List=====")
console.log(fruits);
console.log("=====Log First and Last element on console=====")
console.log("First element:", fruits[0]);
console.log("Last element:", fruits[fruits.length - 1]);

console.log("=====Add element 'Papaya' before the element 'Banana' then log array on console=====")
fruits.unshift("papaya");
console.log(fruits);

console.log("=====Remove 'Mango' from the array then log on console=====")
let index = fruits.indexOf("Mango");
if (index !== -1) {
    fruits.splice(index, 1)
}
console.log(fruits);

console.log("=====Add element 'Pineapple' at the last position then log array on console=====")
fruits.push("Pineapple");
console.log(fruits);

console.log("=====Insert an element 'Dragon Fruit'' before 'Water Melon' and log array on console=====")
let index1 = fruits.indexOf("Water Melon");
if (index1 !== 1) {
    fruits.splice(index1, 0, "Dragon Fruit");
}
console.log(fruits);

console.log("=====Replace an element 'Orange' with 'Kiwi' then print on console=====")
let index2 = fruits.indexOf("Orange");
if (index2 !== 1) {
    fruits[index2] = "Kiwi";
}
console.log(fruits);

console.log("=====Log the elements starting from index 1 to 4 =====")
console.log(fruits.slice(1, 5));

console.log("=====Only select last 3 elements and log on console=====")
console.log(fruits.slice(-3));
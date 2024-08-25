

console.log(`====================== Using for loop remove duplicate element ===================`);

const arrayNum = [11,3,4,11,4,7,3];

const arrayNew = [];

for (let i = 0; i < arrayNum.length; i++) {
    // Check if the element is already in the arrayNew
    if (!arrayNew.includes(arrayNum[i])) {
        arrayNew.push(arrayNum[i]);
    }
}

console.log(arrayNew);  // Output: [11, 3, 4, 7]
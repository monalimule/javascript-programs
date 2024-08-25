

function primeNo(num) {
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}

let count = 0;
const array = [3, 9, 7, 6, 19, 29, 53];
console.log(`Given Array = ${array}`);
for (const element of array) {
    if (primeNo(element) == true) {
        count++;
    }
}
console.log(`Prime number count is: ${count}`);

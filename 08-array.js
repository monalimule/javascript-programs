

console.log(`==============Traversing an array ======================`);

for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);  
}
console.log(`==============Traversing an array in reverse order ======================`);
for (let index = arrayList.length-1; index >=0; index--) {
    const element = arrayList[index];
    console.log(element);   
}
console.log(`============== Print only even indexed elements  ===============`);
for (let index = 0; index < arrayList.length; index++) {
    if (index%2==0) {
        const element = arrayList[index];
        console.log(element); 
    }
}
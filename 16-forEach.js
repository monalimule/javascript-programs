

const array = [10, 20, 30, 40, 50];
array.forEach( (element,index,arr)=>{
    console.log(element,index,arr);
    
});


console.log(`================= Traversing set ================`);
let mySet = new Set(); 
mySet.add(10);
mySet.add(50);
mySet.add(20);
mySet.add(50);
mySet.add(20);
mySet.forEach( (element)=>{
    console.log(element);
    
});


console.log(`================ Traversing Map Collection =================`);

const myMap = new Map();
myMap.set("A","Jenny");
myMap.set("B","Stew");
myMap.set("C","Elon");
myMap.set("B","Bill");
const cGradeStudent = myMap.get("C");
console.log(cGradeStudent);
myMap.forEach( (value,key)=>{
   console.log(value,key);

});

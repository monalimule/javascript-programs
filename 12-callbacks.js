

function jennyHomeWork(callback){
    console.log(`==== Jenny Started Homework=====`);
    console.log(`She is completing her homework`);
    console.log(`She have completed her homework step by step`);
    callback();  
}

let elonCopyHomeWork = function(){
    console.log(`====== Elon came back ======= `);
    console.log(`Started copying homework`);
    console.log(`Finally he also completed his assignment`);   
}
jennyHomeWork(elonCopyHomeWork);



console.log(`======== callback Hell ===============`);
setTimeout(function(){
    console.log(`Hello - Good Morning`); 
    setTimeout(function() {
       console.log(`Inside nested callback - 1`);
       setTimeout(function() {
        console.log(`Inside nested callback - 2`);
        setTimeout(function() {
            console.log(`Inside nested callback - 3`);
        }, 7000);
       }, 9000);
    }, 5000);
}, 8000);
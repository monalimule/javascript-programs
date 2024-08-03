
console.log(`============= Function with no para and no return value =============`);
function stringBasics() {
    console.log(`My dream company is: "Infosys" ` );
    var hobbyOne = "Folk dance"
    var hobbyTwo = "Treaking"
    var hobbyThree = "Programming"

    console.log(`My hobbies are: ${hobbyOne}, ${ hobbyTwo } , ${hobbyThree}`);

    
    console.log("Total number of characters is: ",hobbyOne.length + hobbyTwo.length + hobbyThree.length);
}
stringBasics("Folk dance", "Treaking", "Programming");
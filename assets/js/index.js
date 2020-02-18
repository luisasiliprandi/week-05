// This is a print statement to the console
// console.log("Hello World!");

// This is an example of variables using 'var
// Don't use var anymore
// var x = 3;
// var y = x + 2;

// console.log(y);

// y = "Hello";

// console.log(y);

// let x = 3;
// let y = x + 2;

// console.log(y);

// y = "Hello";

// console.log(y);

// //

// const today = "2020-02-18";

// console.log(today);

// today = "2020-02-18";




// Types

// // number
// let apples = 3;
// console.log(apples);

// // string
// let name = "Luisa";
// console.log(name);

// let last_name = `${name} Siliprandi`;
// console.log(last_name);

// // let full_name = `${name} ${last_name}`;
// // console.log(full_name);

// let isOver18 = true;
// console.log(isOver18);

// let isTeslaOwner = false;
// console.log(isTeslaOwner);

// // undefined
// let awesome;
// console.log(awesome);

// // null
// let winners = null;
// console.log(winners);





// Arrays

// let groceries = [
//     "apples",
//     "orange",
//     "celery",
//     "pineapple"
// ];

// console.log(groceries);

// console.log(groceries.length);

// console.log(groceries[3]);

// console.log(groceries[4]);
// console.log(groceries[2]);

// groceries.push("eggs");
// groceries.push("bread");
// groceries.push("water","flour");

// console.log(groceries.length);

// let justBought = groceries.pop();

// console.log(groceries.length);

// console.log(justBought);





// Objects
let person = {
    name: {
        first: "Luisa",
        last: "Siliprandi",
    },
    fullName: "Luisa Siliprandi",
    dateOfBirth: "02-11",
    hair: "brunette",
    hairStyle: "straight",
    favColors: [
        "black",
        "lead",
        "cyan",
        "neon orange",
    ]

};

console.log(person.favColors[2]);

console.log(person.dateOfDeath);

person.dateOfDeath = "2020-02-18";

console.log(person.dateOfDeath);

person.dateOfDeath = null;
console.log(person.dateOfDeath);

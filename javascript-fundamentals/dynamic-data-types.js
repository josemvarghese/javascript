//* Dynamic data types

//* We donot have to manully define the data types of value stroed in a variable.
//* Instead dataypes are determind automatically



// ?  only VALUE  have the type not the VARIABLE
// ?  when we check typeof , we are checking the typof VALUE not the VARIABLE
let  y = 21341234n;
const z = {
    firstName: "Jose",
    lastName: "MV"
};
console.log(`Typeof true - `, typeof true);
console.log(`Typeof 24 - `, typeof 24);
console.log(`Typeof x - `, typeof `x`);
console.log(`Typeof z - `, typeof z);
console.log(`----------------------- ******** -----------------------`);
console.log(`Typeof y - `, typeof y);
console.log(`----------------------- ******** -----------------------`);



 y = "Changed to string";
 console.log(`----------------------- Dynamic type -----------------------`);
 console.log(`Typeof y - `, typeof y);
 console.log(`----------------------- End  Dynamic type -----------------------`);


let year
console.log(`year - `,year);
console.log(`Typeof year - `, typeof year);
year=1991;
console.log(`Typeof year - `, typeof year);


console.log(`Typeof null - `, typeof null);
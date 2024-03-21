
// **  https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62
// ** https://dev.to/nodedoctors/animated-nodejs-event-loop-phases-1mcp
// **  read event loop priority 

console.log("One");



console.log("Four");
const baz = () => console.log('baz');

setTimeout(() => {
    console.log("two")
},900);
Promise.resolve().then(() => {
    console.log("Three")
})
setTimeout(() => {
    console.log("five")
}, 1000);
setImmediate(()=>{
    console.log('Six')
})
// setInterval(()=>{
//     console.log("Tick-six");
// },1000)


// (()=>{
//   console.log("")  
// })()


const numbers = [15, 32, 15, 5, 5, 1, 2, 2, 15, 3, 2, 1, 4];

let sortedArray = [];

for (const n of numbers) {
    // * find the value inside sorted unique array
    // * If its no inside sorted array find the position and put the value into the sorted array
    if (sortedArray.length == 0) {
        sortedArray.push(n);
    }
    else {
        let newNumber = true;
        for (const sortNumber of sortedArray) {
            if (sortNumber === n) {
                newNumber = false
                break;
            }
        }
        if (newNumber) {
            sortedArray = sortedArrayWithNewValue(n, sortedArray);
        }
    }
}
// console.log("🚀 ~ file: test.js:7 ~ sortedArray:", sortedArray)


function sortedArrayWithNewValue(newValue, sortedArray) {

    sortedArray.push(newValue);
    for (let index = 0; index < sortedArray.length-1; index++) {
        for (let x = index+1; x < sortedArray.length; x++) {
            if (sortedArray[index] > sortedArray[x]) {
                let temp = sortedArray[index];
                sortedArray[index] = sortedArray[x];
                sortedArray[x] = temp;
            }
        }
    }
    console.log("🚀 ~ file: test.js:43 ~ sortedArrayWithNewValue ~ sortedArray:", sortedArray)
    return sortedArray;
}


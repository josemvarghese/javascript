
// **  https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62
// ** https://dev.to/nodedoctors/animated-nodejs-event-loop-phases-1mcp
// **  read event loop priority 

// console.log("->One");

// console.log("%%%%Four");





setTimeout(() => {
    console.log("**two-setTimeout")
}, 0);
setTimeout(() => {
    console.log("-----five-setTimeout")
}, 0);
setImmediate(() => {
    console.log("++++++6-setImmediate")
});
Promise.resolve().then(() => {
    console.log("===Three-Promise")
})



function greet(){
    return "Hello";
}
function Respond(){
    return setTimeout(()=>{
        return "Hey!";
    },1000)
}


// const g = greet();
// console.log("🚀 ~ g:", g)
// const r = Respond();
// console.log("🚀 ~ r:", r)

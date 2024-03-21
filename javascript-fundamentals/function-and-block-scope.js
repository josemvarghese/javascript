// function a() {
//     let x = 10;

// }
// function b() {
//     // console.log("🚀 ~ file: function-and-block-scope.js:6 ~ b ~ x", x)
//     // scope is 
// }
// a();
// b();
{
    let x= 11;
    var y = 21;
    const z =31; 
    console.log("🚀 ~ file: function-and-block-scope.js:22 ~ z", z)
    console.log("🚀 ~ file: function-and-block-scope.js:17 ~ y", y)
    console.log("🚀 ~ file: function-and-block-scope.js:15 ~ x", x)
    console.log("===============================================")
}
{
    console.log("🚀 ~ file: function-and-block-scope.js:22 ~ z", z)
    console.log("🚀 ~ file: function-and-block-scope.js:17 ~ y", y)
    console.log("🚀 ~ file: function-and-block-scope.js:15 ~ x", x)
    console.log("===============================================")
}
let x= 13;
var y = 23;
const z =33; 
console.log("🚀 ~ file: function-and-block-scope.js:14 ~ z", z)
console.log("🚀 ~ file: function-and-block-scope.js:13 ~ y", y)
console.log("🚀 ~ file: function-and-block-scope.js:12 ~ x", x)
console.log("===============================================")

{   
    console.log("🚀 ~ file: function-and-block-scope.js:29 ~ z", z)
    console.log("🚀 ~ file: function-and-block-scope.js:24 ~ y", y)
    console.log("🚀 ~ file: function-and-block-scope.js:20 ~ x", x)

    console.log("===============================================")
}
    
    




// (async test (x){
//     let res = await function(){
//         return x*x 
//     }
//     return res; 

// })(3);
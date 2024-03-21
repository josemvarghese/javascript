constvaribaile = 10000;
console.log("🚀 ~ constvaribaile:", constvaribaile)


// ?? Variables declared with var are function-scoped, meaning they are only accessible within the function in which they are defined.
// ??  var variables are hoisted to the top of their scope during the compilation phase, which can lead to unexpected behavior.
exampleVar();
function exampleVar() {
    if (true) {
        var x = 10;
        console.log("1",x); // Outputs 10
    }
    console.log("2",x); // Outputs 10 (not undefined) due to hoisting
}

//?? Variables declared with let are block-scoped, meaning they are only accessible within the block (e.g., inside an if statement or a loop) in which they are defined.
//?? let variables are not hoisted in the same way as var, and they have a more predictable behavior.

exampleLet()
function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // Outputs 20
    }
    // console.log(y); // Error: y is not defined
}


var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
;
console.log("🚀 ~ parseInt:", parseInt("1013", 2))
console.log("🚀 ~ parseInt:", parseInt("1013"))

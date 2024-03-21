{
    var a = 10;
    console.log("🚀 ~ file: lab.js:2 ~ a", a)
    console.log("🚀 ~ file: lab.js:4 ~ a:", this.a)
    console.log("🚀 ~ file: lab.js:5 ~ this:", this)
    let b = 20;
    console.log("🚀 ~ file: lab.js:4 ~ b", this.b)
}


{

    (function () {
        setTimeout(() => console.log('order 1'), 10);
        console.log('order 2');
        setTimeout(() => console.log('order 3'), 10);
        console.log('order 4');
    }
    )();
}
{
    let i = 10234;
    (function (i) {
        console.log(i)
    })(i)
}

// {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(
//             (function (i) {
//                 console.log(i);
//             })(i)
//             , 10)
//     }
// }

{
    var i = 10;
    (function (i) {
        console.log("🚀 ~ file: lab.js:41 ~ i", i);
        (function (x) {
            var i = 12;
            console.log(x * x);
            i++;
            console.log("🚀 ~ file: lab.js:46 ~ i", i);
        })(i);
        console.log("🚀 ~ file: lab.js:48 ~ i", i);

    })(i)

}

{
    new Promise((resolve, reject) => {
        resolve(1);
    }).then(
        (x) => x = x + 1
    ).then((x) => {
        console.log("🚀 ~ file: lab.js:60 ~ ).then ~ x", x);
    }).then((x) => {
        throw new Error("Test error");
    }).catch(() => {
        console.log("🚀 ~ file: lab.js:64 ~ ).then ~ error");
    }).then((x) => {
        console.log("🚀 ~ file: lab.js:66 ~ ).then ~ x", x);
    }).finally(() => {
        console.log('finished');
    })
}


{
    console.log("🚀 ~ file: lab.js:76 ~ x", false == '0');
    console.log("🚀 ~ file: lab.js:76 ~ x", false === '0')
}

{
    function sum() {
        console.log("🚀 ~ file: lab.js:81 ~ sum ~ arguments", arguments);
    }
    sum(1, 2, 3, 34, 234, { a: 1, b: 2 })


    const s = () => {
        console.log("🚀 ~ file: lab.js:87 ~ sum ~ arguments", arguments);
    }
    // s(1, 2, 3, 34, 234, { a: 1, b: 2 })
}



{

    function multiply(n, callback) {
        console.log("🚀 ~ file: lab.js:96 ~ multiply ~ multiply", n)
        callback(n, n * n)
    }
    function callback(n, x) {
        console.log(`🚀 ~ file: lab.js:99 ~ callback ~ sum ${n}*${n}=${x}`);

    }
    multiply(3, callback);
}


{
    // ** rest operator 
    console.log("=========rest operator  ==================")
    function restOperator(a, ...b) {
        console.log("🚀 ~ file: lab.js:111 ~ restOperator ~ a", a);
        console.log("🚀 ~ file: lab.js:111 ~ restOperator ~ b", b);
    }
    restOperator(1, 23, 45, 67, 89)
    const restOperatorArrowFunction = (x, ...y) => {
        console.log("🚀 ~ file: lab.js:116 ~ restOperatorArrowFunction ~ x", x)
        console.log("🚀 ~ file: lab.js:116 ~ restOperatorArrowFunction ~ y", y)
    }
    restOperator(1, 23, 45, 67, 89);
    restOperatorArrowFunction(1, 23, 45, 67, 89);
    console.log("=========rest operator  ==================")
}
{
    console.log("=========spread operator ==================")
    // ** 
    const x = { a: 21, b: 345 };
    const y = { y: 31, z: 987 };
    console.log("🚀 ~ file: lab.js:127 ~ x", x);
    console.log("🚀 ~ file: lab.js:128 ~ y", y);
    // ** destructuring
    const z = { c: 3, ...x, ...y }
    console.log("🚀 ~ file: lab.js:130 ~ z", z);
    console.log("=========spread operator ==================")
}

{
    // ** destructuring
    console.log("=========destructuring==================")
    const x = { c: 3, a: 21, b: 345, y: 31, z: 987 };
    const { c, ...d } = x;
    console.log("🚀 ~ file: lab.js:137 ~ x", x)
    console.log("🚀 ~ file: lab.js:137 ~ d", d)
    console.log("🚀 ~ file: lab.js:137 ~ c", c)
    console.log("=========destructuring==================")

}
{
    console.log("=========Map==================")
    function triple(n) {
        return n * n * n;
    }
    const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    console.log("🚀 ~ file: lab.js:153 ~ arr", arr)
    const newArray = arr.map(triple);
    console.log("🚀 ~ file: lab.js:156 ~ newArray", newArray)

    const objArray = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }, { a: 7, b: 8 }];
    console.log("🚀 ~ file: lab.js:158 ~ objArray", objArray)
    const newObjArray = objArray.map((obj) => {
        obj.a = (obj.a * obj.a);
        obj.b = (obj.b * obj.b);
        obj.c = (obj.b + obj.a);
        return obj;
    })
    console.log("🚀 ~ file: lab.js:164 ~ newObjArray ~ newObjArray", newObjArray)
}

{
    const objArray = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }, { a: 7, b: 8 }, { a: 5, b: 6 }, { a: 7, b: 8 }];

    const res = objArray.filter((data) => {
        if (data.a == 5 && data.b == 6) {
            return data;
        }
    })
    console.log("🚀 ~ file: lab.js:176 ~ res ~ res", res)
    const result = objArray.find((data) => {
        if (data.a == 5 && data.b == 6) {
            return data;
        }
    })
    console.log("🚀 ~ file: lab.js:182 ~ result ~ result", result)

}
{
    // *** Loop through an object
    const x = { a: 2, b: 3, c: 4 };
    for (const key in x) {
        const element = x[key];
        console.log(`🚀 ~ file: lab.js:190 ~ element ${key} - ${element}`);
    }
    const objArray = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }, { a: 7, b: 8 }, { a: 5, b: 6 }, { a: 7, b: 8 }];
    for (const iterator of objArray) {
        console.log("🚀 ~ file: lab.js:194 ~ iterator", iterator)
    }
}

{

    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    console.log("🚀 ~ file: lab.js:201 ~ arr1", arr1)
    let arr2 = arr1.map(arr1.pop, [...arr1]);
    console.log("🚀 ~ file: lab.js:203 ~ arr2", arr2)

}

{
    console.log(`POSITIVE_INFINITY ${Number.POSITIVE_INFINITY}`)
    console.log(`NEGATIVE_INFINITY ${Number.NEGATIVE_INFINITY}`)
    console.log(`MAX_VALUE ${Number.MAX_VALUE}`)
    console.log(`MAX_SAFE_INTEGER ${Number.MAX_SAFE_INTEGER}`)
    console.log(`MIN_VALUE ${Number.MIN_VALUE}`)
    console.log(`MIN_SAFE_INTEGER ${Number.MIN_SAFE_INTEGER}`)
    console.log(`EPSILON ${Number.EPSILON}`)
    console.log("🚀 ~ file: lab.js:216 ~ 9e4", 9e4)
    console.log("🚀 ~ file: lab.js:217 ~ 9e5", 9e5)
    console.log("🚀 ~ file: lab.js:218 ~ 7e10", 7e10)
    console.log("🚀 ~ file: lab.js:219 ~ 864e5", 864e5)
    console.log("🚀 ~ file: lab.js:220 ~ 1/0", 1 / 0)
}
{
    let a = 5;
    let b = "Value";
    let c = 9e30;
    let d = 9e100000;
    console.log("🚀 ~ file: lab.js:225 ~ isNaN(a*b)", isNaN(a * b))
    console.log("🚀 ~ file: lab.js:225 ~ NaN==NaN", NaN == NaN)
    console.log("🚀 ~ file: lab.js:225 ~ NaN===NaN", NaN === NaN)
    console.log(`🚀 ~ file: lab.js:225 ~  isNaN(${b})  ${isNaN(b)}`)
    console.log(`🚀 ~ file: lab.js:225 ~ isNaN(${a})  ${isNaN(a)}`)
    console.log(`🚀 ~ file: lab.js:225 ~ isFinite(${a})  ${isFinite(a)}`)
    console.log(`🚀 ~ file: lab.js:225 ~ isFinite(${b})  ${isFinite(b)}`)
    console.log(`🚀 ~ file: lab.js:225 ~ isFinite(${c})  ${isFinite(c)}`)
    console.log(`🚀 ~ file: lab.js:225 ~ isFinite(${d})  ${isFinite(d)}`)


}

console.log("=================================================================");
{
    console.log("🚀 ~ file: lab.js:281 ~ Arrow functions")
    // ** Arrow functions
    // ? Three functional behavior of Arrow function
    // ** "this" object does not work with arrow function
    // ** "arguments" object does not work with arrow function
    // ** Cannot use "new" to call arrow function

    const printS = (s) => {
        console.log("🚀 ~ file: lab.js:248 ~ printS ~ s", s)
    }
    printS(100)
    const printSS = ss => {
        console.log("🚀 ~ file: lab.js:252 ~ printSS ~ ss", ss)
    }
    printSS(200)

    const sum = (a, b) => a + b;
    console.log("🚀 ~ file: lab.js:257 ~ sum", sum(2, 4))
    const thisCheckArrowFn = (a) => {
        console.log("🚀 ~ file: lab.js:259 ~ thisCheckArrowFn ~ thisCheckArrowFn", this)
    }
    thisCheckArrowFn(999)
    const thisCheckNormalFunction = function (a) {
        console.log("🚀 ~ file: lab.js:262 ~ thisCheckNormalFunction ~ thisCheckNormalFunction", this)
    }
    thisCheckNormalFunction(999999);


    (
        (z) => {
            console.log("🚀 ~ file: lab.js:272 ~ z IIFE", z)
        }

    )(100);
    let y = 10;
    (
        (y) => {
            console.log(y)
        }
    )(y)
}
console.log("=================================================================");
{
    console.log("🚀 ~ file: lab.js:286 ~ Closure ");
    // ** Closure 
    // **
    console.log(` JavaScript, a closure is a function that has access to variables in its outer lexical scope, even after the outer function has returned.

    This means that a function can access variables from its surrounding scope, including variables that are no longer in scope or have been garbage collected.
    
    Closures are created when a function is defined inside another function and has access to variables in the outer function. The inner function maintains a reference to the variables in the outer function, keeping them alive even after the outer function has returned.
    
    Closures are commonly used in JavaScript for data privacy, encapsulation, and creating factory functions. They are also used in asynchronous programming to capture variables and maintain state across asynchronous calls.`)


    const outer = function () {
        let x = 10;
        const inner = function () {
            console.log("🚀 ~ file: lab.js:289 ~ inner ~ inner");
            x = x - 1;
            return x;
        }
        return inner;
    };

    const innerFn = outer();
    console.log("🚀 ~ file: lab.js:306 ~ innerFn", innerFn());
    console.log("🚀 ~ file: lab.js:307 ~ innerFn", innerFn());
    console.log("🚀 ~ file: lab.js:308 ~ innerFn", innerFn());
    console.log("🚀 ~ file: lab.js:309 ~ innerFn", innerFn());
    console.log("🚀 ~ file: lab.js:310 ~ innerFn", innerFn());

}
console.log("=================================================================");
{
    console.log("🚀 ~ file: lab.js:318 ~ currying")

    const x = (a) => {
        return (b) => {
            console.log("🚀 ~ file: lab.js:322 ~ y ~ a+b", a + b);
            return a + b;
        }

    }
    console.log("🚀 ~ file: lab.js:319 ~ x ~ x", x(7)(6));

    const sum = a => b => a + b;
    console.log("🚀 ~ file: lab.js:328 ~ sum", sum(7)(8));
    const multiplication = a => b => c => a * b * c;
    console.log("🚀 ~ file: lab.js:330 ~ a=>b=>c=>a*b*c", multiplication(7)(8)(9));
    console.log("🚀 ~ file: lab.js:330 ~ a=>b=>c=>a*b*c", multiplication(1)(2)(3))

}

console.log("=================================================================");
{
    console.log("🚀 ~ file: lab.js:339 ~ Iterator");

    let arr = [4, 5, 6, 7, 8];
    for (const i of arr) {
        console.log("🚀 ~ file: lab.js:341 ~ i", i)
    }
    let itr = arr[Symbol.iterator]();
    // console.log("🚀 ~ file: lab.js:344 ~ itr", itr)
    console.log("🚀 ~ file: lab.js:345 ~ itr", itr.next());
    console.log("🚀 ~ file: lab.js:346 ~ itr", itr.next());
    console.log("🚀 ~ file: lab.js:347 ~ itr", itr.next());

    let obj = {
        a: {
            x: 3,
            y: 5
        },
        b: 34,
        c: {
            value1: {
                d: 32,
                f: 232
            },
            value2: 1234
        }
    };
    obj[Symbol.iterator] = function* () {
        yield this.a;
        yield this.b;
        yield* this.c;
    };
    const iterator = obj[Symbol.iterator]();
    console.log("🚀 ~ file: lab.js:369 ~ iterator", iterator.next());
    console.log("🚀 ~ file: lab.js:370 ~ iterator", iterator.next());
    console.log("🚀 ~ file: lab.js:371 ~ iterator", iterator);


}
console.log("=================================================================");
{
    console.log("🚀 ~ file: lab.js:379 ~ Generators");
    console.log("'Generators' can help to pause & resume the code  ");

    const genFn = function* () {
        console.log("First call");
        yield "yieldValue"; //*  returning value and its optional
        console.log("Second call");
        yield;
        console.log("Finished");
    };

    const genObject1 = genFn();
    const a = genObject1.next();
    console.log("🚀 ~ file: lab.js:389 ~ a", a);
    const b = genObject1.next();
    console.log("🚀 ~ file: lab.js:391 ~ b", b)
    genObject1.next();
    const genObject2 = genFn();
    for (const iterator of genObject2) {
        console.log("🚀 ~ file: lab.js:396 ~ iterator", iterator)
    }
    console.log("***********************");
    const genObject3 = [...genFn()];
    console.log("🚀 ~ file: lab.js:399 ~ genObject3", genObject3)

    function * genFn1(){
        console.log("🚀 ~ file: lab.js:403 ~ *genFn1 ~ genFn1")
    }
    function * genFn2(){
        console.log("🚀 ~ file: lab.js:403 ~ *genFn1 ~ genFn1")
    }
}

console.log("=================================================================");
{

    function generateNewFolderName(existingFolders) {
        // Write your code here
        if (existingFolders.indexOf("New Folder") == -1) {
          return "New Folder";
        }
        let folderName ;
        for (let index = 2; index <= existingFolders.length; index++) {
            if(existingFolders.indexOf(`New Folder (${index})`) == -1){
              folderName = `New Folder (${index})`;
              break;
            }
        }
        if(folderName){
            return folderName;
        }
        folderName = `New Folder (${existingFolders.length+1})`;
        return  folderName;
        
        
      }
      
      // Should print: "New Folder (2)"
      console.log(generateNewFolderName(["New Folder (2)", "New Folder (3)", "New Folder (4)"]));

}



console.log("🚀 ~ parseInt:", parseInt("1013", 2))
console.log("🚀 ~ parseInt:", parseInt("1013"))



const fish = ["Lion", , "Angel"];
console.log("🚀 ~ fish:", fish)

const myList = ["home", , "school", ,];
console.log("🚀 ~ myList:", myList)
const myList1 = [
    "home",
    "school",
  + "hospital",
  ];
  console.log("🚀 ~ myList1:", myList1)
  console.log(3.2e10)

  console.time('loopFor')
  for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }
  console.timeEnd('loopFor')
  
  console.time('doWhileLoop')
  let j = 0;
do {
  j += 1;
  console.log(j);
} while (j < 5);

console.timeEnd('doWhileLoop')
console.log(square(5)); // 25

function square(n) {
  return n * n;
}




var a = 'static';
function f2() {
    var a = 'dynamic';
    
    f1();
 }
 



f2();
function f1() {
    console.log("🚀 ~ f2 ~ a:", a)
}

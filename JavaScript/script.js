// console.log("Hello Js")
// console.log(Window)
// console.log(this)


//?dynamic
// console.log("Task 1")
// console.log("Task 2")
// console.log("Task 3")
// console.log("Task 4")

//?Weakly and loosely type
// console.log("Statement 1"); console.log("Statement 2");

//! variable

//& var
// only declaration --> possible
// var a;

// only initialization --> possible
// a = 100

// declaration & initialization (same) --> possible
// var a = 100;

// re-declaration --> possible
// var a = 288;

// re-initialization --> possible
// a = "string"

//& let
// only declaration --> possible
// let abc;

// only initialization --> possible
// abc = 100;

// declaration & initialization (same) --> possible
// let a = 10000;

// re-declaration --> not possible
// let a = 23;

// re-initialization --> possible
// a = "string"

//& const
// only declaration --> not possible
// const abc;

// only initialization --> not possible
// abc = 100;

// declaration & initialization (same) --> possible
// const a = 10000;

// re-declaration --> not possible
// const a = 23;

// re-initialization --> not possible
// a = "string"


// ! Data type

// & primitive (immutable):

// ?number
// let no = 1345
// console.log(no);
// console.log(typeof no);


// ?string  
// let str = "Isha"
// console.log(str);
// console.log(typeof str);


// ?boolean
// let bool = true
// console.log(bool);
// console.log(typeof bool);


// ?null
// let xyz = null;
// console.log(xyz);
// console.log(typeof xyz);


// ?undefined
// let data;
// console.log(data);
// console.log(typeof data);


// ?bigInt
// let bigData = 1345n
// console.log(bigData);
// console.log(typeof bigData);

// ?Symbol
// let sym1= Symbol("hii");
// let sym2=Symbol("hii");
// console.log(sym1 == sym2);
// console.log(sym2 == sym1);
// console.log(typeof sym1);
// console.log(typeof sym2);

//& Non primitive (mutable):

// ?function
// function abc(){
//   console.log("function");
// }
// abc()
// console.log(typeof abc); //function

// ?array
// let arr = []
// console.log(arr);
// console.log(typeof arr); //object

// ?object
// let obj =  {}
// console.log(obj);
// console.log(typeof obj); //object

// !TypeCasting

// ? Implicit typecasting

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);

// console.log(typeof "str");
// console.log(typeof str);
// console.log(typeof new String("abc"));

// console.log(2 + 2);
// console.log(2 + "2");
// console.log(2 * "2");
// console.log(2 + "hii");
// console.log(2 * "asd");
// console.log(typeof(2 * "asd"));
// console.log(typeof(typeof(2 * "asd")));
// console.log(typeof JSPIDERS);
// console.log(typeof String);
// console.log(typeof Array);
// console.log(typeof Object);
// console.log(typeof String());
// console.log(typeof Array());
// console.log(typeof Object());

// ? Explicit typecasting

// console.log(typeof NaN);
// console.log(Number(true));
// console.log(Boolean(1));
// console.log(String(false));

// ! Scopes: Accessibility and availability of variable inside js program is known as scopes of variables

// & The scope of any variable is decided based on the two factors:
// & type of variable: i.e. var / let / const
// & position of the variable inside js

// ? Global: If you have declared any variable outside the block and function by using var keyword, then the scope of variable is in the global scope
// var a = 100;

// ? Script Scope: If you have declared any variable outside the block and function by using let and const keywodd then the scope of variable is in the script scope.
// let b = 200;
// const c = 300;

// ? Local Scope/ Function scope: If the variables are declared by either using var , let or const then the scopes of the variables is in the local scope which means variables. 

// debugger 
// function abc(){
//   var a = 100;
//   let b = 200;
//   const c = 300;
// }
// abc()
//   console.log(a);
//   console.log(b);
//   console.log(c);

// ? Block Scope: If the variables are declared by using var  , let and const inside the block. Then only the var variable can be accessible outside the block. Block scope restrict the variable created by using let and const keyword from accessing outside it. 
// {
//   var a = 100;
//   let b = 200;
//   const c = 300;
// }
//   console.log(a);
//   console.log(b);
//   console.log(c);

// ! Question
// var a = 10;

// function abc(){
//   console.log(a);
//   var a = 10000;
//   console.log(a);
//   a++
// }
// console.log(a);
// abc()
// console.log(a);

// ! Decision Statement / Conditional Statement

// ~ falsy values: 0 , false , null , undefined , NaN , "", 0n , -0

// ? if-else
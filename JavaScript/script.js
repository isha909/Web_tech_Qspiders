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

// ? Local Scope/ Function scope: If the variables are declared by either using var , let or const inside a function then the scopes of the variables is in the local scope which means variables can only be accessed within the function. 

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
  // if(""){
  //   console.log("truthy value");
  // }
  // else{
  //   console.log("falsy value");
  // }

// ? else if
// let a = 120;
// let b = 230;
// let c = 345;

// if(a > b && a > c){
//   console.log(`${a} is largest number`);
// }

// else if(b > c && b > a){
//   console.log(`${b} is largest number`);
// }

// else{
//   console.log(`${c} is largest number`);
// }

// ? switch
// let day = "MON";
// switch(day){
//   case "MON":
//     console.log("Monday ");
//     break;
//   case "TUE":
//     console.log("Tuesday ");
//     break;
//   case "WED":
//     console.log("Wednesday ");
//     break;
//   case "THUR":
//     console.log("Thursday ");
//     break;
//   case "FRI":
//     console.log("Friday ");
//     break;
//   case "SAT":
//     console.log("Saturday ");
//     break;
//   case "SUN":
//     console.log("Sunday ");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// ? ternary operator
// let a = 100;
// let b = 300;
// let c = (a > b ? `${a} is greater` : `${b} is greater`);
// console.log(c);

// ! Loops 

// & for 
// for(let i = 0; i <= 10 ; i++){
//   console.log(i);
// }

// & while
// let j = 0;
// while(j <= 10){
//   console.log(j);
//   j++;
// }

// & do-while
// let k = 0;
// do{
//   console.log(k);
//   k++;
// } while(k<=10);

// ! Output methods in JS

// let no1 = parseInt(prompt("Enter number 1"));
// let no2 = parseInt(prompt("Enter number 2"));
// let no3 = (no1 + no2);
// console.log(no3);
// console.log(typeof no1);
// console.log(typeof no2);
// console.log(typeof no3);

// ! Function

// ~ Named function

// function test(a,b){
//   console.log(a+ b)
// }
// test(100,200)

// ~ Anonymous function

// fuction(){
      
// }

// ~ Arrow Function
// let fun = ()=>{
//   console.log("Arrow function")
// }
// fun()

// & property 1
// let fun1 =a=>{
//   console.log(a)
// }
// fun1(100)

// & property 2
// let fun2 = ()=>
//   console.log("Statement 1")
// fun2()

// & property 3
// let fun1 = data => data
// console.log(fun1(1000));

// ~ IIFE Function
// (function(){
//   console.log("IIFE")
// })()

// (()=>{
//   console.log("IIFE")
// })()

// ~ Function with expression
// let ex1 = function(){
//   console.log("Function with expression");
// }

// let ex2 = ()=>{
//   console.log("Function with expression");
// }

// ex1()
// ex2()

// ~ Higher order function
// function HOF(a,b,callback){
//   callback(a,b)
// }
// HOF(100,200,function(a,b){
//   console.log(a+b);  // ~ Callback function
// })

// ~ Recursive function
// function findFact(n){
  // base case
//   if(n==1){
//     return 1
//   }
//   return n * findFact(n-1)
// }
// let res = findFact(5)
// console.log(res);

// ~ Generative function
// function* genFun(){
//   yield "data 1"
//   yield "data 2"
//   yield "data 3"
//   yield "data 4"
//   return "data 5"
// }
// let res = genFun()
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// ~ Pure function
// function pure(a,b){
//   console.log(a*b);
// }
// pure(100,2)
// pure(100,2)
// pure(100,2)

// ~ Impure function
// let count = 1
// function impure(a,b){
//   console.log(a*b*count);
//   count++
// }
// impure(100,2)
// impure(100,2)
// impure(100,2)

// ! Default Parameter
// function abc(a=100, b = 200){
//     console.log(a+b)
// }
// abc()
// abc(500, 500)
// abc(300)

// ! Arguments
// function sum(){
//   console.log(arguments [0]);
//   console.log(arguments [1]);
//   console.log(arguments [0] + arguments [1]);
// }
// sum(100,200)

// ! JavaScript Currying
// function sum(a){
//   console.log("Function 1");
//   return function(b){
//     console.log("Function 2");
//     return function(c){
//       console.log("Function 3");
//       console.log(a+b+c);
//     }
//   }
// }
// let fun2 = sum()
// let fun3 = fun2()
// fun3()

// sum(100)(200)(300)

// & Function Hoisting
// abc()
// function abc(){
//   console.log("Function Hoisting");
// }

// ! String
// ? Literal's Way:
      // let str = "qwertyu"
      // console.log(str)
      // console.log(typeof str)

// ? Literal's way:
      // let str = 'qwertyu'
      // console.log(str)
      // console.log(typeof str)

      // console.log("JS doesn't support OOP's)
      // console.log("This is 'JS' session")

// ? Template literals:
      // let str = `This
      // is
      // JS`
      // console.log(str)
      // console.log(typeof str)

      // let subj = "JS"
      // console.log(`This is ${subj} class`)

// ? Typecasting
      // let str = String(true)
      // console.log(str)
      // console.log(typeof str)

// ~ Methods of string

// let str = "qwertyuio"
// console.log(str.repeat(5))
// console.log(str.includes("Isha"))
// console.log(str.at(4));
// console.log(str.at(-2));
// console.log(str.charAt(3));
// console.log(str.charAt(-3));
// console.log(str.charCodeAt(5));
// console.log(str[0]);

// let name = prompt("Enter your name")
// let phoneNo = prompt("Enter your phone number")
// let pass = prompt("Enter password")
// console.log(name.substring(0,4) + "@" + phoneNo.substring(0,3) + pass.substring(0,2));


// var a = 100
// b = 200
// console.log(a);
// console.log(b);

// ! Array

// ~ Create 
// let arr = [10,20,30,40]
// let arr2 = [1,"abc", true, 123n, null, undefined, Symbol("abc"),function(){console.log("Function")}, ["HTML" ,"CSS" , "JS"], {}]

// ~ Read
// console.log(arr2[1])
// arr2[7]()
// console.log(arr2[8][1])

// ~ Update
// console.log(arr2)
// arr2[4] = "newData"

// arr2[10] = "newData2"
// console.log(arr2);

// ~ Delete
// console.log(arr2);
// delete arr2[0]
// delete arr2[1]
// console.log(arr2);

// ! Methods of array
// & slice
// let arr = [10,20,30,40,50]
// let newArr = arr.slice(1,3)
// console.log(newArr)
// console.log(arr)

// & splice
// let arr = [10,20,30,40,50]
// let newArr = arr.splice(1,0,"newData")
// console.log(newArr)
// console.log(arr)

// & reverse
// let arr = [10,20,30,40,50]
// let newArr = arr.reverse()
// console.log(newArr);
// console.log(arr);

// ~ string reverse 
let arr = "qwertyuioplkdsazxcbnm"
let newArr = arr.split("")
console.log(newArr);
let newArr2 = newArr.reverse()
console.log(newArr2);
console.log(newArr2.join(""));

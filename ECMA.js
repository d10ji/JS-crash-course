//ECMA Script -------> BOOOOOOOOOOOOM


// 1996 ------> 1997 to ECMA 
//                         INTERNATIONL

// adding new feature every year. 
// NEW update to JavaScript. 
// E6 --> 2015 is too famous.--> 



// LET VS CONST vs VAR
//interm of scop
// -------------------------------------------
// var ==> Function scop
// let and const ==> block scop



//interm of regidity
// -------------------------------------------
// var and let ==> can be update later
// const ==> fix and (can't update later)


// function PrintF(){
//     var x = "Datenji";
//     console.log('ouput of outer loop '+ x);
//    if (true){  //for getting block
//         var x1 = "sherpa";
//         console.log('ouput of innnner loop '+ x);
//         console.log("output of innter "+ x1);
//     }
// console.log("output of innter "+ x1);
// }

// PrintF();


//interms of update LET vs VAR vs CONST


// function PrintF(){
//     let x = "Datenji";
//     console.log('ouput before update '+ x);
//    if (true){  //for getting block
//         x = "sherpa";
//         console.log('ouput after update '+ x);
//         }
// }
// PrintF();



// 2. ECMA feature (Templetes literals.)
// Best for string concatination using ` `
// Traditonla concation is booommmmmbastik 
//-------------------------------->

// for (let i = 1; i<=10; i++){
//     let mul = 5
//     console.log(`${mul} x ${i} =  ${mul*i}`);
// }

// ECMA 3. feature. 
// default parameter
// when no of arguments and paramenter is not equal
// followed by order. from left to right
// ------------------------->

// function mul(a=1,b=1,c=1){

//     return a*b*c;
// }
// // not that always default parameter is override by seq.
// console.log(mul(10));
// //so it is much necessary to see the order of arguments and parameter

//------------------------------------------------------------>
//Fat Array function 
// 1st define then call bro 
// sum();
// function sum(){
//     let a=5 , b=20;
//     let sum = a *b;
//     console.log(`sum of given two no. is ${sum}`);
// }

// calling only after defining

// FOR Fat array function 
//sum(); // this is unacceptable for fat array function 
// const sum = () => {
//     let a=5 , b=20;
//     console.log(`sum of given two no. is ${a+b}`);
      
// }
// sum();



// major diff. ---->
// function name is usinf as veriable. 
// fat arrow ==>

//COMBO of tampletes literals and fat array function 
// single line never req. return keyword. 

// let sum = () => `this output is single line output ${(a=2) + (b=3)}`

// console.log(sum());

//------------------------------------------------------------------>

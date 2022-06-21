// FUNCTION
// function defination (Paramenter)
// function sum(a,b){
//     var total = a+b ; 
//     console.log(total);
// }
// //calling

// // var x = 30;
// // sum(x,322); //Arguments

//*Code Reuse : same code for different Arguments. 
//*Code complexity: use to decompose the complexity of code. 

//Function is a group of code whcich can be called anywhere
// in our program. This eliminates the need of writing the same code
// again and again. 


// ---------------------> FUNCTION EXPRESSION 

// function as veriable. 

// var texp = sum(20,20);
//defining variable and initilizing them sometimes particularly
// act as calling function, so only up to this is engough to call
// function.



//function expression 
// function expression 
// only complete after restrun keyword


// function sum(a,b){
//     var total = a+b ; 
//     return(total);
//     }
// // function without return is XXXXXXXX
// // return something to caller. 

// var funExp = sum(10,2);

// console.log('sum of two number passed to function sum '+ funExp);
// console.log("naya line maa hara");

// var sum2 = funExp + 12;
 
// console.log("function as expression ---> variable " + sum2) ;


// Ananymous funtion expression 

// Function with no name
// problem ???? HOW TO CALL


var Ananymous_exp = function(a,b){
        var total = a+b ; 
        return(total);
        }


// call Ananymous fuction by only can be possible
// ananymous funtion variable.(expression)

//console.log('this is call for ananymous function '+ Ananymous_exp(11,12));

var sum2 = Ananymous_exp(10,10) ;
 
console.log("Ananymous function as expression ---> variable " + sum2) ;


//function without name is ananymous


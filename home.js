console.log('hello');
// alert('yoooo');



// variables

var a='somoothie';
console.log(a);


// var age =  prompt('What is your age ?? ');

/*
document.getElementById('someText').innerHTML= age;

*/

//Functions
/*
function greeting(yourname) {
    var name = prompt('What is your name? ');
    //String Concatenation
    var result = 'hello' + ' '+ yourname;
    console.log(result);
}

//calling function
greeting(name);
*/

// How do arguments work in functions?
// how do we add 2 numbers together in a funcions?

//while loop
/*
var num = 0;

while (num<20){
    num +=1;
    console.log(num);
}


//For loop
for(let num=0; num<=20; num++){
    console.log(num);
}
*/

// data types
/*
let name={first:'Jhon', last:'Doe'}; //Object  (dectinory in py)
let b= false; // Boolean 
let groceries = {'apple', 'bannana', 'oranges']; // array (list in python)
*/

// Strings in Javascript (common methods)
/*
let fruit = 'banana';
let morefruit = 'bannan \n apple'
let fruit2= 'banana, apple, orange, blackberry';
console.log(morefruit.length);
console.log(fruit.indexOf('q')); 
//-1 in negative 
console.log(fruit.slice(2,6)); // cutting --> slice
console.log(fruit.replace('an','453')); // 
console.log(fruit.toUpperCase()); // 

console.log(fruit2.split(',')) // split by a comma
console.log(fruit2.split('')) // split by character
// empty --> character
// space --> word
*/


//Array
/*
//let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');
console.log(fruits[2]); //indec 2nd from 0 to n

// fruits[0]= 'paear'
// console.log(fruits)
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// array to string
console.log('to string = ', fruits.toString());
//console.log(fruits.pop()); //pop last index permanently
fruits.push('hotbilli'); //push item in last index
console.log(fruits);
 

let emptyarry = [];
for (let i=0; i<10; i++){
    emptyarry[i]=i+1;
    //emptyarry.push(i+1);
}
console.log(emptyarry);

*/

//object in Javascript
// (dctionary in python)

let student = {
    first_n: 'datenji',
    last_n:'sherpa',
    age: 22,
    height : 5.10,
    //OOP in JS
    studentInfo: function(){
        return this.first_n + '\n' + this.last_n;
    }
};

// console.log(student);
// student.first_n='Rafeh'
student.age++;
// console.log(student);
console.log(student.studentInfo());

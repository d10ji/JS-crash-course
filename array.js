// array. []   list


// --------------------------------------->
// Other programming language Same data Type. 
// JavaScript allows multiple data type. BOOOOM

// var myFriends = ['ramesh',98023420,true, 'sanu','saru','binu'];

// console.log(myFriends[3]);

//------------------------------------------------->
//Array hadling operation 
//--> index --> always start form 0.


//1. Travarsal of an Array
// ---------------------------------------------------------->

// Orignal defination 
// Array class and array are the prototype of this class. 

// var furits = new Array; // this line is not mandatory at all .
// //behind the scene JavaScript automatically handel this. 
 var furits = ['appple', 'orange', 'bannan', 'water melon', 'kiwi'];

// console.log(furits[2]);
// console.log(`the length of given array is ${furits.length}`)
// console.log(`index is always 1 less than length so index = ${furits.length - 1}`)

// ------------------------------->
// accessing arry elements one by one

// for (var i= 0; i <= furits.length-1;i++){
//     console.log(furits[i]);
// }

// //this can easily do by using in 
// for( let elementsIndx in furits){
//     console.log(elementsIndx);
// }

// // accessing directly index of array by elements is too OOOOOOOOOPPPPPPPP
// // two varient elements in ----> gives index
// // elements of ----> gives elements directly.

// for( let elements of furits){
//     console.log(elements);
// }

// ---------------------------------->
// FOR ech loop
// call function for each element in array.
// statement array_name.forEach(function(element, index, array)){
    // body
// }

// furits.forEach(function(element, index, array){
//     console.log(`furits[${index}] = ${element}`);
// });

// can be say combination of in and of
// all elements of array are displayed. 

// FAT arrow funcition can be used. 

// ________________________________________________________________________________

//2. Searching and Filter in an arry  
// ----------------------------------------------------------------------->

// // 2.a) indexOf()
// // array.indexOf(item, start)

// var myFriends = ['san','ramesh',98023420,true, 'sanu','saru','binu','san','sannur'];

// console.log(myFriends.indexOf('san'));



// 3.How to sort and compare an array


// 4. how to insert, add Replace and Delete Elements in Array (CURD)

// insert ----> push  (location at end)

// const animals= ['goat','cow','buffalo','chicken','horse'];
// console.log(`the length before push ${animals.length}`);
// animals.push('giriraj','boelor');
// console.log(animals)

// console.log(`the length after push ${animals.length}`);
// //push method always returns the new length (added value) of array 

// insert -----> unshift() (location at beginning of array)
 

//2. remove / Delete elments ------------------------------>
// pop() method from last elements
// shift() mehtod ----> form staring of array
// const animals= ['goat','cow','buffalo','chicken','horse'];
// console.log(`the length before pop ${animals.length}`);
// animals.pop();
// console.log(animals)
// console.log(`the length After pop ${animals.length}`);


// -------------- chllange time -----------------------------
// const month = ['jan','march','April', 'June', 'July'];

// // 1. Add Dec at the end of an arry ----> push ()
// // 2. What is the retrun value of splice method?
// // 3. update march to March (update)?
// // 4. Delete june form an array?
// console.log(month);
// month.push('Dec');
// console.log( `after adding Dec : ${month}`);

// // update
// // splice(index, Howmany n, 'elements n' )
// var indexmarch = month.indexOf('march',1)
// month.splice(indexmarch,1,'March');
// console.log( `Making march as March : ${month}`);

// // splice is kind of update if we leave elements field then it act as remover

// month.splice(month.indexOf('June'),1)
// console.log( `Deleting june : ${month}`);

// // =============================================================

// ------------< Map(), Reduce(), Filter() >-----------------------

// let numbers=[1,2,3,4,5,6,6,7,3,43,4,554,4,543,4]; 
// mapping method always creates new array 

// let new_numbers = numbers.map((newele, index, warray)=>{
//     return  Math.sqrt(newele)});

// console.log(new_numbers);

// ------------------------------<>---------------------

let arr = [2,3,4,6,8];
// using map this array 

// Ananomus Function and Arrow Functin (FAT);  

// let map_array = arr.map((newEle)=> newEle*2).
// Functin Exapression with Ananous function allwos
// multiple function to be call with single variables.  


// let map_array = arr.map(function (newEle){
//     return newEle*2
// }).filter(function (newEle) {
//     return newEle>10;
// });
// console.log(map_array);


// here, map_array variables calls two nameless fucntion for map and filter.




// ============================< reduce >====================
// let arrqq = [2,3];
// let red_array = arrqq.reduce((accumulator , elements )=>{
//     debugger;
//     return accumulator += elements;
// },1);

// // accumulator can have initial value. 

// console.log(red_array);

// -------------------------- Flatting an array ------------>

// const arr3 = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', ['zone_8']],
// ];

// let fatarray = arr3.reduce((acc , elements) => {
//     return acc.concat(elements)
// });
// console.log(arr3);
// console.log(fatarray);

// //ECMA 2020 says don't use redce for flatten.


var furits = ['appple', 'orange', 'bannan', 'water melon', 'kiwi'];
// uding spread operator 


const new_fuit = [...furits, "alu", 'mewa'];

console.log(new_fuit);  
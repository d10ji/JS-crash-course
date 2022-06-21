// data and time
 // Data objects represents single moment in time
 // in a plate-form independent format.
 // miliseconds 
 // since 1 jan 1970 UTC ; 

//  ================= create Date ========

// let curr_data = new Date();
// console.log(curr_data);

// console.log(new Date().toLocaleDateString()); //Thu Jun 09 2022 23:02:19 GMT+0545 (Nepal Time)
 
// console.log(new Date().toDateString());
// // 6/9/2022
// // Thu Jun 09 2022

// var d = new Date(2022, 11,23,1,3,2,3);
// // 0--- jan
// // 11 -- DEC
// console.log(d.toLocaleDateString());

const curr_data = new Date();

console.log(curr_data.getFullYear());
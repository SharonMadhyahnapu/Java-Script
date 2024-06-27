                                        //SCOPES//
//-----------------                                        
//1.FUNCTIONAL SCOPE |(VAR)
//-----------------

// var abc=10; 
// function xyz(){
// var abc=20;
// console.log(abc);
// }
// xyz();
// console.log(abc);

// var abc=10; 
// var abc=30
// function xyz(){
// var abc=20;
// console.log(abc);
// }
// xyz();
// console.log(abc);

// var abc=10; 
// function xyz(){
// var abc=20;
// console.log(abc);
// }
// xyz();
// abc=30;
// console.log(abc);

// var abc=20;
// function xyz(){
//     console.log(abc);      //if variable is not inside function then it will search for global/parent scope
// }
// abc=30;
// xyz();

// var abc=20;
// function xyz(){              //HOISTING
//     console.log(abc);        //******undefined*****(var abc;console.log(abc);abc=25;)
//     var abc=25;    
// }
// abc=30;
// xyz();


//---------------
//2.BLOCK SCOPE  |(LET,CONST)
//---------------

// let abc=10;
// {
//     let abc=20;                   //re initialization & *DECLARATION* possible inside the block
//     console.log(abc);
// }
// console.log(abc);

// let abc=10;
// {                               
//     let abc;                   //re initialization & *re-DECLARATION* possible inside the block
//     console.log(abc);
//     abc=30;
// }
// console.log(abc);

// let abc=10;
// {
//      abc=20;
//     console.log(abc);                //over riding,(closures)
// }
// function fn(){
//     abc=40;
//     console.log(abc)
// }
// fn();
// console.log(abc);

// let abc=10;
// {
//     console.log(abc);             //Cannot access 'abc'(declaration) before initialization(NO HOISTING DONE==undefined)
//    let abc=20;
// }
// console.log(abc);



//CONDITIONAL STATEMENTS:-
//-----------------------------------
// const abc=10;
// if(abc>5){
//     const abc=20;
//     console.log(abc);
// }


// const abc=10;
// //const abc=16;   //(else)
// if(abc>10 && abc<=15){
//     console.log("value is <=15");
// }else if(abc<=10){
//     console.log("value is <=10");
// }else{
// console.log("value is above 15");
// }


//TERNARY OPERATOR:-
//---------------------------

// const abc=undefined;                                       //undefined is null while null is evaluated to 0
// abc ? console.log(abc):console.log("check value")         //0,-ve,false(2nd statement)

// const abc=undefined;
// abc===undefined ? console.log(abc):console.log("check value")   //1st statement

// const abc=true;
// abc ? console.log(abc):console.log("check value")       //+ve,true(1st statement)


//SWITCH CASE:-
//----------------------------
// switch("two"){
//     case "one":
//     console.log("this is one");
//     break;
//     case "two":
//     console.log("this is two");
//    // break;
//     case "three":
//     console.log("this is three");
//     break;
//     case "four":
//     console.log("this is four");
//     break;
//     default:
//         console.log("this is not one");
// }


// for(var n=0;n<5;n++){
// console.log(n);
// }
// console.log(n);


// for(let n=0;n<5;n++){
//  console.log(n);
//     }
//  console.log(n);


//  for(const n=0;n<5;n++){
//  console.log(n);
//     }
//   //console.log(n);

                                              //  EXAMPLES
// console.log(a);
// var a = 3;
// fn();
//  function fn (){
//      var a= 0;
//      console.log(a+1)
//  var a=1;
// for(a;a<5;a++){
//     // console.log(a)             //Cannot access 'a' before initialization
//     let a= 2;
//     console.log(a);
// }
// if(true){
//     console.log(a);
// }
// }
// var b = 10;
//  console.log(a);


// function outerfn() {
//     let a =25
    
//     return function (){
//         console.log(a)
//     }
// }

// let innerfn = outerfn();
// // console.log(innerfn);
// innerfn();


// //var a=60;
// function outerfn() {
//     let a =25
//     console.log(a);
//     return function (){
//         console.log(a)
//     }
// }

// let innerfn = outerfn();
// // console.log(innerfn);
// innerfn();
// console.log(a);



// let a=10;
// function fn(){
// for(let a;a<15;a++){
//     console.log(a);
// }
// var a;
// console.log(a);
// }
// fn();
// console.log(a);



// console.log(5==="5");

// var a;
// console.log(a);
// a=20;
// if(a=60){
//     let a=30;
// console.log(a);
// }
// var a=90;
// console.log(a);

// let a;
// if(true){
//     //let a;
//     console.log(a);               //Cannot access 'a' before initialization.............,undefined
//    let a=40; 
// }
//  a=90;
// console.log(a);


// console.log(n);                     //  var=undefined ,let=Cannot access 'n' before initialization
// var n=10;


console.log(a+b);
let c=90;
var a=200;
console.log(a,b,c,a+b+c);
var b=900;
console.log(a,b,c,a+b+c);
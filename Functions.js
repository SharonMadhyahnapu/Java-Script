                                            //FUNCTIONS//
             //................................................................................................//
                                    //3.FUNCTION EXPRESSION
                                //--------------------------
// //console.log(fn);              //cannot access fn before initialization(const will ot hoisted)
// fn();                       //cannot access fn before initialization
// const fn=function (){
//     console.log("this is a functional expression");
// };
// //fn();                      //this is a functional expression


// console.log(fn);   //undefined(var will get hoisted.....const wont)
// fn();               //we cannot invoke a undefined only we can invoke a function(fn is not a function)
// var fn=function (){
//     console.log("this is a functional expression");
// };
// //fn();         //this is a functional expression


                                      //4.NAMED FUNCTION EXPRESSION
                                //-------------------------------------
// //fn();
// const fn=function abc(){
//     console.log("I'm named Expression");
// }  ;
// fn();                             


// //fn(10,20);
// function fn(a,b){
//     console.log(a,b);
// }
// function fn(a,b,c){
//     console.log(a,b,c);
// }
// const fn=function(a,b){
//     console.log(a,b);
// }
// fn(10,20,30);


// function fn(a,b){
//     const res=a+b;
//   //  console.log(res);
//     return res;
//    // console.log(res);
// };
// const sum=fn(10,20);
// //console.log(sum);


                                        //firstorder function//

// function abc(fn){                   //fn parameter take xyz as argument
// fn();                             //invoking xyz( )function
// }   ;
// function xyz(){
// console.log("checked");
// }   ;
// abc(xyz);                               //fn parameter take xyz as argument                           


// let x= "how are you";
// function fun(x){
//     console.log(x)
//     return "I'm fine"
// };
// console.log(fun(x))




                                            //HigherOrder functiom
                                   //.....................................
// let a=20;
// let b=30;
// function abc(x,y){
// return x+y;
// };
// console.log(abc(a,b));

// let a=10;let b=20; let c=30;
// function abc(x,y,z){
//     var a=[x,y,z]
//     return a;
// }
// console.log(abc(5,4,3));


// let a=10;let b=20;let c=30;

// let rea=(function abc(x,y,z){
//     return function pqr(){
//         console.log("this is inner fun");

//     }
// })()()
// console.log(rea)


// function abc(jii){
//     console.log("hi") 
//     jii() 
     
// }
// function xyz(){
// console.log("hello")

// }
// abc(xyz);


// function abc(kkk){
//     console.log("hii")
//     kkk()
//   return kkk;
// }

// function xyz(){
//     console.log("hello")
// }
// abc(xyz)();
// res()


// function abc(eee){
//     console.log("this is abc fun")
//     let a=()=>{
// console.log("hii")
//     };
//     eee()
//     return a
// };
// function xyz(){
//     console.log("this is xyz fun")
// };
// let b=abc(xyz)
// b()


                                            //EXAMPLES--calculator//

// function cal(a,b,abc){
// let res=abc(a,b)
// return res;
// }
// function add(a,b){
//     return a+b;
// }
// let ans=cal(a,b,add);

// console.log(ans);




// function cal(a,b,abc){
// let x=abc()
// return x;
// }
// function add(a,b){
// console.log(a)
// return a+b;
// }
// function sub(a,b){
//   return a-b;  
// }
// function mul(a,b){
//   return a*b;  
// }
// function div(a,b){
//  return a%b;   
// }
// console.log(cal(10,20,add));




//abc();
// console.log(abc)
// var abc=function (){
//   console.log("heloo");
// }
// abc();

                                            //ForEach//

//let marks=[23,33,44,55];
// function log(index,value){
//     console.log(index,value);
// }
// marks.forEach(log);

// function forEach2(fn){
//     var size=marks.length;
//     for(var index=0;index<size;index++){
//         fn(marks[index],index)
//     }
// }
// forEach2(hi);

// for(var i of marks){
//     console.log(i,marks[i]);
// }
// for(var i in marks){
//     console.log(i,marks[i]);
// }



// var arr=[1,3,4,5,9,11,22]
// var index=-1;
// for(var i in arr){
//     if (arr[i]===9){
//         index=i;
//         break;
//     }
// }
// console.log(index);



// function abc(fn){

//     return fn;
// }

// function xyz(){
// console.log("hii")
// }

// let a=abc(xyz);
// a();




function abc(){
  console.log("hoo");
  function xyz(){
    console.log("hii");
  }
}
abc();


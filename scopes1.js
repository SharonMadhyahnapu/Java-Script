// let a =10; 
//     var b = 20; 
      
//     function showDetails() { 
//       let a = 30;
//       var b = 50; 
//       console.log(a); 
//       console.log(b);  
//     } 
      
//     showDetails(); 
//     console.log(a);  
//     console.log(b); 


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
//  console.log(a);


// let greet = function () { 
//   const name = "GeekforGeeks";  
  
//   return { 
//     introduce: function () { 
//       console.log(`Hello, This is ${name} Learning!`); 
//     } 
//   }; 
// }; 

// let obj =greet();
// console.log(obj.introduce())
  



// console.log((function fn(){
//   console.log("inside functon")
//   return "returning result";
// })());


let greet = (function () { 
  const name = "GeekforGeeks"; // Private variable 
  
  return { 
    introduce: function () { 
      console.log(`Hello, This is ${name} Learning!`); 
    }, 
  }; 
})(); 
  
console.log(greet.name); //undefined 
  
// Hello, This is GeekforGeeks Learning! 
greet.introduce();



// function x(){
//   let a=90;
//   for(; true; ){
//     let x=90;
//   }
// }
// console.log(x);


// let x=90;
// if(true){
//   if(false){
//     let y=100;
//   }else{
//     console.log(x+y);
//   }
// }


let x=90;
if(true){
  if(true){
    let y=100;
    if(true){
      console.log(x+y);
    }
  }
  
}


// let x=90;
// if(true){
//   if(true){
//     let y=100;
//   }
//   if(true){
//     console.log(x+y);
//   }
// }
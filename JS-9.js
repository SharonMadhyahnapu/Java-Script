

// function checkwith(...res){
//     console.log(this.name,...res);
// }

// const obj={
//     name:"sharon",
//     age:22
// };
// //checkwith();                   //global obj
// checkwith.call(obj,"madhyahnapu","naidu");
// checkwith.apply(obj,["madhyahnapu","naidu"]);
// const bindd=checkwith.bind(obj,"madhyahnapu","naidu");
// bindd();


// const obj={
//     name:"sharu",
//     age:22, 
//    fn: function (){
//         console.log(nwobj.name);
//     }
// };
// const nwobj={
//     name:"tim",
//     age:23,
// }

// obj.fn();


// const obj1={
//     name:"sharu",
//     age:22, 
//    fn: function (){
//         console.log(this.name);
//     }
// };
// const nwobj1={
//     name:"tim",
//     age:23,
// }

// obj1.fn.call(nwobj1);




// const abc={
//     name:"sharu",
//     fn:function(){
//         const obj={
//             fn2:()=>{
//                 console.log(this);
//             },
//         };
//         obj.fn2();
//     }
// };
// abc.fn();



//  const abc={
//         name:"sharu",
//         fn:()=>{
//             const obj={
//                 fn2:()=>{
//                     console.log(this);
//                 },
//             };
//             obj.fn2();
//         }
//     };
//     abc.fn();





//this
//...........................
// Array.prototype.mymap=function(){
//     console.log(this);
// }

// let brr =[1,2,3,4];

// brr.mymap() 








                                                    //POLYFILLS//
                                        //..................................//


//8.Some(any one element is true returns true)

// function fn(arr){
//  const Boolean= arr>4;
// return  Boolean;
// }
// console.log(arr.some(fn));
// console.log(arr);

// const arr=[10,2,6,4,12];  
// Array.prototype.mysome=function(fn){
// let a;
//   for (let index = 0; index < this.length; index++) {
    
//     a= fn(this[index]);

//     if(a){
//         return  a;
//     } 
//   }
//   return a;
// };
// function fn(arr){ 
//    return arr>11;
//    }
// console.log(arr.mysome(fn));
// console.log(arr);



//9.push

// let array1 = [1, 2, 3];
// let array2 = [4,5,6]

// // Using push() with rest operator
// array1.push(...array2);

// console.log(array1);



// arr=[1,2,3,4,5];
// arr.push(100,20,30);
// console.log(arr);



// const arr=[1,2,3,4,5];
// Array.prototype.mypush=function (...fn){
// for (let index = 0; index < fn.length; index++) {
//       this[this.length]=fn[index]
        
// }
// console.log(this)
// return this.length;
// };

// console.log(arr.mypush(100,99));


//10.every


 //const arr=[1,4,6,9,12];
// function fn(ele){
//     return ele<10;
// }

// console.log(arr.every(fn));  

// Array.prototype.myevery=function (fn){

// for (let index = 0; index < this.length; index++) { 
   
//       if(fn(this[index])){
      
//       } else{
//         return false;
//       }
// }
// return true;
// };
// function fn(ele){
// return ele<15;
// }
// console.log(arr.myevery(fn));




//11.concat

 const arr=[1,2,3,4];
// let res=arr.concat([123,33],4);
// console.log(res);
// console.log(arr);

// Array.prototype.myconcat=function(arr){
//    let res=[...this,...arr]
//     console.log(res);
//     };
 
// arr.myconcat([123,33],4);
// console.log(arr);



// console.log("1");
// setTimeout(()=>{
//     console.log(3);
//     setTimeout(()=>{
//         console.log(2);
//     },400)//500,300
// },200)//300
// setTimeout(()=>{
//     console.log(4);
// },500)//550
// console.log(5);



//ALL GLOBAL FUNCTION EXECUTION:

// console.log(3);
// function abc(){
//     console.log("hii");
// }
// abc();
// console.log("heloo");


// function abc(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
// console.log("hii this is settimeout");
//         },2000)
//     })
// };
// function xyz(){
//     console.log("this is xyz started");
//     let result=abc();
//     console.log(result);
//     console.log("this is xyz ended"); 
// }
// xyz();


// function abc(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
// //console.log("hii this is settimeout");
// res("this is settimeout")
//         },2000)
//     })
// };
// function xyz(){
//     console.log("this is xyz started");
//     let result=abc();
//     console.log(result);
//     console.log("this is xyz ended"); 
// }
// xyz();

// function abc(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
// console.log("hii this is settimeout");
// //res("this is settimeout")
//         },2000)
//     })
// };
//  function xyz(){
//     console.log("this is xyz started");
//      abc();
//     console.log("this is xyz ended"); 
// }
// xyz();





//  function abc(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
// //console.log("hii this is settimeout");
// res("this is settimeout")
//         },2000)
//     })
// };
// async function xyz(){
//     console.log("this is xyz started");
//     let result=await abc();
//    console.log(result);
//     console.log("this is xyz ended"); 
// }
// xyz();
 
class Example {
     asyncMethod() {
        
        let r= new Promise(resolve => setTimeout(resolve, 5000,"hello"));
        // console.log(r);
        return r
    }
}

 async function main() {
    const instance = new Example();
    
    // let res= instance.asyncMethod();
    // // return res
    // console.log(res);
}
main().then(re=>console.log(re))

// console.log(main());
    


//ALL GFE BUT QMT WILL EXECUTE IN QMTFUNCTION

// function f(){
//     console.log(2);
// }
// console.log(1);
// queueMicrotask(f);
// console.log(3);

//function res(){
    //1.mutate the status of the promise pending to fulfillled
    //2.add the successLister(function/method) into microtask queue
//}


// let prom1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res();
//     },3000)
// });
// console.log(prom1);//pending




// setTimeout(()=>{
//     console.log("after one sec");
// },1000)
// console.time("xyz");
// for (let index = 0; index < 10e9; index++) {
    
// }//global execution 1st
// console.timeEnd("xyz");



// let prom1=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res();
//         },3000)
//     });
    
//     console.time("xyz");
    
// for (let index = 0; index < 10e9; index++) {
    
// }
//  console.timeEnd("xyz");
//  console.log(prom1); 



//2.add the successLister(function/method) into microtask queue

// let prom1=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res();  //2(register for time of 3sec)
//         },3000)
//     });
//     function successCallback(){
//         console.log("Inside resolve listener");
//     }
//     prom1.then(successCallback)  //3
//     console.log(prom1);  //1
//     // prom1.then(()=>{//4 after the wait time 3sec
//     //     console.log("sus");
//     // })

//2:21:56
// class Prom{
//     constructor(executor){
//         this.state="pending";
//         executor(this.resolve,this.reject)
//     }
//     resolve=()=>{
//         console.log("inisde resolve method");
//         this.state==="pending"&&(this.state="fullfilled")
//         if(this.successCallback){
//             queueMicrotask(()=>{
//                 this.successCallback();
//             })
//         }
//     }
//     reject=()=>{
//         this.state==="pending"&&(this.state==rejected)
// if(this.errorCallback){
//     queueMicrotask(()=>{
//         this.errorCallback();
//     })
// }
//     }
//     then =(successCallback)=>{
//         console.log("inside then method");
//         this.successCallback=successCallback;
//     }
// catch=(errorCallback)=>{
//     this.errorCallback=errorCallback;
// }
// }

// let p=new Prom((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },3000)
// })
// p.then(()=>{
//     console.log(p);
//     console.log("successcallback method");
// p.catch(()=>{
//     console.log("failure");
//     console.log("errorCallback");
// })
// })





// function fetch(){
//     let prom=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("data loaded after 3s");
//         rej();
        
//     },3000)
// })
// return prom;
// };
// let prom=fetch()
// prom.then(()=>{
//     console.log("success");
// })
// .catch(()=>{
//     console.log("failure");
// })



// let prom=new Promise((res,rej)=>{
//     setTimeout(()=>{
// //       //  res({name:"aravind"})
// let data=[{
//     name:"laptop",
//     price:220000,
//     available:"true"
// },{
//     name:"jeans",
//     price:2000,
//     available:"true",
// }
// ]
// rej(data)
//     },3000)
// })

// // prom.then((data)=>{
// //    console.log(data);
// //     console.log("success listener");
// // })
// .catch((data)=>{
//     console.log("error callback");
//     console.log(data);
// })

//...................................................................???????????????????????????????????????????????????????????????????????????????


// function makeNetworkCall(){              //assume this is in chrome website and dont know what is inside the function
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const responseData=[
//             "mumbai",
//             "hyd",
//             "bnglr",
//             "delhi",
//             "warangal"
//         ]
//         res(responseData)
//     },2000)
// })

// }

// //write a code to make network call and display the received cities data in the UI
// const container=document.getElementById("cities-container")
// function appendDataOntoUi(citiesList){
//     citiesList.forEach(city => {
//         const p=document.createElement("p")
//         p.innerText=city;
//         container.appendChild(p);
//     });
// }
// let prom=makeNetworkCall(res)  //this will return a promise
// prom.then((data)=>{
//     appendDataOntoUi(data)
// })



//9th programmm
// class Test{
//     constructor(executor){
//         this.state="pending";
//         executor(this.res,this.rej);
//     }
//     res=()=>{
//         this.state="fulfilled";
//     }
//     rej=()=>{
//         this.state="failure";
//     }
// }

//1st way of exector:

// function executor(res,rej){
//     res();
// }

//2nd way of executor:

// const executor=((res,rej)=>{
//     res();
// })
//  let obj=new Test(executor)
// res();
// console.log(obj.state);

//3rd way
//let obj=new Test(executor) at executor place only directly we can use call back fun as below
// let obj=new Promise((res,rej)=>{
//     res();
// })
// obj.then(()=>{
//     console.log(obj);
// })





let p=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("aravind");
    },2000)
})
let x=p.catch((data)=>{
    console.log(data);
    return "sharon";
})
setTimeout(()=>{
    console.log(x);
},3000)
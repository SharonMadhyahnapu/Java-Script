// const obj={
//     fname:"sharon",
//     lname:"madhyahnapu",  //------>#21
//     age: {
//         a:"sdasd"
//     }
// }
// const entry=Object.entries(obj);
// console.log(entry);
// for(let [fkey,val] of entry){
//     console.log(fkey,val)
// }


// let arr=["hello","hi"]

// let o3={
//     name:"ameuth",
//     age:24
// }
// let {sue,age}=o3;
// let[hello,hi]=arr;


// let o1={...obj};

// o1.age.a="amruth";

// console.log(obj.age.a)


// // console.log(obj["fname"]);

//  let arr=["sharon", "madhyahnapu",22]


// // for(let i in arr){

// //     console.log(arr[i]);

// // }


// //for _of
// // for(let i of obj){
// //     console.log(i);
// // }

// let a=Object.entries(obj);
// console.log();

// let b=Object.keys(obj);
// console.log(b)


// const obj1={
//     fname:"sharu",
//     lname:"madhy"
// }
// let {fname,lname}=obj1
                                        //Destructuring



// // let {fname,lname,age}=obj
// // console.log(fname,lname,age);

// // const entry=Object.entries(obj);//[["fname","sharon"],["lname","madhyahnapu"],["age","22"]]
// // for(let [key,value] of entry){
// //     console.log(key,value);
// // }

// let arr=Object.keys(obj);
// for(let i of arr){
// console.log(i);
// };

// let [ab]




// const obj={
//     fname:"sharon",
//     lname:"madhyahnapu",
//     age:22
// };

// let a= Object.entries(obj)

// let b= Object.fromEntries(a);

// console.log(b);

// let {fname,lname,age} = obj;
// // let lname =obj.lname;
// // let age = obj.age;
// console.log(fname)


// let arr=Object.values(obj);
// let [aa,bb,cc] = arr;
// console.log(aa,bb,cc);






                                           // Prototype
                                      //.....................
// const arr=[1,2,3,4]
// arr.forEach((value,index,arr)=>{
//      console.log(value,index,arr)
// }  );



// let a=10;
// let b=a;
// console.log(b)
// console.log(a);
// a=5;
// console.log(a);
// console.log(b);

let obj=[
     {name:"amruth",age:26},
     {name:"amruth",age:25},
     // {name:"amruth",age:23}
]
let res = obj.reduce((acc,val) => acc.age+val.age )
console.log(res);
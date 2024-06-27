                        //PROMISES

// const promise=new Promise((res,rej)=>{
//    //res("sucessfull");
//     rej("successfull")
// }) ;
// console.log(promise);                              
// promise.then((res)=>console.log("resolved"+res)).catch((rej)=>console.log("reject"+rej))
// .finally(()=>{console.log("check finally")});



function FetchData(p){
return new Promise((res,rej)=>{
   res(`${p}  FetchData`);
})
}
function FetchMoreData(p){
return new Promise((res,rej)=>{
    res(`${p} fn FetchMoreData`)                     //${p}=ffn FetchData
})
}
function FetchEvenMoreData(p){
    return new Promise((res,rej)=>{
        res(`${p} fn FetchEvenMoreData`)            //${p}=ffn FetchData fn FetchMoreData
    })
}
function FetchEvenBigData(p){
    return new Promise((res,rej)=>{
        res(`${p} fn FetchEvenBigData`)             //${p}=ffn FetchData fn FetchMoreData fn FetchEvenBMoreData
    })
}

FetchData("ffn").then((r)=>{
    return FetchMoreData(r);
})
.then((r) => {
    return FetchEvenMoreData(r);
  })
  .then((r) => {
    return FetchEvenBigData(r);
  })
  .then((r) => console.log(r));                          //ffn FetchData fn FetchMoreData fn FetchEvenBMoreData fn FetchEvenBigData

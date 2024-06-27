// function fetch(p,cb){
//  //const res=`fetchdata ${p}`;
// const res=" fetchdata "+ p;
// cb(res);
// }
// fetch("fn",(res)=>{
// console.log(res);
// })

                                         //CALLBACKHELL

function Fetch(p,cb){
    const res=`${p} fetchdata `;
    cb(res);
    }
    function FetchMoreData(p,cb){
        const res=`${p} fn FetchMoreData`;
        cb(res);
    }
    function FetchEvenMoreData(p,cb){
const res=`${p} fn FetchEvenMoreData`;
cb(res);
    }
function FetchEvenBigMoreData(p,cb){
const res=`${p} fn FetchEvenBigMoreData `;
cb(res);
}
Fetch("fn",(res)=>{
    FetchMoreData(res,(Moreres)=>{
        FetchEvenMoreData(Moreres,(EvenMoreres)=>{
            FetchEvenBigMoreData (EvenMoreres,(EvenBigMore)=>{
                console.log(EvenBigMore);
            })
        })
    })
 });




       
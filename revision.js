// let a= (b)=>{
// let str="sharon chetta moham";
//      let c=()=>{
//         console.log(`this is second  ${str}call back` );
//         return "this is data call back"
//     }


// b(c)
// }



// a(b)
// let data=;

// let data=fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => json)

      
// console.log(data);
      
async function fet(){
    let p=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let ans=await p.json()
    console.log(ans);
   console.log("datafetched");
   }
   fet()
//VAR-ES5,Functional scope
//redeclaration is possible
var a=10;
var a=20;
console.log(a);

//re initialization is possible
var b=10;
b=30;
console.log(b);

//initialization before declaration possible
c=40;
var c;
console.log(c);

//LET-ES6,BLOCK SCOPE
//redeclaration is NOT possible
            // let d=10;
            // let d=20;
            // console.log(d);

//re initialization possible
   let d=10;
   d=50;
   console.log(d);     

//initialization before declaration not possible  
    e=60;
    let e;                          //Cannot access 'e' before initialization
    console.log(e);


//CONST-ES6,BLOCK SCOPE 
//redeclaration is NOT possible
            // const f=10;
            // const f=20;
            // console.log(d);  
            
//re initialization NOT possible
const f=10;
f=70;                                   //Assignment to constant variable.
console.log(f);     

//initialization before declaration possible
                // g=90;
                // const g;

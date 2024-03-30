

// representis an indefinete number of paramerts 
// packs argument into an array 

let a =1;
let b =2;
let c =3;
let d =4; 
let e =1;


/* 
console.log (sum1(a,b));
function sum1(){
    return a + b ; 
}



console.log (sum2(a,b,c));
function sum2(){
    return a + b +c;
    
}




console.log (sum3(a,b,c,d));
function sum3(){
    return a + b +c +d ; 
}



console.log (sum4(a,b,c,d,e));
function sum4(){
    return a + b +c +d +e ; 
} */


console.log (sum(a,b,c,d,e)); // indefinate numbers in paramter instead of doing it manually like above

function sum(...numbers){
    let total = 0 ; 
    for(let number of numbers){
        total += number
    }
    return total
}
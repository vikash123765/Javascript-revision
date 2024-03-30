// nested loop = loop inside a loop 

let symbol = window.prompt("enter a ymbol to use")

let rows = window.prompt("enter numbher of rows") 
let columns = window.prompt("enter number of columns")


for(let i= 1; i <= rows ; i+=1 ){
   
    for(let j= 1; j<= columns ; j+=1 ){
       document.getElementById("myrectangle").innerHTML += symbol;
        
    }
document.getElementById("myrectangle").innerHTML += "<br>";
    
    }
    
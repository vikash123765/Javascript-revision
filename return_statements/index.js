// return = returns a value back to place where you invoked a functions 


let area; 
let widht;
let height; 



widht  = window.prompt("Enter you widht");

height  = window.prompt("Enter you  height") 


area = getArea(widht,height);


console.log("The area is: ", area)

function getArea(widht,height){


 
    return    widht * height; 

}
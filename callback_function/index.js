// callback = a function passed as an argument to aother function
// assures that a fuction wont run until a task is completed



/* let total = sum(2,3);
displayFunctionDOM(total)


function sum(x,y){
    let result = x+y;
    return result
}  */

sum(2,3 , displayFunctionDOM);

function sum(x,y,callBack){
    let result = x+y;
   callBack(result);
}


function displayFunctionConsole(output){
    console.log(output)
}


function displayFunctionDOM(output){
document.getElementById("my-label").innerHTML = output ;
}
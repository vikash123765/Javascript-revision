// vaiable scope is where a variable is accessable

// let = variables is limited to clock scope 

// var = variables are elimitided to a function 

let name ="Vkash"; // entriee program has acess to it because it is decleared outside it is a globl variable. // it is not changing windows property of name 

var name1 = "vikash2"; // this changes the window property it can mess with your program

doSomething(); // var cant escape function 

function doSomething(){
for(var i =1; i <=3; i +=1){
    //console.log(i)
}

}


/* for(var i =1; i <=3; i +=1){
    //console.log(i)
}
 */

console.log(i) // dont work when let NED VAR  can escape curly braces 



 
let a ;

let b;

let c;


//a =window.prompt("enter side a")
//a = Number(a)


//b =window.prompt("enter side b")
///b = Number(b)

//c = Math.pow(a,2 ) + Math.pow(b,2 );

//c = Math.sqrt(c)

//console.log("side c" + c)


 
document.getElementById("SubmitButton").onclick = function(){


        a = document.getElementById("textboxA").value;
    a = Number(a)


    b = document.getElementById("textboxB").value;
b = Number(b)


c = Math.pow(a,2 ) + Math.pow(b,2 );
c = Math.sqrt(c)

document.getElementById("labelc").innerHTML = "side C " + c 


}
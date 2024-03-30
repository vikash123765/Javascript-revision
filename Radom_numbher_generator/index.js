
//basic dice progrma

 let x
let b
let c 
document.getElementById("rollbtn").onclick= function(){
   
 x=Math.floor(Math.random() * 6)+1;

 b=Math.floor(Math.random() * 20)+1;

 c=Math.floor(Math.random() * 30)+1;


 document.getElementById("labelx").innerHTML= x;
 

 document.getElementById("labelb").innerHTML= b;
 

 document.getElementById("labelc").innerHTML= c;
}
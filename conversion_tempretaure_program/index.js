
document.getElementById("submit-button").onclick = function (){
 let temp ;
 if(document.getElementById("c-button").checked){
        temp = document.getElementById("text-box").value; 
        temp= Number(temp);
        temp = toCelsius(temp);
        document.getElementById("temp-display").innerHTML = temp + "c";
 }else if((document.getElementById("f-button").checked)) {
    temp = document.getElementById("text-box").value; 
    temp= Number(temp);
    temp = toFarh(temp);
    document.getElementById("temp-display").innerHTML = temp + "f";

 }else{
    document.getElementById("temp-display").innerHTML = "select the unit";
 }
     

   
}



function toCelsius(temp){
    return (temp -32 ) * (579)


}


function toFarh(temp){
    return temp * 9 / 5 +32 
}
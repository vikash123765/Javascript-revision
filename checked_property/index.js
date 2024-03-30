document.getElementById("mybtn").onclick =  function(){
 
 let checkedOrNot = document.getElementById("mycheckbox");

 let visacardbtn = document.getElementById("visabtn");
 let mastecardBtn = document.getElementById("mastercardbtn");
 let swedbankBtn = document.getElementById("swedbankbtn");
    
 if(checkedOrNot.checked == true){

    console.log("you have subsribed")

 }

else{
    console.log("you have not subsribed")

}

if(visacardbtn.checked){
    console.log("you choosed visa card payment")
}else if(mastecardBtn.checked){
    console.log("you choosed master card payment")
}else if(swedbankBtn.checked){
    console.log("you chose sweddbak card payment  ")
}else{
    console.log("no payment method was selected")
}

}
// how to accept useer input 


//let username = window.prompt("what is your name? ")

//console.log(username); 



// html version 

let username;


document.getElementById("myButton").onClick = function(){
    
    username=document.getElementById("myText").value;


   
   
    document.getElementById("myLabel").innerHTML ="Hello" + username;
}
    console.log( username)



    /// no working  user input is not showing in console 
const answer = Math.floor(Math.random() * 10 + 1);  

let guesses = 0;


document.getElementById("submit-button").onclick = function(){
    let guess =document.getElementById("guess-field").value;
    guesses +=1


if(guess == answer){
    alert(`${answer} is the right number. It took you; ${guesses} guesses`)
}else if (guess < answer){
    alert("to small")
}else{
    alert("to big ")
}
}
// array.Filer() = crates a new array of all elemnts that pass the test provided by a function 


let ages = [12,34,54,56,22,45];

let adults = ages.filter(checkAge);

adults.forEach(print)


function checkAge(element){
    return  element >= 18 ;   // creates a new array of elemtn that pass the test 
}


function print(element){
    console.log(element)
}

// to chech if value matches any case sataments more efficient then many if eelse statemtn 

let grade = 40;  

switch(true){
    case grade >= 90 : console.log("you did great :A ")
    break;

    case grade >= 80 : console.log("you did pretty good: B ")
    break;

    case grade >= 70: console.log("you did good : C ")
    break;
    
    case grade >= 60: console.log("you did ok: D ")
    break;

    case grade >= 50: console.log("you passed: E ")
    break;

    case grade < 50 : console.log("you did failed: F ")
    break;

    default: console.log(grade,"is not a letter graede")
    
}

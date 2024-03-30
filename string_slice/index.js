
// extract section of string and returns it as new string


let fullName ="Vikash Kosaraju ";


let firstName;

let lastName;

//lastName = fullName.slice(6)

//firstName = fullName.slice(0,6)

lastName = fullName.slice(fullName.indexOf(" ") +1)   // check strings after space

firstName= fullName.slice(0,fullName.indexOf(" ") )   // checks strings before strings 


console.log(firstName);
// an array made of an array 

let fruits = ["apple","banan","kiwi","mango"]


let veg = ["brussel","tomato","cucumber","radish"]

 let meat = ["pork","chicken","beef","lamb"]


 let grocerylist = [fruits,veg,meat]

 grocerylist[0][1] = "mango" // changing value in array 

 for(let list of grocerylist){
    for(let food of list){
        console.log(food)
    }
 }
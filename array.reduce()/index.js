/// array reduce reduces an array to a single value 


let prices =[2,34,65,23,33];

let total = prices.reduce(checkPrice);

console.log(`the total price is ${total} `)   /// sums up an array of values 

function checkPrice(total,element){
    return total + element; 
}
let userName= "vikash";
let items= 2;

let total=23;





/* console.log(`hello ${userName}`)
console.log(`you have this ${items}  many items in you cart`)
console.log(`total will be ${total} dollars`)
 */

 



let text = `

hello ${userName} <br>
you have this ${items}  many items in you cart <br>
total will be ${total} dollars <br>
`;

//console.log(text);

document.getElementById("mylabel").innerHTML = text;
// array.forEach == executes an provided call back function once for each array alement 


let students = ["vikash","anders","zingi"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element,index,array){   // sneding this ito callback

array[index]= element[0].toUpperCase() + element.substring(1);


}

//console.log(students[1])

function print (element){   // sending this to call back
console.log(element)
}
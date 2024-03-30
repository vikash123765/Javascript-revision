// toLocalString = returns a string with a language sensitive representation of this number 

// number.toLocalString(locale,options)


let myNum=123456.234;

//myNum = myNum.toLocaleString("en-US")
//myNum = myNum.toLocaleString("hi-IN")
//myNum = myNum.toLocaleString("de-DE")




myNum = myNum.toLocaleString("en-US",{style:"currency:",currency: "USD"}); // can use percent or celius in style and so on 

console.log(myNum)


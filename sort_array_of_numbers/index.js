let grades = [100,90,80,85,195]

grades=grades.sort(ascendsort)

grades.forEach(print)

function decendsort(x,y){
    return x-y;
    

}


function ascendsort(x,y){
    return y -x;
    

}

function print(element){
    console.log(element)
}
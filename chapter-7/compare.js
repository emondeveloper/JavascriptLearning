
var obj1 = {
    a: 20,
    b: 30,
    c: 40
}
var obj2 = {
    a: 20,
    b: 30,
    c: 40
}
// comparing Two Object
if(obj1.a === obj2.a && obj1.b === obj2.b && obj1.c === obj2.c){
    console.log(true)
}else{
    console.loh(false)
}

// comparing Two Object //JSON Stringfy Method Comparing Two Object
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
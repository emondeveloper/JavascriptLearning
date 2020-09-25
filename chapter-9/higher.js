// function add(a,b){
//     return a+b
// }
// function manipulate(a,b, func){
//     var c = a + b 
//     var d = a - b
//     function multiply(){
//         var m = func
//         return c*d*m
//     }
//     return multiply
// }
// var multiply = manipulate(3,4, add)
// console.log(multiply()) 

function add(a,b){
    return a+b
}
function manipulate(a,b, func){
        var c = a+b
        var d = a-b
    function multiplay(){
        var m = func(a,b)
        return c*d*m
    }
    return multiplay
}
var multiplay = manipulate(3,4, add)
console.log(multiplay())
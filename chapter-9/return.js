function greet(msg){
    function greeting(name){
        return msg + ', ' + name + ' ! '
    }
    return greeting
}
var gn = greet('Good night')
var gm = greet('Good Morning')
console.log(gn('HM Nayem'))
console.log(gn('Emon Islam'))

function base(b){
    return function(n){
        var result = 1
        for(var i = 0; i < b; i++){
            result *= n
        }
        return result
    }

}
var power10 = base(10)
console.log(power10(2))
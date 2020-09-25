// var n = 0
// while(n < 10){
// console.log('Emon Islam')
//  n++
// }

// var isRunning = true
// while(isRunning){
// var rand = Math.floor(Math.random() *10 +1 )
// if(rand === 9){
// console.log('Winner Winner Chicken Dinner')
// isRunning = false
// }else{
//     console.log('you have got '+ rand + ' . ')
// }
// }

var isRunning = true
while(isRunning){
var randomNum = Math.floor(Math.random()*10 + 1)
if(randomNum === 9){
console.log('Winner Winner chicken Dinner ' + randomNum)
isRunning = false
}else{
    console.log('You Have got '+ randomNum)
}
}
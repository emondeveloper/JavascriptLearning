
while(true){
var randomNum = Math.floor(Math.random()*10 + 1)
if(randomNum === 9){
console.log('Winner Winner chicken Dinner ' + randomNum)
break
}else{
    console.log('You Have got '+ randomNum)
}
}

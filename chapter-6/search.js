var arr = [1,2,3,4,5,7,10,97,51,334,9,97,98,33]
var find = 10
isFound = false
for(var i = 0;i < arr.length;i++){
    if(arr[i] === find){
console.log('Data found at index '+ i)
    isFound = true
        break
    }
}
if(!isFound){
    console.log('Data Not Found')
}
var arr = [1,2,3,4,5,6,7,8]
// var filterArr = arr.filter(function(value){
//     // return value % 2 === 0
//     // return value % 2 === 1
//     // return value > 4
//     // return value < 8
// })
// console.log(filterArr)

function myFilter(arr,cb){
        var newArr = []
    for(var i =0; i < arr.length; i++){
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}
var evenNum = myFilter(arr,function(value){
    return value % 2 === 0
})
var oddNum = myFilter(arr,function(value){
    return value % 2 === 1
})

console.log(evenNum)
console.log(oddNum)
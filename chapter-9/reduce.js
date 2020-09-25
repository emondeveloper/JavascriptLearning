var arr = [1,2,3,44,5,6]

//    var myReduce = arr.reduce(function(prev,current){
//         return prev + current
//     },10)
//     console.log(myReduce)

//     var max = arr.reduce(function(prev,current){
//         return Math.max(prev,current)
//     },0)

//     console.log(max)

//     var min = arr.reduce(function(prev,current){
//         return Math.min(prev,current)
//     })
//     console.log(min)


function myReduce(arr,cb,acc){
    for(var i = 0; i < arr.length; i++){
        acc = cb(acc,arr[i])
    }
    return acc
}
var sum = myReduce(arr,function(prev,current){
    return prev + current
},arr[0])


var maxNum = myReduce(arr,function(prev,current){
    return Math.max(prev,current)
},arr[0])


var minNum = myReduce(arr,function(prev,current){
    return Math.min(prev,current)
},arr[0])


console.log(sum,maxNum,minNum)
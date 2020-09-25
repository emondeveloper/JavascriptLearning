var arr = [1,2,3,24,5,6,7,8,22]

// var arrFind = arr.find(function(value){
//     return value === 24
// })
// console.log(arrFind)


// var arrFindIndex = arr.findIndex(function(value){
//     return value === 24
// })
// console.log(arrFindIndex)

// function myFind(arr,cb){
//     for(var i = 0; i < arr.length; i++){
//         if(cb(arr[i])){
//             return arr[i]
//         }
//     }
// }


//var result = myFind(arr,function(value){
//     return value === 24
// })
// console.log(result)

function myFind(arr,cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return i
        }
    }
}

var myIndexFind = myFind(arr,function(value){
    return value === 24
})
console.log(myIndexFind)
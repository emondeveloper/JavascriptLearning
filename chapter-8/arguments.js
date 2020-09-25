// function add(){
    
// }
// note function () প্যারা মেটার এ input Data দেওয়া যায়
//  function ()এর মধ্যে variable দেওয়া যায় / কিন্তূ এখানে function এর ক্ষেত্রে var সহ দেওয়া যায় না শুধু variable এর নাম দিলে ই হবে সে atomatic var add করে নিবে যেমন 
//function(a,b) এখানে a একটা ভ্যারিয়েবেল b একটা ভ্যারিয়েবেল 

// function add(a, b){
//  var result = a + b
//  console.log(result)
// }

// add(50,77)
// add(55,44)
// add(88,66)

// var arr1 = [1,2,3,43]
// var arr2 = [1,21,33]
// var arr3 = [1,42,39]
// var sum1 = 0
// var sum2 = 0
// var sum3 = 0

// for(var i = 0; i < arr1.length; i++){
//     sum1 = arr1[i]
// }
// console.log(sum1)

// for(var i = 0; i < arr2.length; i++){
//     sum2 = arr2[i]
// }
// console.log(sum2)


// for(var i = 0; i < arr3.length; i++){
//     sum3 = arr3[i]
// }
// console.log(sum3)

//**** argument Function *****//
// var arr1 = [1,2,3]
// var arr2 = [1,55,34]
// var arr3 = [1,25,37,25]

// function someOfArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// someOfArray(arr1)
// someOfArray(arr2)
// someOfArray(arr3)

function test(a,b,c){
    // console.log(arguments)
    // console.log(JSON.stringify(arguments))
    // console.log(typeof a)
    for(var i = 0;i < arguments.length; i++){
        console.log(arguments[i])
    }
}

// test()
test(10,20,30)


// arguments এর মাধ্যমে ফ্যাংশন এর মধ্যে আনলিমিটেড ডাটা প্রবাইট করতে পারি । সেক্ষেত্রে ডাটা গুলোর কোন ভ্যারিয়েবল থাকবে না, যেমনঃ
function argmTest (){
    console.log(arguments)
}
argmTest(1,2,3,55,44)
argmTest(1,2,3,55,44,544)

// আমরা এখানে একটি for loop চালিয়ে দেখি 
function argmTest2 (){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
argmTest2(1,2,3,4)
argmTest2(12,22,34)
argmTest2(21,31,41)
var a = argmTest2(1,2,3,4)
var b = argmTest2(12,22,34)
var c = argmTest2(21,31,41)
console.log(a,b)
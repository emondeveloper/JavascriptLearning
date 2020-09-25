// একটা function যখন এই ছয়টা রুলস মেনে চলে তখন সেই function টা কে আমরা firstClass function দাবি করতে পারি।
function add(a,b){
    return a+b
}

 var sum = add 
 console.log(sum(sum(9,5)))
 console.log(typeof sum)
// (১ম) টা হলো একটা function একটা variable এ stored স্টোর করা যাবে।

var arr = []
    arr.push(add)
    console.log(arr)
    console.log(arr[0](5,4))
//(২য়) টা হলো একটা array কে  ইলিমেন্ট আকারে ও stored স্টোর করা যাবে।


var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7,9))
 //(৩য়) টা হলো একটা object এর ভিতরে ও একটা function stored স্টোর করতে পারি।


 setTimeout(function(){
    console.log('I have Created Function')
 },5000)
 //(৪র্থ) একটা function এর মধ্যে ও একটা function তৈরি করতে পারি like inner function


function add(a,b){
    return a+b
}
function multyTestFun(a,b,func){
        var c = a+b
        var d = a-b
    function multyPlay(){
        var m = func(a,b)
        return c*d*m
        }
        return multyPlay
}
var multyPlay = multyTestFun(2,9,add)
console.log(multyPlay)
//(৫ম) একটা function আমরা ইচ্ছা করলে arguments আকারে pass পাস করতে পারি।

 //(৬ষ্ট)একটা function আমরা ইচ্ছা করলে arguments আকারে pass পাস করতে পারি। আবার arguments আকারে return করতে পারি।
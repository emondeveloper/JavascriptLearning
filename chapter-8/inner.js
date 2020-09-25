// inner funcution বা nasted function আমরা যেমন টা একটা for loop এর ভিতরে আরেকটা for loop সেই for loop এর ভিতরে আরেক টা for loop ডি-ক্লিয়ার করতে পারি। একটা if condiation এর ভিতরে আরেকটা if condition তার ভিতরে ইচ্ছা করলে আবার for loop তার ভিতরে ও আবার for loop তার ভিতর if condition এভাবে করে আমরা ডি-ক্লিয়ার করতে পারি। যেহেতু এগুলো statement ঠিক তেমনি javascript এ একটা function এর মধ্যে আরেকটা function ডি-ক্লিয়ার করতে পারি।
// যখন ই আমরা একটা function এর ভিতর আরেকটা function ডি-ক্লিয়ার করবো তখন তাকে বলবো inner function

// function something(greet, name){
//     function sayHi(){
//         console.log(greet, name)
//     }
//     sayHi()
// }
// something('Good Morning','Emon Islam')
// note একটা function এর ভিতরে আরেকটা function ডি-ক্লিয়ার করলাম
// note (i) function এর ভিতর function ডি-ক্লিয়ার করলে সেই function এর ভিতর ই তকে কল call করতে হবে তাই ছাড়া function এর ভিতরের সেই function কাজ করবে না । তাই তাকে কল করতে ই হবে যদি function টি কাজ করতে চাই

// function somethingTest(greet,name){
//     function getFirstName(){
//         if(name){
//             return name.split(' ')[0] //এখানে .split(' ')[0]স্পেস দ্বারা টেক্সট কে array তে রুপান্তর করে ফেলে এবং [0] এর মাধ্যমে সেই array এর 0 জিরো নাম্বার index টা return করবে সেই array এর জিরো নাম্বার এর index টা বসে যাবে
//         }else{
//             return ' '
//         }
//     }
//    var message = greet + ' ' + getFirstName()
//    console.log(message)
// }
// somethingTest('Good Morning', 'emon Islam')

function testSomething(greet, name){
    function testGetFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }
    var messege = greet + ' ' + testGetFirstName() 
    console.log(messege)
}
testSomething('Good Morning', 'Emon Islam ')
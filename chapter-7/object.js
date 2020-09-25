//**** Object লিটারেল= এই সিস্টেম কে বলা হয় Object Literal ****//

// var obj = {}
// obj.x = 10
// console.log(obj)
// note কোন ডাটা object এর ডাটা বসাতে হলে var objectName = {এর ভিতর object থাকবে এবং এর ভিতর ডাটা রাখতে হলে DataName:value123 etc,এবং পরবর্তীতে একই নিয়মে ডাটা রাখা যাবে}যেমন  var obj = {a:29,z:50,k:40,etc Data এভাবে রাখা যাবে}
//আর বাইরে থেকে ডাটা ইন্সার্ট করতে হলে যে object এ ডাটা ইন্সার্ট করবো সেই objectName.object এর ভিতরে যে ডাটা আছে সেই DataName = value 1234 etc ডাটা দিতে হবে।যেমন obj.z = 45
// var obj2 = {
//     x: 19,
//     y: 30
// }
// obj2.x = 25 //note এখানে ডাটা ইন্সার্ট হবে যে ডাটা থাকবে তাই replace হয়ে এই ডাটা বসবে 
// obj2.z = 50 // note এখানে নতুন ডাটা ইন্সার্ট হবে 
// console.log(obj2)

//**** Object কন্সট্রাক্টর= এই সিস্টেম কে বলা হয় object constructor ****//
// var obj = Object()
//     obj.a = 20
// console.log(obj)

// var obj2 = new Object()
//     obj2.b = 30
// console.log(obj2)

// var obj = {
//     x: 20,
//     y: 50,
//     z: 40
// }

//*** dot Notaion যেমন console.log(obj.z)
// console.log(obj.x)
// console.log(obj.y)
// // console.log(obj.z)
// console.log(obj.x + obj.z)

//*** array Notation
//  var obj = {
//      x: 20,
//      y:40,
//      z:50
//  }
//  console.log(obj['x'])
//  console.log(obj['y'])
// //  console.log(obj['z'])
// console.log(obj['x'] + obj['z'])

// var show = 'x' //এখানে '' দুই কটেশন এ variable এবং string রাখতে পারি।
// console.log(obj[show])
// Note যখন আমরা জানবো না যে কোন ডাটা বা প্রপাটি নিয়ে কাজ করতে হবে বা explore করতে হবে render করতে হবে console করতে হবে সেইটা যখন জানবো না ভ্যারিয়েবেল variable এর মধ্যে আসবে Dynamic হবে তখন আমরা array Notation Use করবো আর বাকি সব জায়গায় dot Notaion use করবো

//**** update Propeties  ****/
// var obj = {
//     a: 56,
//     b: 66,
//     c: 90
// }
//  obj.a = 60
//  console.log(obj)

//  var userUpdate = ['d']
//     obj[userUpdate] = 70
//     console.log(obj)

//**** remove Propeties ****/

var point = {
    a: 33,
    b: 37,
    c: 40
}
point.a = 35

console.log(point)

point.c = undefined
console.log(point)

// Delete Operator এর মাধ্যমে প্রপাটিস ডিলেট করতে পারি
delete point.c
console.log(point)
// pure function কি ?
// pure function এর দুইটি মেনলি সংজ্ঞাঃ দুইটি সংজ্ঞা ই থাকতে হবে pure function হতে হলে।
//(১ম) টা হলো যদি আপনি একই arguments প্রবাইড করতে থাকেন function টার ভিতরে হাজার বার লক্ষ বার কোটি বার তাহলে সব সময়ের জন্য সে same রিজাল্টা আগে যে রিজাল্ট টা প্রডিউস করেছিলো বা return করেছিলো সেই same রিজাল্টা ই return করবে।
//(২য়) টা হলো এটা দেখার মত কোন side/effect তৈরি করে 
// এটা একটা pure function শুরু
 function sqr(n){
    return n*n
 }
 console.log(sqr(2))
 console.log(sqr(2))
 console.log(sqr(2))
// এটা একটা pure function শেষ

var n = 10
function change(){
    n = 100
}
change()
console.log(n)
// এটা pure function না এই function টা যখন কল হচ্ছে তখন সে বাইরের একটা variable কে change করে দিচ্ছে তাই সেজন্য এটা pure funtion না 

var point = {
    x: 34,
    y: 56
}
function printPoint(point){
    point.x = 100
    point.y = 200
   console.log(point)
}
printPoint(point)
console.log(point)

// তার মানে এই function টি pure function না , কারন ফ্যাংশন এর ভিতরে যা আছে সেগুলোকে কল করছি তাই  বাইরে ও যদি সেই ভ্যারিয়্যাবেল থাকে তাহলে সেই বাইরের ভ্যারিয়েবেল ফ্যাংশন কে change করে দিচ্ছে তাই এটি pure function না 
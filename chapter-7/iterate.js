var obj = {
    x: 30,
    y: 50,
    z: 70
}
// console.log(['x'] in obj)
// console.log(['y'] in obj)
// note: in operater ব্যবহ্যার করে আমরা চেক করতে পারি যে কোন প্রপাটিস আছে 
//স্ট্রিং আকারে প্রপাটিস নাম দিতে হবে। যে কোণ ভাবে দিলে হবে না,অবশ্যই প্রপাটিস এর নেম টা কোন একটা ভ্যারিয়েবল এর ভিতরে থাকে সেক্ষেত্রে ভ্যারিয়েবেল ব্যবহ্যার করতে পারেন 
// যেমনঃ console.log('x' in objএখানে ভেরিয়েবেল) এর মানে হলো x কি in এর মাধ্যমে obj এখানে ভ্যারিয়েবেল এর মধ্যে আছে ।

// for in loop
for(var i in obj){
console.log(i)
console.log(i +': '+ obj[i])
}

// Note: আমাদের বলতে হবে কোন obj এর উপর for in loop টা চালাতে চাচ্ছি।
// for(var i ) এখানে for এর মধ্যে i নামে variable নিতে হবে এই i ইটারেট বা ট্রাভার্স করবে object এর key এর উপর ভিত্তি করে এখানে object এর key গুলো হলো x: y: z: এই x: y: z: চলবে variable i এর  উপর ভিত্তি করে in operator এর মাধ্যমে খুজবে বা সন্ধান করবে object key 

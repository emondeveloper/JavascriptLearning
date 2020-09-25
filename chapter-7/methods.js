var obj = {
    a: 34,
    b: 40,
    c: 60
}
console.log(Object.keys(obj)) // যদি প্রয়জন পড়ে কি কি keys array এর ভিতর আছে দেখতে প্রয়জন হয় তাহলে এই ম্যাথড ব্যবহার করতে হবে । Object.keys(objএখানে অবব্জেক্ট ভ্যরারিয়েবল নামে দিতে হবে)

console.log(Object.values(obj)) // যদি প্রয়জন পড়ে কি কি  values array এর ভিতর আছে দেখতে প্রয়জন হয় তাহলে এই ম্যাথড ব্যবহার করতে হবে । Object.values(objএখানে অবব্জেক্ট 

console.log(Object.entries(obj)) // যদি প্রয়জন পড়ে কি কি  entries array এর ভিতর আছে দেখতে প্রয়জন হয় তাহলে এই ম্যাথড ব্যবহার করতে হবে । Object.entries(objএখানে অবব্জেক্ট 


var obj2 = Object.assign({}, obj)
    obj2.x = 70
    console.log(obj)
    console.log(obj2)
// note: যদি কোন array এবং object কে কপি copy করতে চাই তাহলে Object.assign ম্যাথড দ্বারা কপি করা যায় Object.assign({},objectsNameArrayNameVariable) উদাহরনঃ Object.assign({},obj) এখানে Object.assign method এর ১ম ঘরে থাকবে {} কার্লি ব্র্যাকেট তারপর , কলন চিনহ তারপর থাকবে objectsNameArrayNameVariable যে কোন একটা , ১ম ঘরে ফাকা থাকবে শুধু কার্লিব্র্যাকেট থাকবে {} যেমনঃ Object.assign({},obj)
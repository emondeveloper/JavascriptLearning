function argmTest2 (){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
   return sum
}
//note return statement powerfull statement যে কোন ডাটার ফ্যাংশন ভ্যারিয়েবেল ইত্যাদি যে কোন ডাটা পায় না কেনো সে ডাটার কাজ হয়ে গেলে শেষে আমরা return করতে পারি।
var result = argmTest2(22,55,44,66)
console.log(result)

function person (name,email){
    return{
        name: name,
        email: email
    }
    console.log('I will never be Shown') //return সব সময় নিচে করতে হয় return এর নিচে কোন কোড আর কাজ করবে না তাই রিটার্ন সবসময় নিচে করতে হবে 
}
var p1 = person('Emon Islam' ,'emondeveloper@gmail.com ')
console.log(p1)
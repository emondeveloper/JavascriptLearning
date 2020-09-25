// যদি কোন escope এর ভিতরে বাইরের কোন escope থেকে কোন ডেটা আসে তাহলে সেইটা কে ই আমরা closure বলবো
var b = 10

function a(){
   var x = 15
   return  function (){
       console.log(x)
   }
}
var abc = a()
console.dir(abc)
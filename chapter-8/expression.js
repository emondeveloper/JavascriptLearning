 var addition = function add(a,b){
    return a+b
}
addition(10,30)
var anthor = addition
console.log(anthor(7,8))


// note (i) এখানে ভ্যারিয়েবল এর ভিতরে function de-clearation রাখা যাই তাকে বলা হয় function /expression ফ্যাংশন এর নেমের পরে আমরা add name টি রেখেছি যেমনঃ var addition = function add(a,b){
//     return a+b }

setTimeout(function(){
    console.log('I will call 5 secend')
},5000

)
// note (ii) যখন আমরা কোন function এর নাম দিবো //না তখন আমরা সেই ফ্যাংশন কে বলবো anonimuch /function ফ্যাংশন এর সেই নাম টি স্কিপ skip করতে পারি । অর্থাৎ function এর নাম বাদ দিয়ে শুধু variable এর ভিতর function রেখে সেই ফ্যানশন কে আমরা কল করতে পারি। সেই function এর variable কে কল করলে সেই function কাজ করবে যেমনঃ var addition = function(a,b){
//     return a+b }

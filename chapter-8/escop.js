var a = 'abc'
if(true){
     if(true){
        var b = 'I am B'
     }
}
console.log(a)




function x(){
    function y(){
        var a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()

// // note(i)ভিতর কার innner function থেকে কোন variable  ডি-ক্লিয়ার করলে outer function বাইরে ফ্যাংশন থেকে সেই inner function acccessable এক্সেসেবল পাবে না 
//অর্থ্যাৎ inner function থেকে outter function কোন এক্সেসেস পাবে না

//note (ii) যে parent তার child এর কোন এক্সেস পাবে না কিন্তূ child তার parent এর এক্সেস পাবে। অর্থাৎ outer function তার inner function এর কোন এক্সেস পাবে না 
// কিন্তূ inner function তার outer function এর যত variable,function etc আছে সব গুলোর এক্সেস পাবে।

function test(n){
    function a(){
        return n%3 === 0
    }
    function b(){
        return n%5 === 0
    }
    if(a() && b()){
        console.log(n + ' is divisible  by both 3 and 5')
    }else{
        console.log('bit a valid Number')
    }
}

//  note Golobal function এবং outer function এর এক্সেসেবল সব যায়গা এক্সেস আছে ।
// অর্থাৎ global function, এবং outer function থেকে inner function এক্সেস পাবে 
// কিন্তূ inner function থেকে global function ,এবং outer fumction কোন এক্সেস পাবে না 
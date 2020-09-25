//&& And Operator  // 
// || Or Operator
// ! Not Operator

//  && And Operator
//  A && B 
//(i) true && true = true
//(ii) true && false= false
//(iii) false && true = false
//(iv) false && false = false
// Note(i) যদি A এর ভ্যালু true হয় B এর ভ্যালু ও true হয় তাহলে রিটার্ন করবে true 
// Note(ii) যদি A এর ভ্যালু true হয় B এর ভ্যালু false হয় তাহলে রিটার্ন করবে false
// Note(iii) যদি A এর ভ্যালু false হয় B এর ভ্যালু true হয় তাহলে রিটার্ন করবে false
// Note(iv) যদি A এর ভ্যালু false হয় B এর ভ্যালু false হয় তাহলে রিটার্ন করবে false

// || or Opertator
//  A && B 
//(i) true && true = true
//(ii) true && false= true
//(iii) false && true = true
//(iv) false && false = false
// Note(i) যদি A এর ভ্যালু true হয় B এর ভ্যালু ও true হয় তাহলে রিটার্ন করবে true 
// Note(ii) যদি A এর ভ্যালু true হয় B এর ভ্যালু false হয় তাহলে রিটার্ন করবে true
// Note(iii) যদি A এর ভ্যালু false হয় B এর ভ্যালু true হয় তাহলে রিটার্ন করবে true
// Note(iv) যদি A এর ভ্যালু false হয় B এর ভ্যালু false হয় তাহলে রিটার্ন করবে false

var a = 40
var b = 20
var c = 30
var d = 40
if(a > b && c > d ){
console.log(a + ' এখানে A এর ভ্যালু এবং '+ c + 'C এর ভ্যালু সমান আছে ')
}else{
    console.log(a +' এখানে A এর ভ্যালু এবং '+ c +' C এর ভ্যালু সমান নেই ')
}
if(a > b || c > d ){
console.log(' এখানে A অথবা C এর ভ্যালু বেশি আছে')
}else{
    console.log(' এখানে A এবং C এর ভ্যালু বেশি নেই')
}



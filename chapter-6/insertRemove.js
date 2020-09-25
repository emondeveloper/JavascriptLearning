var arr = [1,3,4,5,67,878,88,9,50,90]
// insert 9 to index 3
// arr[3] = 9
// arr.push(9) 
// arr.unshift(9)
// arr.splice(4,0,9,10)
//(i) note splice function method এর কাজ হলো কোন ডাটা insert এবং Delete করা 
// splice method এর ১ম ঘরে থাকবে কোন ডাটা টি সিলেক্ট করবে এবং ২য় ঘরে থাকবে কোন ডাটা ডিলেট করবে কত ডাটা ডিলেট হবে তার সংখ্যা ,যদি শুন্য দেওয়া হয় ডিলেট এর ঘরে তাহলে কোন ডাটা ডিলেট করবে না আর যদি কোন সংখ্যা দেওয়া হয় তাহলে সেই সংখ্যা পরিমান ডাটা ডলেট করবে, এবং ৩য় ঘরে থাকবে  যে ডাটা insert করতে পারি তাই বসিয়ে দিবো তারপর যত ডাটা insert করবো সব ৩য় ঘরে বসাতে পারবো ,এই হলো Splice Method এর কাজ
// arr.splice(4,1)
// (ii) note splice function method এর কাজ হলো কোন ডাটা insert করতে হলে এই ম্যাথড ব্যবহার করতে হবে arr.splice(4,1)
// এখানে Splice এর প্রথম ঘরে থাকবে সিলেক্ট অর্থ্যাত কোন ডাটা টি insert করবো সেই ডাটার ঘর এর নাম এবং এই ঘর প্রথমে থাকবে। এবনফ ২য় থাকবে যে ডাটা insert করবো তার ঘর অর্থ্যাত ২য় ঘর এ থাকবে insert করবো সেই ডাটা গুলোর নাম
// arr.splice(4,1,44)
// (iii) note splice function method এর কাজ হলো কোন ডাটা insert করতে হলে এই ম্যাথড ব্যবহার করতে হবে arr.splice(4,1,44)
// এখানে Splice এর প্রথম ঘরে থাকবে সিলেক্ট অর্থ্যাত কোন ডাটা টি insert করবো সেই ডাটার ঘর এর নাম এবং এই ঘর প্রথমে থাকবে। এবং ২য় ঘর থাকবে সেই ডাটা insert করবো তার ঘর অর্থ্যাত ২য় ঘর এ থাকবে insert করবো সেই ডাটা গুলোর নাম এবং ৩য় ঘর এ থাকবে আমরা ২য় ঘরে যে ডাটা insert করবো সেই ডাটার ভ্যালু দিতে হবে তাহলে ৩য় ঘরের ভ্যালু যোগ হবে ২য় ঘরে ডাটা insert হবে

//Data Remove
// arr[3] = undefined
// (i) use this function arraname[array number zemon 0,1,2,etc] = undefined
// (i) note এই সিস্টেম মেথড এর মাদ্যমে ডাটা ডিলেট হবে কিন্তূ স্পেস ফাকা জায়গা থেকে যাবে 
// arr.shift()
//Data Remove
// arr.shift()
// (ii) use this function arr.shift()
// (ii) note এই সিস্টেম মেথড এর মাধ্যমে প্রথম ডাটা ডিলেট হবে fast Data Remove হবে ,এই ফ্যানশন ম্যাথড এর মাধ্যমে প্রথম ডাটা ডিলেট/রিমোভ হবে।
// arr.pop()
//Data Remove
// arr.pop()
// (iii) use this function arr.pop()
// (iii) note এই সিস্টেম মেথড এর মাধ্যমে শেষের ডাটা ডিলেট হবে last Data Remove হবে ,এই ফ্যানশন ম্যাথড এর মাধ্যমে শেষের ডাটা ডিলেট/রিমোভ হবে।


// console.log(arr)


var arr = [1,2,3,4,5,6,7,8,9,10,11,12]
arr[5] = undefined 
// data undefined hoye remove hobe kintu data er length dore rakhbe obostan poriborton hobe na jaigar data jaiga thakbe 
console.log(arr)
arr[6] = null 
 // data undefined hoye remove hobe kintu data er length dore rakhbe obostan poriborton hobe na jaigar data jaiga thakbe 
console.log(arr)
arr.splice(3,0,11,12 + ' etc element dewa jabe') // element insert and remove
console.log(arr)
arr.splice(4,1) //remove Data fast ghor e data select 2nd ghor data delete ghor num
arr.splice(5,1,77)//remove and add //ekhane 5 ghor er data 1 er remove hoye 77 add hobe
console.log(arr)
arr.push(9) //last element remove and push element add hobe
console.log(arr)
arr.shift(9) // last element er sathe add hove shift method er value
console.log(arr)
arr.unshift(9) //Fast element er sathe add hobe unshift method er value
console.log(arr)
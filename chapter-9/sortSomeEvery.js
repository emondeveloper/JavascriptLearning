var persons = [
    {
        name: 'Emon',
        age: 23
    },
    {
        name: 'Rahim',
        age: 30
    },
    {
        name: 'Sumon',
        age: 21
    },
    {
        name: 'Tamim',
        age: 11
    },
    {
        name: 'Salam',
        age: 38
    }
]

persons.sort(function(a,b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})

console.log(persons)


var arr = [1,2,3,4,5,67,89,44,33,45,66,88]


// console.log(arr.sort())
// console.log(arr)
arr.sort(function(a,b){
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})
console.log(arr)

persons.sort(function(a,b){
    if(a.age > a.age){
        return 1
    }else if(a.age < a.age){
        return 0
    }
})
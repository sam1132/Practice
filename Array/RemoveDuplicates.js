const numbers = [1, 2, 2,2, 3, 4, 4, 5];
const numCount = {}
let arr =[]
for(let i=0; i<numbers.length; i++){
    let num = numbers[i]
    if(numCount.hasOwnProperty(num)){
        numCount[num] += 1
    }
    else{
        numCount[num] =1
    }
    if(numCount[num]===1) arr.push(num)
}

console.log(arr)
console.log([...new Set(numbers)])
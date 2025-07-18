// Q A function that takes array of numbers and return all positive numbers array
const arr = [1, -2, 3, -4, 5, -6];
const positive = []
const arrPositve = (arr)=>{
 for(let i=0; i<arr.length; i++){
    if(arr[i]>0) {
        positive.push(arr[i])
    }
 }
 return positive
}

console.log(arrPositve(arr))
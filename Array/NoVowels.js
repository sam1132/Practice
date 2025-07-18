// write a function that returns a string without vowels
//solving with inbuilt function
const vowels = ['a','e','i','o','u']
const noVowel = (str)=>{
    let str2 = str.split("")
    console.log(str2)
    let ans=""
    for(let i=0; i<str2.length; i++){
        if(!vowels.includes(str2[i])) ans +=str2[i]
    }
    return ans
}
console.log(noVowel('hello'))

// without inbuilt functions

const noVowel2 = (str)=>{
    let str2 = str.toLowerCase()
    let ans=""
for(let i = 0; i<str2.length; i++){
    if(str2[i] === 'a' || str2[i]==='e' || str2[i]==='o' || str2[i]==='i' || str2[i]==='u') continue;
    else ans +=str2[i]
}
return ans
}
console.log(noVowel2('HELLO'))
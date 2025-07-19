    //  Q check if a string is palindrome or not 
    const str = "madam"
    const arr = ['mam','racecar','hello','apple']
    const checkPalindrome = (str)=>{
        newStr = str.toLowerCase().split("")
        for(let i=0; i<newStr.length/2; i++){
            if(newStr[i] !== newStr[newStr.length-i-1]) return false
        }
        return true
    }

    const inBuilt = (str)=>{
        let original = str;
        let reverse = str.split('').reverse().join('')
        return original === reverse 
    }
    // console.log(inBuilt(str))

    // Q write a function which takes array of strings and return length and the palindromes strings

    let palindromes = []
    // for...of loop is generally prefer for the iterating over the array elements
    for(let word of arr){
        if(checkPalindrome(word)) palindromes.push(word)
    }
console.log(`palindromes words are ${palindromes} and length is ${palindromes.length}`)
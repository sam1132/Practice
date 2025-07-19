const str  = 'the quick brown fox jump over the little lazy dog'

const titleCase  = (str)=>{
        // let newStr ='' (newStr+= word)
        const newStr = str.split(' ').map(word =>{
            return word[0].toUpperCase() + word.slice(1) + " "
        })
        return newStr.join(' ')
}

console.log(titleCase(str))

// the += can be less efficient as strings are immutable in javascript and 
// on every iteration a new string is created  combining result + new word
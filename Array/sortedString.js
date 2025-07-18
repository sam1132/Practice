const arr = ["hello", "bca", "apple", "Car"];
// console.log(arr[0]>arr[1])
const sortStrings = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].toLowerCase() > arr[j].toLowerCase()) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
};

const sortStrings2 = (arr) => {
  arr.sort();
  return arr;
};
//const arr = ["hello", "bca", "apple", "Car"];
//[ 'Car', 'apple', 'bca', 'hello' ]
//because unicode for capital letter words are start from the code 65-90
// and for lower case its start from 97-122
console.log(sortStrings(arr));

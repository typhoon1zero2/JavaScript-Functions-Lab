//Max of 2
const maxOfTwoNumbers = (num1, num2) => {
  // if(x >= y){
  //     return x;
  // }else {
  //     return y;
  // }
  return num1 >= num2 ? num1 : num2; //"elegantly" using the fantastic ternary expression!
};
//console.log(maxOfTwoNumbers(-4, 5));

//Max of 3

const maxOfThreeNumbers = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

//console.log(maxOfThreeNumbers(10,4,7))

//isCharAVowel
const isCharAVowel = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
};
//console.log(isCharAVowel("a"));

//Sum of an array
const sums =[2,4,5]
const sumsArray = (a,b)=> a+b;
//console.log(sums.reduce(sumsArray));

//multiplyArray
const multiplyArray = arr =>{
    let product = 1;
    arr.forEach((num)=>{
        product *= num
    })
    return product
}
console.log(multiplyArray([2,4,5]))
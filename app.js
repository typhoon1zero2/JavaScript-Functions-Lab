/*
JavaScript Functions Lab
*/

/*
1.  maxOfTwoNumbers 
*/
const maxOfTwoNumbers =(a,b)=>{
    if(a>=b){
        return a;
    }else {
        return b;
    }
}
//console.log(maxOfTwoNumbers(10,-9))

/*
2. maxOfThreeNumbers
*/
const maxOfThreeNumbers = (a, b ,c) =>{
    if (a>=b && a>=c){
        return a;
    }else if (b>=a && b>=c){
        return b;
    }else{
        return c;
    }
}
//console.log(maxOfThreeNumbers(-20,-10,6))

/*
3. isCharAVowel
*/
const isCharAVowel =(char)=>{
    const vowels =['a','A','e','E','i','I','o','O','u','U']
    return vowels.includes(char);
}
console.log(isCharAVowel('A'))

/*
4.sumArray
*/
 const sumArray=(arr)=>{
     let sum = 0;
     for(let i=0;i <arr.length; i++){
         sum +=arr[i];
     }
     return sum
 }
 //console.log(sumArray([2,4,5]));

 /*
 5. multiplyArray
 */
const multiplyArray=(arr)=>{
    let multiply = 1;
    arr.forEach((num)=>{
        multiply *=num;
    })
    return multiply;
}
//console.log(multiplyArray([2,4,5]));

/*
6. numArgs
*/

const numArgs = (...numOfArgs) =>{
    return numOfArgs.length;
}
//console.log(numArgs(0,0,1,2,3,5,6,5,1,3,3,3));
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
console.log(maxOfThreeNumbers(-20,-10,6))

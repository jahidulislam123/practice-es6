// function declaration 
function add (num1 ,num2 ){
const sum =num1 +num2;
// or return num1+num2?
return sum;

}

const add2 = function add2 (num1,num2){
    return num1+num2;
}
const add3 =function(num1,num2){
    return num1+num2;
}



const result = add(12,45);
const result2 =add2(12,43);
const result3 =add3(3,5);
// document.getElementById('mt-btn').onclick=function handleEvent(){}


console.log(result,result2);


// arrow function
const add4 = (num1,num2)=>num1+num2;
const result4 =add4(23,43);
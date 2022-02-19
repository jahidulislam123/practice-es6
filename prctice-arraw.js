// prothome ekta normal function likhbo ami 

function add (num1,num2){  
    return num1+num2;
}
const addResult =add(4,5);
console.log(addResult);

// ekhon ami ei same jinish tai arraw function diye korbo vai jan 
//tar age arekta jinish dekhbo ami 
// function name na dileo hobe take annoymous function bole 
const add2 = function add3(num1,num2){
    return num1+num2;
}
const result3 = add2(4,6);
console.log(result3);


const add4 = (num1,num2)=> num1+num2;
const  resulArrow =add4(4,3);
console.log(resulArrow);

// arraw function er vitore jodi perammeter jodi na dei ?

const getName = ()=> 'jahid';
const name =getName();
console.log(name);;


// function add(num1,num2=0){
//     console.log(num2);
//     return num1+num2;
// }
function add(num1,num2){
    // console.log(num2);
    if(num2==undefined){
        num2=0;
    }
    return num1+num2;
}
const result = add(9);
console.log(result);

// function add2(num1,num2,num3){
//     return num1+num2+num3;
// }
// const result2=add2(4,56,5);
// console.log(result2);
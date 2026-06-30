const calc=(a,b,op)=>{

    return op(a,b)
}
const add=calc(7,3,function(num,num1){return num+num1}) //Using function without nane is called anonymous arrow
// above function can also be crated with arrow function to make it more short. below is creating arrow anonymous function
// const add = calc(7, 3, (num, num1) => num + num1);
console.log(add);
const sub=(a,b)=>a-b;
console.log(sub);
result=calc(7,3,sub)
console.log(result);


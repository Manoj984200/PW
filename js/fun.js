function countvovel(str) {
    let count = 0;
    for(const char of str){
        if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
    
    count++;} 

}}

countvovel('aooybfrdvtstcibf')
function add(a,b){
    c=a+b;
    return c;
}
ab=add(78,79)
console.log(ab);
function mul(kl){
    d=kl*10
    return d
}
cd=mul(ab)
console.log(cd);
// Below are some array methods
// Below is forEach function
a=['Akash','Lokesh','Ashok','Kirti','Charu','Manvi']
a.forEach((val) => {
    console.log(val);
    console.log(val.toUpperCase());
    });
//  below is map function * map works like for loop but it can also return values if we want(use return in fun)
let arr=[4,8,9,7]
arr1=arr.map((val1)=>{
    return val1*val1
});
console.log(arr1);
// Filter method( It create array of elements that true for a condition/filter)
ab=[,2,8,9,5,45,67]
let eveno=ab.filter((valu)=>{
    return valu%2==0;
});
console.log(eveno);
// Reduce method (it takes two argument first hold starting value of array 2n holds next value thus we can compare,sum of array and can do many operation by this)
ab=[,2,8,9,5,45,67]
const Gno=ab.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(Gno);
// loop to create a array by inputting values
const readline = require('readline');

const n = readline.createInterface({
    input: process.stdin,
    output: process.stdout})
Ar1=[]
for (let i = 0; i <=n; i++) {
    Ar1[i-1]=i;
    
}
console.log(Ar1);

// Arrow function 
const fun= () => console.log('Hello');
fun()
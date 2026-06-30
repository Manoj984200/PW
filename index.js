let item=[200,4544,454,684,789,237];
let i=0
for(let val of item)
{
    let disc=val/10;
    item[i]=item[i]-disc;
    console.log(`Price after discount is ${item[i]}`);
    i++;
}

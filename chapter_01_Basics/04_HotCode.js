let a=10;
console.log(a);


function add(a,b)
{
    return a+b;
}
let result;
for(let a=0;a<1000000;a++)
{
    result=add(a,a+1);
}

 console.log("After 10000 calls :",result);
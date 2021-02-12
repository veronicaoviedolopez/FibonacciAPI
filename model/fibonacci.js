export async function promiseFibonacciByIndex(num)
{
    try{
        return await getFibonacci(num);
    }
    
    catch(err){
        return err;
    }
}
function getFibonacci(num) 
{ 
    let num1=0,
    num2=1,
    sum,
    i=0; 
    for (i = 1; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    }
    return Promise.resolve(num2); 
}
//Write a JavaScript function to get an array and 
//to read the first element of an array. Check whether it is prime or not. 

let array1=[2,4,8]
console.log(array1[0]);
function testprime()
{
    let n=array1[0];
    if(n===1)
    {
        return false;
    }

else if(n===2)
{
    return true;
} 
else
{
    for (var x=2;x<n;x++);
    {
        if(n%x===0)
        { 
            return false;
        }
        return true;
    }


}}
testprime();

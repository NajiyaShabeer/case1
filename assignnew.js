//Write a Javascript function to get an array and to read the first element of an array.Check whether
// it is prime or not.

function prime(n)
{
    if (n<=1)
    {
    return 'Not prime';
    }

for(let k=2;k<=Math.sqrt(n);k++)
{
 if (n%k===0)
 {
    return ' Not prime';
 }
}
 return 'Yes,it is prime';
}

function CheckFirst(arr)
{
    const f=arr[0];
    return prime(f);
}
const numbers=[7,9,8,3,5,6];
console.log("First item is" + " " + numbers[0]+',' + CheckFirst(numbers));

// Write a Javascript program to find the most frequent item of an array
var array1=[5,6,8,6,6,2,3,6];
var mf=1;
var m=0;
var item;
for (var i=0;i<array1.length;i++)
{
    for (var j=1;j<array1.length;j++)
    {
        if (array1[i]==array1[j])
        m++;
    if (mf<m)
    {
        mf=m;
        item=array1[i];
    }
    }
    m=0;
}
console.log(item+" ( " + mf +"times)");

//Write a Javascript for loop that will iterate from 0 to 15.
//For each iteration,it will check if the current number is odd or even
//display the message to the screen as odd or even

for(var x=0;x<=15;x++)
{
if(x===0)
{
    console.log(x + " " +"is even");
}
else if(x%2===0)
{
    console.log(x + " " + "is even");

}
else
{
    console.log(x + " " + "is odd");
}
}
//Write a Javascript program to find the sum of the squares of the elements of an array

function squaresum(array2)
{
var sum=0;
let i=array2.length;
while(i--)

    sum+=Math.pow(array2[i],2)
    return sum;
}
console.log(squaresum([2,4,6,8,10]))




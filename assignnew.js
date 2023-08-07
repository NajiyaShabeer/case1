

    

    

// Write a Javascript program to find the most frequent item of an array
var array2=[5,6,8,6,6,2,3,6];
var mf=1;
var m=0;
var item;
for (var i=0;i<array2.length;i++)
{
    for (var j=1;j<array2.length;j++)
    {
        if (array2[i]==array2[j])
        m++;
    if (mf<m)
    {
        mf=m;
        item=array2[i];
    }
    }
    m=0;

}
console.log(item+" ( " +mf +"times)");

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


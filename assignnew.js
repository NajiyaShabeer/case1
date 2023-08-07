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
}

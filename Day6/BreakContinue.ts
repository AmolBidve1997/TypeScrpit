//break

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i)
}

//continue

for(let i=1;i<=10;i++)
{
    if(i%2!=0)
    {
        continue;
    }

    console.log(i)
}

for(let i=1;i<=10;i++)
{
    if(i==1|| i==3 || i==5 || i==7 || i==9)
    {
        continue;
    }

    console.log(i)
}
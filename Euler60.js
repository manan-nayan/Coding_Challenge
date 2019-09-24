x=677;
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
while(true)
{
  y=0;
  z=x;
  while(z>10)
  {
    z=z/10;
    y++
  }
    y=Math.pow(10,y+1);
    console.log(x);
    if(test_prime(x) && test_prime((3*y)+x) && test_prime(x*10+3) && test_prime(7*y+x) && test_prime(x*10+7) && test_prime(109*y+x) && test_prime(x*1000+109) && test_prime(673*y+x) && test_prime(x*1000+673))
    {
        console.log(x);
        break;
    }
    x+=2;
}

x=x+792;
console.log(x);
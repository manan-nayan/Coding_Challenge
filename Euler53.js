
var x = 0;
var n = 0;
var r = 0;
// function fact(n, r) {    
//     for(i=n-1; i>n-r; i--)
//     {
//         n=n*i;
//         console.log("n :",n,":",i);
//     }    
//     for(i=r-1;i>1;i--)
//     {
//         r=r*i;
//         console.log("r :",r,":",i);
//     }
//     console.log(n/r);
//     return(n/r);
// }
function product_Range(a,b) {
    var prd = a,i = a;
   
    while (i++< b) {
      prd*=i;
    }
    return prd;
  }
  
  
  function combinations(n, r) 
  {
    if (n==r) 
    {
      return 1;
    } 
    else 
    {
      r=(r < n-r) ? n-r : r;
      return product_Range(r+1, n)/product_Range(1,n-r);
    }
  }

for (n = 23; n <=100; n++) {
    for (r = 1; r%2==0?r<n/2:r<(n+1)/2; r++) {
        if(combinations(n,r)>1000000){
            x=x+n-r-r+1;
            console.log(x);
            break;
        }
    }
}
console.log(x);

angular.module('awesome')
.filter('currencybeautify', function() {   
    
return function(number) {    

var num=Math.round(number);

if(Math.abs(num) >= 1000000000)
  return (num/1000000000).toFixed(1)+'B';
    
else if(Math.abs(num) < 1000000000 && Math.abs(num)>= 1000000)
  return (num/1000000).toFixed(1)+'M';

else if(Math.abs(num)<1000000 && Math.abs(num)>= 1000)
  return (num/1000).toFixed(1)+'K';

else 
  return (num).toFixed(0);

}
})

.filter('pctBeautify', function() {      
      
  return function(number) {          
      
      if(Math.abs(number) <1 )
        return (number*100).toFixed(1)+'%';
      if(Math.abs(number) >= 1)
        return (number).toFixed(1)+'%';

    }
  })


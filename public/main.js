window.addEventListener('load', function () {
  var RightWaVe = document.getElementById('RightWaVe');
  RightWaVe.style.top = 30 + '%';
  var previous = window.scrollY;
  window.addEventListener('scroll', function () {
   
   var way =  window.scrollY > previous ? true : false;
 
   if(way && parseInt(RightWaVe.style.top) > 1) {
    RightWaVe.style.top = parseInt(RightWaVe.style.top) - Math.floor(window.scrollY/100) + '%';
    
   }
   else if (!way && parseInt(RightWaVe.style.top) <= 30) {
    RightWaVe.style.top = parseInt(RightWaVe.style.top) + Math.floor(window.scrollY/100) + '%';
    console.log(RightWaVe.style.top)
   }
  

    previous = window.scrollY;
  }, true);
}, true);


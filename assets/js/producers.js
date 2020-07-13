var popup = document.querySelector('.popup');
var open = document.querySelector('.button_readMore');
popup.style.display = 'none'


open.addEventListener("click",      function() {

    if(popup.style.display == 'none')  popup.style.display = 'block';
    else popup.style.display = 'none'
    
});

  document.getElementById('hider').onclick = function() {
   document.getElementById('hider').hidden = true;
    }
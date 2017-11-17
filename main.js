// #################### GROUP WORK ######################

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

  for(var i=1; i<6; i++){
    var newImage = document.createElement('img');
    newImage.setAttribute('src',"images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function(){
        var newImageSrc = this.getAttribute('src');
        displayedImage.src = newImageSrc;
    }
  }
    
/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
    var btnClass = btn.getAttribute('class');
    if (btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } if(btnClass === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}

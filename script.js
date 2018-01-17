var topNavigation = document.querySelector(".top-navigation");
var btnToggle = document.querySelector(".toggle-btn");
var count = 0;

btnToggle.onclick = toggleMenu;

function toggleMenu(){
    count++;
    if(count % 2 === 0){
        topNavigation.style.display = "none";
    }else{
        topNavigation.style.display = "flex"; 
    }
}

window.onresize = function(){
    var screenW = window.innerWidth;
    if(screenW > 780){
        topNavigation.style.display = "flex";
    }else{
        topNavigation.style.display = "none";
    }
}
function fullscreen() {
    var currentwindow = document.getElementById("mainwindow");
    var fullscreenbtn = document.getElementById("fullscreenbtn");
    
    currentwindow.style.transition = ".15s"
    currentwindow.style.top = "30px"
    currentwindow.style.left = "0px"
    currentwindow.style.width = "calc(100% - 4px)";
    currentwindow.style.height = "calc(100% - 4px)";
    fullscreenbtn.innerHTML = "-";
    fullscreenbtn.onclick = normaldisp;
    setTimeout(function() {
        currentwindow.style.transition = ".unset"
    }, 15);
}    

function normaldisp() {
    var currentwindow = document.getElementById("mainwindow");
    var fullscreenbtn = document.getElementById("fullscreenbtn");

    currentwindow.style.transition = ".15s"
    currentwindow.style.top = "calc(50% - 250px)"
    currentwindow.style.left = "calc(50% - 315px)"
    currentwindow.style.width = "500px";
    currentwindow.style.height = "400px";
    fullscreenbtn.innerHTML = "+";
    fullscreenbtn.onclick = fullscreen;
    setTimeout(function() {
        currentwindow.style.transition = "unset"
    }, 15);
}
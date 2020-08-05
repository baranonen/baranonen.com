function closemainwindow() {
    var currentwindow = document.getElementById("mainwindow");
    currentwindow.style.display = "none"
}

function showwindow(elmnt, window) {
    if (elmnt.classList.contains("focusedicondiv")) {
        var currentwindow = document.getElementById(window);
        currentwindow.style.display = "block";
        highestz = highestz + 1;
        currentwindow.style.zIndex = highestz;
        elmnt.classList.remove("focusedicondiv");
    } else {
        elmnt.classList.add("focusedicondiv")
    }
}

function showmainwindow() {
    var currentwindow = document.getElementById("mainwindow");
    currentwindow.style.display = "block"
} 

function closeaboutme() {
    var currentwindow = document.getElementById("aboutme");
    currentwindow.style.display = "none"
}

function showaboutme() {
    var currentwindow = document.getElementById("aboutme");
    currentwindow.style.display = "block"
} 

function closeprojects() {
    var currentwindow = document.getElementById("projects");
    currentwindow.style.display = "none"
}

function showprojects() {
    var currentwindow = document.getElementById("projects");
    currentwindow.style.display = "block"
} 

function closeskills() {
    var currentwindow = document.getElementById("skills");
    currentwindow.style.display = "none"
}

function showskills() {
    var currentwindow = document.getElementById("skills");
    currentwindow.style.display = "block"
} 

function closeeducation() {
    var currentwindow = document.getElementById("education");
    currentwindow.style.display = "none"
}

function showeducation() {
    var currentwindow = document.getElementById("education");
    currentwindow.style.display = "block"
} 

function closecontact() {
    var currentwindow = document.getElementById("contact");
    currentwindow.style.display = "none"
}

function showcontact() {
    var currentwindow = document.getElementById("contact");
    currentwindow.style.display = "block"
} 

function closefilemore() {
    var currentwindow = document.getElementById("filemore");
    currentwindow.style.display = "none"
}

function closereadme() {
    var currentwindow = document.getElementById("readme");
    currentwindow.style.display = "none"
}

function closeaboutwebsite() {
    var currentwindow = document.getElementById("aboutwebsite");
    currentwindow.style.display = "none"
}

function showaboutwebsite() {
    var currentwindow = document.getElementById("aboutwebsite");
    currentwindow.style.display = "block"
}
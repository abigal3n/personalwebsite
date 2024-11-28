var whtml = document.getElementById("WoodhouseConsole");
var shtml = document.getElementById("SterlingConsole");
const button = document.getElementById("directory_btn");

function swap() {
    var x = document.getElementById("consoleDiv");
    if(x.innerHTML == whtml.innerHTML) {
        x.innerHTML = shtml.innerHTML;
    }
    else{
        x.innerHTML = whtml.innerHTML;
    }
}

button.addEventListener("click", swap);


//have console content be dependent on buttons and what page the user is on
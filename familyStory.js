//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

// ========== controls for the navigation sidebar =============
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}

// ========= controls for the census sliding panel ===========
function openCens(message, details) {
    const bar = document.getElementById("census-details");
    bar.innerHTML = details;
    const space = document.getElementById("imgSpace");
    space.innerHTML = '<img src="https://www.dropbox.com/'+ message + '" width="100%" />';

    document.getElementById("census-pannel").style.width = "100%"; 
}
function closeCens() {
    document.getElementById("census-pannel").style.width = "0";
}

//== response to double-click on pictures, to show zoomed-in version ==
function showDetail(pic) {
    let picture = document.getElementById(pic);
    picture.style.zIndex="4";
    picture.style.opacity="1";
    showCover(0.6);
}

function hideDetail(pic) {
    hideCover();
    var picture = document.getElementById(pic);
    picture.style.opacity="0";
    setTimeout(function() {
        picture.style.zIndex="-3";
    }, 1000); 
}

// === control for semi-transparent cover ===
function showCover(umbra) {
    var screen = document.getElementsByClassName("cover");
    screen[0].style.height="100vh";
    screen[0].style.opacity= umbra;
}
function hideCover() {
    var screen = document.getElementsByClassName("cover");
    screen[0].style.height="0"
    screen[0].style.opacity="0"
}



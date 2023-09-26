//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

// 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
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


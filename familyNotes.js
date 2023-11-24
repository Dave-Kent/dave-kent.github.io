// sets out the notes (formerly census) panel
function setOutNotes(fIndex) {

    let wide = window.matchMedia("(orientation: landscape)");

    let thisFamily = families[fIndex];

    document.getElementById("cs-family").innerHTML = "<b>&#11009;</b> " + thisFamily.familyName;
    document.getElementById("cs-family").href = "./family-tree.html?family=" + fIndex;
    let censusText = "<h1>Censuses</h1>";
    let ncensuses = thisFamily.censuses.length; 
    for(i=0; i<ncensuses; i++) {
        censusText += '<div class="censuses-table">\
         <a class="census-address" href="' + thisFamily.censuses[i].gmap + '">'
          + thisFamily.censuses[i].address + '</a>';
        let ndox = thisFamily.censuses[i].dox.length;
        for(j=0; j<ndox; j++) {
            
            if (wide.matches) {
                censusText += '<div class="open-census wide-census" onclick="openCens(\''
                + thisFamily.censuses[i].dox[j].images.wide;
            }
            else {
                // document.getElementById("notes-zoom-layer").innerHTML = '<img src="' + thisFamily.censuses[i].dox[j].images.zoomed + '" width="100%"/>';
                censusText += '<div class="open-census narrow-census" onclick="narrowOpenCens(\''
                + thisFamily.censuses[i].dox[j].images.narrow + '\',\'' + thisFamily.censuses[i].dox[j].images.zoomed;
            }
            censusText += '\',\'' + thisFamily.censuses[i].dox[j].occupation + '\')">';
            censusText += thisFamily.censuses[i].dox[j].year + '</div>';
        }
        censusText += '</div>';
    }
    censusText += '<div class="additional-notes">' + thisFamily.familyNotes + '</div>';
    document.getElementById("cs-txt").innerHTML = censusText;
}

// ========= controls for the census sliding panel ===========
function openCens(message, details) {
    document.getElementById("census-details").innerHTML = details;
    document.getElementById("imgSpace").innerHTML = '<img src="' + message + '" width="100%" />';
    
    document.getElementById("census-pannel").style.width = "100%"; 
}
function narrowOpenCens(message, thinMessage, details) {
    const bar = document.getElementById("census-details");
    bar.innerHTML = details;
    document.getElementById("imgSpace").innerHTML = '<img id="narrow_pic" src="' + message + '" width="100%" ondblclick="censZoom()"/>\
    <img id="thin_pic" src="' + thinMessage + '" width="0%" ondblclick="censUnzoom()"/>';
    
    document.getElementById("census-pannel").style.width = "100%"; 
}
function censZoom() {
    document.getElementById("narrow_pic").style.width = "0%";
    document.getElementById("thin_pic").style.width = "100%";
}
function censUnzoom() {
    document.getElementById("thin_pic").style.width = "0%";
    document.getElementById("narrow_pic").style.width = "100%";
    
}
function closeCens() {
    document.getElementById("census-pannel").style.width = "0";
}

//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function(){
    // the first function to run is tree(). The first tree to load is given 
    // by the query string, found by document.location.href, then split off
    // (at the equals sign) into an array (index 1)
    $("#censusPanel").html(setOutNotes(document.location.href.split('=')[1]));
    
}); // end of document ready function
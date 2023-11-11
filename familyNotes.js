// sets out the notes (formerly census) panel
function setOutNotes(fIndex) {

    let wide = window.matchMedia("(orientation: landscape)");

    let thisFamily = families[fIndex];

    document.getElementById("cs-family").innerHTML = "<b>&#11188;</b> " + thisFamily.familyName;
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
                censusText += '<div class="open-census narrow-census" onclick="openCens(\''
                + thisFamily.censuses[i].dox[j].images.narrow;
            }
            censusText += '\',\'' + thisFamily.censuses[i].dox[j].occupation + '\')">';
            censusText += thisFamily.censuses[i].dox[j].year + '</div>';
        }
        censusText += '</div>';
    }
    censusText += '<div class="additional-notes">' + thisFamily.familyNotes + '</div>';
    document.getElementById("cs-txt").innerHTML = censusText;

    //  document.getElementById("cs-address").innerHTML = thisFamily.censuses[0].address;
}

// ========= controls for the census sliding panel ===========
function openCens(message, details) {
    const bar = document.getElementById("census-details");
    bar.innerHTML = details;
    const space = document.getElementById("imgSpace");
    // space.innerHTML = '<img id="censpic" ondblclick="zm()" src="https://www.dropbox.com/'+ message + '" width="100%" />';
    space.innerHTML = '<img src="' + message + '" width="100%" />';
    document.getElementById("census-pannel").style.width = "100%"; 
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
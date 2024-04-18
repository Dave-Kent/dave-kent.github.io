// sets out the notes (formerly census) panel
function setOutNotes(fIndex) {

    let wideMatch = window.matchMedia("(orientation: landscape)").matches;
// console.log('widematch=' + wideMatch)
    let thisFamily = families[fIndex];
    
    document.getElementById("cs-family").innerHTML = "&#9668; " + thisFamily.familyName;
    document.getElementById("cs-family").href = "./family-tree.html?family=" + fIndex;
    
    let censusText = '<div class="additional-notes">' + thisFamily.familyNotes + '</div>';
    // censusText is the name for the whole main contents of the 'Notes' page 

    let mRecords = thisFamily.records.length; // mRecords is the loop count index
    for(n=0;n<mRecords;n++){
        if (thisFamily.records[n]==='censuses'){
            censusText += "<h1>Documents</h1>";
            let ncensuses = thisFamily.censuses.length; 
            for(i=0; i<ncensuses; i++) {
                censusText += '<div class="censuses-table">';
                if (thisFamily.censuses[i].gmap !== 'none') {
                    censusText += '<a class="census-address" href="' + thisFamily.censuses[i].gmap + '">'
                    + thisFamily.censuses[i].address + '</a>';
                }
                else if(thisFamily.censuses[i].address !== 'none') {
                    censusText += '<div class="census-address">'
                    + thisFamily.censuses[i].address + '</div>';
                }
                let ndox = thisFamily.censuses[i].dox.length;
                for(j=0; j<ndox; j++) {
                    
                    if (wideMatch) {
                        censusText += '<div class="open-census wide-census" onclick="openCens(\''
                        + thisFamily.censuses[i].dox[j].images.wide;
                    }
                    else {
                        censusText += '<div class="open-census narrow-census" onclick="narrowOpenCens(\''
                        + thisFamily.censuses[i].dox[j].images.narrow + '\',\'' + thisFamily.censuses[i].dox[j].images.zoomed;
                    }
                    censusText += '\',\'' + thisFamily.censuses[i].dox[j].occupation + '\')">';
                    censusText += thisFamily.censuses[i].dox[j].year + '</div>';
                }
                censusText += '</div>';
            }
        }
        if (thisFamily.records[n]==='photos'){
            censusText += "<h1>Photographs</h1>";
            let nphotos = thisFamily.photos.length;
            for(i=0; i<nphotos; i++) {
                // console.log('widematch-photos=' + wideMatch);
                censusText += '<div class="photos-table" onclick= "openPhoto(\'' + fIndex + '\',\'' + i+'\',\'' + wideMatch + '\')">';
                censusText += thisFamily.photos[i].title + 
                '<img class="photo-thumb" src="'+ thisFamily.photos[i].thumbnail+'"/>'+'</div>';
            }  
        }
    } // end records loop
    
    document.getElementById("cs-txt").innerHTML = censusText;
}

// ========= controls for the census sliding panel ===========
function openCens(message, details) {
    let space = document.getElementById("imgSpace");
    space.className = "censusSpace";
    space.innerHTML = '<img class="form-img" src="' + message + '" width="100%" />';
    document.getElementById("census-pannel").style.width = "100%"; 
    document.getElementById("census-details").innerHTML = details;
}
function narrowOpenCens(message, thinMessage, details) {
    const bar = document.getElementById("census-details");
    bar.innerHTML = details;
    let space = document.getElementById("imgSpace");
    space.className = "censusSpace";
    space.innerHTML = '<img id="narrow_pic" src="' + message + '" width="100%" ondblclick="censZoom()"/>\
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
// FUNCTION OPENPHOTO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function openPhoto(famI,photoI,ldscape) {
    // This opens the sliding panel
    document.getElementById("census-pannel").style.width = "100%"; 
    let space = document.getElementById("imgSpace");
    // console.log('landscape='+ ldscape);
    if (ldscape==='true')  {
        space.innerHTML = '<img id="gallery-photo" src="' + families[famI].photos[photoI].picture + '" />';
        // console.log('picture');
    }
    else {
        space.innerHTML = '<img id="gallery-photoV" src="' + families[famI].photos[photoI].pictureV + '" ondblclick="photoZm()" /> \
        <img id="gallery-photoZ" src="' + families[famI].photos[photoI].pictureZ + '" ondblclick="photoUnZm()" />';
        console.log('not landscape - pictureV')
    }
    document.getElementById("census-details").innerHTML = families[famI].photos[photoI].caption;
}
function photoZm() {
    document.getElementById("gallery-photoV").style.height = "0%";
    document.getElementById("gallery-photoZ").style.height = "100%";
    console.log('zoom image');
}
function photoUnZm() {
    document.getElementById("gallery-photoZ").style.height = "0%";
    document.getElementById("gallery-photoV").style.height = "100%";
    console.log('unzoom image');
}
//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function(){
    // the first function to run is setOutNotes(). The famiy index is given 
    // by the query string, found by document.location.href, then split off
    // (at the equals sign) into an array (index 1)
    $("#censusPanel").html(setOutNotes(document.location.href.split('=')[1]));
    
}); // end of document ready function
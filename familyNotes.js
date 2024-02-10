// sets out the notes (formerly census) panel
function setOutNotes(fIndex) {

    let wide = window.matchMedia("(orientation: landscape)");

    let thisFamily = families[fIndex];
    
    document.getElementById("cs-family").innerHTML = "&#9668; " + thisFamily.familyName;
    document.getElementById("cs-family").href = "./family-tree.html?family=" + fIndex;
    
    let censusText = '<div class="additional-notes">' + thisFamily.familyNotes + '</div>';
    // censusText is the name for the whole main contents of the 'Notes' page 

    let mRecords = thisFamily.records.length; // nRecods is the loop count index
    
    for(n=0;n<mRecords;n++){
    
        if (thisFamily.records[n]==='censuses'){
            // let classSpace = document.getElementById("imgSpace"); // = "censusSpace";
            // if (classSpace.className == "photoSpace") {
            //     classSpace.className = "censusSpace";
            // }
            // document.getElementById("imgSpace").className = "censusSpace";
            censusText += "<h1>Documents</h1>";
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
            
            // let classSpace = document.getElementById("imgSpace");
            // if (classSpace.className == "censusSpace") {
            //     classSpace.className = "photoSpace";
            // }
            censusText += "<h1>Gallery</h1>";
            let nphotos = thisFamily.photos.length;
            for(i=0; i<nphotos; i++) {
                //censusText += '<div class="photos-table" onclick= "openPhoto(\'' + thisFamily.photos[i].picture + '\',\'' + thisFamily.photos[i].caption +'\')">'
                censusText += '<div class="photos-table" onclick= "openPhoto(\'' + fIndex + '\',\'' + i+'\')">'
                censusText += thisFamily.photos[i].title + 
                '<img class="photo-thumb" src="'+ thisFamily.photos[i].thumbnail+'"/>'+'</div>';
            }
            
        }
    } // end records loop
    
    document.getElementById("cs-txt").innerHTML = censusText;
}

// ========= controls for the census sliding panel ===========
function openCens(message, details) {
    // document.getElementById("census-details").innerHTML = details;
    let space = document.getElementById("imgSpace");
    space.className = "censusSpace";
    space.innerHTML = '<img src="' + message + '" width="100%" />';
    
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
function openPhoto(famI,photoI) {
    // This opens the sliding panel
    document.getElementById("census-pannel").style.width = "100%"; 
    // document.getElementById("census-details").innerHTML = families[famI].photos[photoI].caption;
    let space = document.getElementById("imgSpace");
    space.innerHTML = '<img id="gallery-photo" src="' + families[famI].photos[photoI].picture + '" />';
    console.log('space width = '+ window.innerWidth + ' space height = ' + space.offsetHeight );
    console.log('space ratio = ' + (window.innerWidth/space.offsetHeight) + ' photo ratio ' + families[famI].photos[photoI].ratio);
    if ((window.innerWidth/space.offsetHeight) > families[famI].photos[photoI].ratio) {
        console.log('taller picture '+ space.offsetHeight);
        space.className = "photoSpace";
        document.getElementById("gallery-photo").style.height="100%";
    }
    else {
        console.log('wider picture')
        space.className = "photoSpaceH";
        document.getElementById("gallery-photo").style.width="100%";
    }
    document.getElementById("census-details").innerHTML = families[famI].photos[photoI].caption;
}
// function OLDopenPhoto(photo,text) {
//     document.getElementById("census-pannel").style.width = "100%"; 
//     document.getElementById("census-details").innerHTML = text;
//     let space = document.getElementById("imgSpace");
//     space.innerHTML = '<img id="gallery-photo" src="' + photo + '" />';
//     if ((window.innerWidth/space.offsetHeight) < photo.ratio) {
        
//         space.className = "photoSpace";
//         document.getElementById("gallery-photo").style.height="75%";
//     }
//     else {
//         space.className = "photoSpaceH";
//         document.getElementById("gallery-photo").style.width="100%";
//     }  
// }
//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function(){
    // the first function to run is setOutNotes(). The famiy index is given 
    // by the query string, found by document.location.href, then split off
    // (at the equals sign) into an array (index 1)
    $("#censusPanel").html(setOutNotes(document.location.href.split('=')[1]));
    
}); // end of document ready function
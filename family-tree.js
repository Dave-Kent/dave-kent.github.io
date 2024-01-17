
//       Family Tree View
//       ================
// Array of messages to show in the info panel
var information = ['Where a name-tag in the diagram is highlighted\
 <span class="with-border">like this</span> a further branch can be reached \
 by tapping (or clicking) on that tag.', 
 'When additional information can be seen, the blue tag <span class="blue-tag">\
 &#9998; notes</span> provides a link.',
 ]
var infoIndex = 0;

// draws a vertical line down from x,y position by h pixels
function shortVertical(x,y,h) 
{
    return '<div class="vert"style="height:'+h+'px;top:'
    + y + 'px;left:'+ x +'px"></div>';
} // end of shortVertical fn
// ====================================================================

// draws a complete parent block (400+hSpace)px wide,100px high. (nFamily is the index of
// the families array, 'this' refers to the current .person object, 
// x is the horizontal position of the middle point (note that the width of each person div
// is 180px)
// y is the vertical position of the top of the parent block.
// hSpace is the gap between the dad and the mum divs (though this is flexible too).
function parents(x,y,hSpace,nFamily)
{
    let dadBorder = mumBorder ="darkred";

    if (families[nFamily].dad.vektr === 99)
    {
        dadBorder = "#facd8a"
    }
    if (families[nFamily].mum.vektr === 99)
    {
        mumBorder = "#facd8a"
    }
    return '<div class="person" id="dad" onclick="klik(this,'+nFamily+')" style="left:'
    + (x-180-hSpace/2) +'px;top:'+ y +'px;border-color:'+dadBorder+'">'+families[nFamily].dad.name+
    '<br>'+families[nFamily].dad.dates+
    '</div><div id="tTop" class="hor"style="width:130px;top:'
    + (y+30) +'px;left:'+ (x-hSpace/2-100) +
    'px"></div><div class="person" id="mum" onclick="klik(this,'+nFamily+')"style="left:'
    + (x+hSpace/2) +'px;top:'+ y +'px;border-color:'+mumBorder+'">'+families[nFamily].mum.name+
    '<br>'+families[nFamily].mum.dates
    +'</div>'+ shortVertical(x,y+30,70)
} // end of parents fn

// draws a single child div on a vertical lolly stick (ht)px high, 180px wide (see family-tree.css)
//zero vertical and horizontal is the top of the lolly stick
function shortChild(n,x,y,ht,nFamily)
{
    let kidBorder = "darkred";
    if (families[nFamily].kids[n].vektr === 99)
    {
        kidBorder = "#facd8a"
    }
    return shortVertical(x,y,ht) + '<div class="person" id="kids['+n+']" onclick="kliq('
    +n+','+  nFamily+')" style="left:'+(x-90)+
    'px;top:'+(y+ht)+'px;;border-color:'+kidBorder+'">'+families[nFamily].kids[n].name+'<br>'
    +families[nFamily].kids[n].dates+'</div>';
} //end of shortChild fn
// =============================================================================

// sets out family tree
function tree(familyIndex)
{
    const halfHeight = document.getElementById("mainPanel").offsetHeight/3+20; // vertical position datum   
    
    const fullWidth = document.getElementById("mainPanel").offsetWidth;
    const halfWidth = fullWidth/2; // centre line
    
    const nkids = families[familyIndex].kids.length; // number of children 

    if (families[familyIndex].records[0]!=='empty')
    {
        // display the tab and text separately
        showCensusLink();
        // 'census-link' is now the 'notes' tab
        document.getElementById("census-link").href = "./family-notes.html?family=" + familyIndex;
    }

    // Loops to set out the children - START
    // The tree options depend on the width of the viewport:
    let allTheKids = '';
    if (fullWidth > (nkids * 210 + 20)) // wide screen, all children in a row.
    {
        const startPoint = halfWidth-210*(nkids-1)/2; // horizontal position
        for(i= 0 ; i < nkids; i++)
        {
            allTheKids = allTheKids + 
            shortChild(i,(startPoint+(i*210)),halfHeight+50,70,familyIndex);
        }
        const crossPiece = '<div id="crossPiece" class="hor"style="width:'
        +(nkids-1)*210+'px;top:'+ (halfHeight+50) +'px;left:'
        + (halfWidth-(nkids-1)*105) +'px"></div>';
        return parents(halfWidth,(halfHeight-50),30,familyIndex) + allTheKids + crossPiece;
    }
    else if (fullWidth > (nkids/2*220+110)) // mid-width screen, children in two rows
    {
        const startPoint = halfWidth-220*(nkids-1)/4; // horizontal position
        for(i=0 ; i < nkids; i++)
        {
            if(i&1) // test for odd number
            {
                allTheKids = allTheKids +
                shortChild(i,(startPoint+(i*110)),halfHeight,150,familyIndex);
            }
            else
             {
                allTheKids = allTheKids +
                shortChild(i,(startPoint+(i*110)),halfHeight,50,familyIndex);
            }
        }
        const crossPiece = '<div id="crossPiece" class="hor"style="width:'
        +(nkids-1)*110+'px;top:'+ halfHeight +'px;left:'
        + (halfWidth-(nkids-1)*55) +'px"></div>' ;          
        
        let space = 30;
        if (fullWidth<430){space=12}; // move parent divs closer if space is tight
        return parents(halfWidth,(halfHeight-100),space,familyIndex) + allTheKids + crossPiece;
    }
    else // narrowest screen, children ranked vertically
    {
        let space = 30; //standard spacing between parents
        if (fullWidth<500){space=12}; // move parent divs closer if space is tight
        const step = (fullWidth-240)/(nkids-1);// children appear in a stepped rank
        
        // NB child positioning is from the MIDDLE of the div
        // var kidsStart = halfWidth-100-space/2;
        const kidsHorizontalStart = 120;
        const verticalOffset = halfHeight-95;
        
        for(i=0; i<nkids; i++)
        {
            allTheKids = allTheKids + // step down the screen: 65px height of parent block: 100px
            shortChild(i,kidsHorizontalStart+step*i,verticalOffset+120+i*65,0,familyIndex) // each child
            
        }
        const treeNet = '<div class="hor"style="top:'+(verticalOffset+100)+'px;left:120px;width:'+(fullWidth-240)+'px"></div>'
        + shortVertical(120,verticalOffset+100,65) + shortVertical(fullWidth-120,verticalOffset+100,nkids*65)
        + '<span style="position: absolute; left:120px; top:'+(halfHeight+20+nkids*65)+'px;">.</span>';

        return parents(halfWidth,verticalOffset,space,familyIndex)+allTheKids+treeNet;
    }// Loop to set out the children - END
}
  
// Click function for each parent
// (person object in a family object in the families array)
function klik(person,thisFamily)
{
    const vector = families[thisFamily][person.id].vektr;
    // if the vektr value is 99, this shows that an individual is not linked to another family unit
    if(vector === 99) // show the NOT AVAILABLE message
    {  
        showCover(0.3);
        document.getElementById("ninetynine-message").style.top = "30vh";  
    }
    else // get the tree for the next family
    {
        hideCensusLink();
        
        // shift mainPanel up and change the contents
        $("#mainPanel").animate({top: '-80vh'}, 600,function(){$("#mainPanel").html(tree(vector))});
        // shift mainPanel back down
        $("#mainPanel").animate({top: '0'}, 1000);
    }
}

// Click function for each child 
// (child object in a kids array in a family object in the families array)
function kliq(n,thisFamily)
{
    const vector = families[thisFamily].kids[n].vektr;
    if(vector === 99)
    {
        showCover(0.3);
        document.getElementById("ninetynine-message").style.top = "30vh";  
    }
    else
    {
        hideCensusLink();

        // THIS IS WHERE THE DISPLAYED DATA IS CHANGED <<<<<<<<<<<<<<<<<<<<<<<<
        // shift mainPanel down and change the contents
        // MAYBE change the (hidden) census panel first??
        $("#mainPanel").animate({top: '80vh'}, 600,function(){$("#mainPanel").html(tree(vector))});
        // shift mainPanel back up
        $("#mainPanel").animate({top: '0'}, 1000);
        
    }
}
function showCensusLink() {
    let linkId = document.getElementById("census-link");
    linkId.style.zIndex = "1";
    linkId.style.backgroundColor = "rgb(99, 99, 143)";
}

function hideCensusLink() {
    let linkId = document.getElementById("census-link");
        linkId.style.backgroundColor = "white"; 
        linkId.style.zIndex = "-1";
}

function ninetynineBack()
// closes 99 message panel
{
    document.getElementById("ninetynine-message").style.top = "-100px";
    hideCover();
}
function openInfo()
// responds to clicks on the info button
{
    // 1) covers the main display, so that the name tags are inactive
    showCover(0.3);
    // 2) loads the next(cycled) message onto the info panel
    $("#border-info").html(information[infoIndex++%information.length]);
    // 3) shifts the info panel into view
    document.getElementById("border-info").style.right = "20px";
}
function infoBack()
// closes info panel
{
    document.getElementById("border-info").style.right = "-90%";
    hideCover();
}

//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function(){
    // the first function to run is tree(). The first tree to load is given 
    // by the query string, found by document.location.href, then split off
    // (at the equals sign) into an array (index 1)
    $("#mainPanel").html(tree(document.location.href.split('=')[1]));
}); // end of document ready function


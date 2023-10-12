
//       Family Tree View
//       ================
// Dimensions: .person divs ?px wide 60px high
// short verticals 70px, long verticals 200px

// array of families data. See VSCode snippets:
// 'fm' calls familyStory-familiesArray:
// 'kd' familyStory-addChild
// POSITION THE CURSOR NEXT TO THE LAST BRACE }



const families = [
    
{ // Family 0
    census : 0,
dad : { name: "Herbert West", dates: "187?-195?", vektr:6},
mum : { name: "Jessie Smith", dates: "1882-1973", vektr:7},
kids : [{ name: "Doris Audrey", dates: "1906-1988", vektr:99},
{ name: "Leonard Aubrey", dates: "1908-1991", vektr:99},
{ name: "Joyce Evelyn", dates: "1911-19??", vektr:99},
{ name: "Cyril Reginald", dates: "1913-19??", vektr:99},
{ name: "Phyllis Mary", dates: "1916-199?", vektr:99},
{ name: "Joan Olive", dates: "1916-1981", vektr:1}//NEXT
]
},
{ // Family 1
    census : 0,
dad : { name: "Charles Kent", dates: "1911-1989", vektr:5},
mum : { name: "Joan West", dates: "1916-1981", vektr:0},
kids : [{ name: "Peter Nicholas", dates: "1947", vektr:2},
{ name: "David Jonathan", dates: "1950", vektr:3},
{ name: "Simon James", dates: "1955", vektr:4}//NEXT
]
},
{ // Family 2
    census : 0,
dad : { name: "Peter Kent", dates: "1947", vektr:1},
mum : { name: "Ann", dates: "19??", vektr:99},
kids : [{ name: "Katherine", dates: "19??", vektr:99},
{ name: "Leah", dates: "19??", vektr:99}//NEXT
]
},
{ // Family 3
    census : 0,
dad : { name: "David Kent", dates: "1950", vektr:1},
mum : { name: "Helen Atkinson", dates: "1956", vektr:99},
kids : [{ name: "Benjamin", dates: "1980", vektr:99},
{ name: "Nicola Claire", dates: "1983", vektr:99},
{ name: "Gavin David", dates: "1985", vektr:99}//NEXT
]
},
{ // Family 4
    census : 0,
dad : { name: "Simon Kent", dates: "1955", vektr:1},
mum : { name: "Susan", dates: "195?", vektr:99},
kids : [{ name: "Jessica", dates: "19??", vektr:99}//NEXT
]
},
{ // Family 5
    census : 1,
dad : { name: "Albert Kent", dates: "1873-195?", vektr:10},
mum : { name: "Mary Frapwell", dates: "1874-19??", vektr:99},
kids : [{ name: "Dorothy", dates: "1892-19??", vektr:99},
{ name: "Charles", dates: "1911-1989", vektr:1}//NEXT
]
},
{ // Family 6
    census : 1,
dad : { name: "Walter West", dates: "1855-1933", vektr:99},
mum : { name: "Emma Keats", dates: "1855-19??", vektr:99},
kids : [{ name: "William", dates: "1873-1???", vektr:99},
{ name: "Ella", dates: "1875-1???", vektr:99},
{ name: "Herbert Walter", dates: "1877-195?", vektr:0},
{ name: "William James", dates: "1880-1???", vektr:99},
{ name: "Thomas", dates: "1883-1915", vektr:99},
{ name: "Emma Rose", dates: "1885-1???", vektr:99},
{ name: "George", dates: "1887-1???", vektr:99},
{ name: "Emily Rose", dates: "1888-1???", vektr:99},
{ name: "Reginald Edward", dates: "1895-19??", vektr:99}//NEXT
]
},
{ // Family 7
    census : 0,
dad : { name: "William Smith", dates: "1851-19??", vektr:99},
mum : { name: "Martha Hasler", dates: "1852-1935", vektr:8},
kids : [{ name: "Jessica Alice Annie", dates: "1882-1973", vektr:0}//NEXT
]
},
{ // Family 8
    census : 0,
dad : { name: "Henry Hasler", dates: "1826-1???", vektr:99},
mum : { name: "Mary Ann", dates: "1829-1???", vektr:99},
kids : [{ name: "Martha Louisa", dates: "1852-1935", vektr:7},
{ name: "William Peter", dates: "1854-1936", vektr:11},
{ name: "Eliza", dates: "1856-1???", vektr:99},
{ name: "Thomas", dates: "1859-1???", vektr:99}//NEXT
]
},
{ // Family 9
    census : 1,
dad : { name: "John Kent", dates: "1820-1???", vektr:99},
mum : { name: "Elizabeth", dates: "1818-1???", vektr:99},
kids : [{ name: "George", dates: "1845-1???", vektr:10},
{ name: "Mary Ann", dates: "1848-1???", vektr:99},
{ name: "Reuben", dates: "1851-1???", vektr:99},
{ name: "Martha", dates: "1854-1???", vektr:99}//NEXT
]
},
{ // Family 10
    census : 1,
dad : { name: "George Kent", dates: "1847-1???", vektr:9},
mum : { name: "Mary", dates: "1849-1???", vektr:99},
kids : [{ name: "Henry", dates: "1870-1???", vektr:99},
{ name: "Charles", dates: "1872-1???", vektr:99},
{ name: "Albert", dates: "1873-195?", vektr:5},
{ name: "Louisa", dates: "1875-1???", vektr:99},
{ name: "Herbert", dates: "1884-1???", vektr:99}//NEXT
]
},
{ // Family 11
    census : 0,
dad : { name: "William Hasler", dates: "1854-1936", vektr:8},
mum : { name: "Maria Baker", dates: "1856-1934", vektr:99},
kids : [{ name: "Douglas William", dates: "1882-1965", vektr:12},
{ name: "Beatrice Ethel", dates: "1884-19??", vektr:99}//NEXT
]
},
{ // Family 12
    census : 0,
dad : { name: "Douglas Hasler", dates: "1882-1965", vektr:11},
mum : { name: "Violet Collins", dates: "1886-1968", vektr:99},
kids : [{ name: "Joan Mary", dates: "1924-2022", vektr:99}//NEXT
]
}//NEXT//NEXT//NEXT//NEXT/NEXT//NEXT//NEXT//NEXT//NEXT//NEXT
]
// ====================================================================
// Array of messages to show in the info panel
var information = ['Where a name-tag in the diagram is highlighted\
 <span class="with-border">like this</span> a further branch can be reached \
 by tapping (or clicking) on that tag.', 
 'When images of documents can be seen, the blue tag <span class="blue-tag">\
 cencuses</span> provides a link.',
 ]
var infoIndex = 0;
// draws a vertical line down from x,y position by h pixels
// =====================================================================

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

    // if there is a census image available, display the 'census link' tab, with the appropriate href
    if (families[familyIndex].census)
    {
        let destination = './family-census.html#cens'+familyIndex;
        // display the tab and text separately
        let linkId = document.getElementById("census-link");
        linkId.style.zIndex = "1";
        linkId.style.backgroundColor = "rgb(99, 99, 143)";
        // set up the anchor
        linkId.href = destination;
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
        // console.log("halfWidth: "+halfWidth+" fullWidth: "+fullWidth)
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
 
    if(vector === 99) // show the NOT AVAILABLE message
    {  
        $(".cover").css("display","block");
        document.getElementById("ninetynine-message").style.top = "30vh";  
    }
    else // get the next tree
    {
        let linkId = document.getElementById("census-link");
        linkId.style.backgroundColor = "white"; 
        linkId.style.zIndex = "-1";
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
        $(".cover").css("display","block");
        document.getElementById("ninetynine-message").style.top = "30vh";  
    }
    else
    {
        let linkId = document.getElementById("census-link");
        linkId.style.backgroundColor = "white"; 
        linkId.style.zIndex = "-1";
        // shift mainPanel down and change the contents
        $("#mainPanel").animate({top: '80vh'}, 600,function(){$("#mainPanel").html(tree(vector))});
        // shift mainPanel back down
        $("#mainPanel").animate({top: '0'}, 1000);
        // $("#mainPanel").html(tree(vector));
    }
}

function ninetynineBack()
{
    document.getElementById("ninetynine-message").style.top = "-100px";
    $(".cover").css("display","none");
}
function openInfo()
// responds to clicks on the info button
{
    // 1) covers the main display, so that the name tags are inactive
    $(".cover").css("display","block");
    // 2) loads the next(cycled) message onto the info panel
    $("#border-info").html(information[infoIndex++%information.length]);
    // 3) shifts the info panel into view
    document.getElementById("border-info").style.right = "20px";
}
function infoBack()
{
    document.getElementById("border-info").style.right = "-90%";
    $(".cover").css("display","none");
}
//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function(){
    // the first function to run is tree(). The first tree to load is given 
    // by the query string, found by document.location.href, then split off
    // (at the equals sign) into an array (index 1)
    $("#mainPanel").html(tree(document.location.href.split('=')[1]));
}); // end of document ready function


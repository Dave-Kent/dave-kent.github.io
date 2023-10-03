// function test_tree() {
//     const tryout = document.getElementById("tree-test");
//     tryout.innerHTML = 'Hello tree!!';
// }


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
dad : { name: "Herbert Walter West", dates: "187?-195?", vektr:99},
mum : { name: "Jessie Alice Annie Smith", dates: "1882-1973", vektr:99},
kids : [{ name: "Doris Audrey", dates: "1906-1988", vektr:99},
{ name: "Leonard Aubrey", dates: "1908-1991", vektr:99},
{ name: "Joyce Evelyn", dates: "1911-19??", vektr:99},
{ name: "Cyril Reginald", dates: "1913-19??", vektr:99},
{ name: "Phyllis Mary", dates: "1916-199?", vektr:99},
{ name: "Joan Olive", dates: "1916-1981", vektr:1}//NEXT
]
},
{ // Family 1
dad : { name: "Charles (Joe) Kent", dates: "1912-1990", vektr:99},
mum : { name: "Joan Olive West", dates: "1916-1981", vektr:0},
kids : [{ name: "Peter Nicholas", dates: "1947", vektr:2},
{ name: "David Jonathan", dates: "1950", vektr:3},
{ name: "Simon James", dates: "1955", vektr:4}//NEXT
]
},
{ // Family 2
dad : { name: "Peter Nicholas Kent", dates: "1947", vektr:1},
mum : { name: "Ann", dates: "19??", vektr:99},
kids : [{ name: "Katherine", dates: "19??", vektr:99},
{ name: "Leah", dates: "19??", vektr:99}//NEXT
]
},
{ // Family 3
dad : { name: "David Jonathan Kent", dates: "1950", vektr:1},
mum : { name: "Helen Patricia Atkinson", dates: "1956", vektr:99},
kids : [{ name: "Benjamin", dates: "1980", vektr:99},
{ name: "Nicola Claire", dates: "1983", vektr:99},
{ name: "Gavin David", dates: "1985", vektr:99}//NEXT
]
},
{ // Family 4
dad : { name: "Simon James Kent", dates: "1955", vektr:1},
mum : { name: "Susan", dates: "195?", vektr:99},
kids : [{ name: "Jessica", dates: "19??", vektr:99}//NEXT
]
}//NEXT//NEXT
]

// draws a vertical line down from x,y position by h pixels
function shortVertical(x,y,h) 
{
    return '<div class="vert"style="height:'+h+'px;top:'
    + y + 'px;left:'+ x +'px"></div>';
} // end of shortVertical fn

// draws a complete parent block (400+hSpace)px wide,100px high. (nFamily is the index of
// the families array, 'this' refers to the current .person object, 
// x is the horizontal position of the middle point (note that the width of each person div
// is flexible)
// y is the vertical position of the top of the parent block.
// hSpace is the gap between the dad and the mum divs (though this is flexible too).
function parents(x,y,hSpace,nFamily)
{
    return '<div class="person" id="dad" onclick="klik(this,'+nFamily+')" style="left:'
    + (x-200-hSpace/2) +'px;top:'+ y +'px;">'+families[nFamily].dad.name+
    '<br>'+families[nFamily].dad.dates+
    '</div><div id="tTop" class="hor"style="width:130px;top:'
    + (y+30) +'px;left:'+ (x-hSpace/2-100) +
    'px"></div><div class="person" id="mum" onclick="klik(this,'+nFamily+')"style="left:'
    + (x+hSpace/2) +'px;top:'+ y +'px;">'+families[nFamily].mum.name+
    '<br>'+families[nFamily].mum.dates
    +'</div>'+ shortVertical(x,y+30,70)
} // end of parents fn

// draws a single child div on a vertical lolly stick (ht)px high, 200px wide
//zero vertical and horizontal is the top of the lolly stick
function shortChild(n,x,y,ht,nFamily)
{
    return shortVertical(x,y,ht) + '<div class="person" id="kids['+n+']" onclick="kliq('
    +n+','+  nFamily+')" style="left:'+(x-100)+
    'px;top:'+(y+ht)+'px;">'+families[nFamily].kids[n].name+'<br>'
    +families[nFamily].kids[n].dates+'</div>';
} //end of shortChild fn

// sets out family tree
function tree(familyIndex)
{
    var halfHeight = document.getElementById("mainPanel").offsetHeight/3; // vertical position datum
   
    
    const fullWidth = document.getElementById("mainPanel").offsetWidth;
    var halfWidth = fullWidth/2; // centre line
    console.log(fullWidth);
    var nkids = families[familyIndex].kids.length; // number of children 
    
    // $("#panel").text($("#mainPanel").width());
    // $("#panel2").text(nkids); // <<<<<<<<<<<<<<<<<<<< DEBUGGING VARIABLE!!!
 console.log("nkids: "+nkids+" panel width: "+$("#mainPanel").width());//<<<

// Loop to set out the children - START

    var allTheKids = '';
    if (fullWidth > (nkids * 210 + 20)) // wide screen, all children in a row.
    {
        var startPoint = halfWidth-210*(nkids-1)/2; // horizontal position
        for(i= 0 ; i < nkids; i++)
        {
            allTheKids = allTheKids + 
            shortChild(i,(startPoint+(i*210)),halfHeight+50,70,familyIndex);
        }
        var crossPiece = '<div id="crossPiece" class="hor"style="width:'
        +(nkids-1)*210+'px;top:'+ (halfHeight+50) +'px;left:'
        + (halfWidth-(nkids-1)*105) +'px"></div>';
        return parents(halfWidth,(halfHeight-50),30,familyIndex) + allTheKids + crossPiece;
    }
    else if (fullWidth > (nkids/2*220+110)) // mid-width screen, children in two rows
    {
        var startPoint = halfWidth-220*(nkids-1)/4; // horizontal position
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
            var crossPiece = '<div id="crossPiece" class="hor"style="width:'
        +(nkids-1)*110+'px;top:'+ halfHeight +'px;left:'
        + (halfWidth-(nkids-1)*55) +'px"></div>' ;          
        }
        var space = 30;
        if (fullWidth<430){space=12}; // move parent divs closer if space is tight
        console.log("halfWidth: "+halfWidth+" fullWidth: "+fullWidth)
        return parents(halfWidth,(halfHeight-100),space,familyIndex) + allTheKids + crossPiece;
    }
    else // narrowest screen, children ranked vertically
    {
        var space = 30; //standard spacing between parents
        if (fullWidth<500){space=12}; // move parent divs closer if space is tight
        var step = (fullWidth-240)/(nkids-1);
        // var step = (340+space)/2/(nkids-1); // children appear in a stepped rank
        // the first child comes below the dad
        // NB child positioning is from the MIDDLE of the div
        // var kidsStart = halfWidth-100-space/2;
        var kidsStart = 120;
        //var crossPieceLength = (fullWidth+space)/2; // crosspiece for each child
        // drawn from the right
        //var crossPieceStart = 25; // a suitable distance from the right side
        //console.log("fullWidth: "+fullWidth+" nkids: "+nkids+" step: "+step); //<<<
        // var topScreen= 30; // topScreen is the gap above the parent divs
        for(i=0; i<nkids; i++)
        {
            allTheKids = allTheKids + // step down the screen: 65px height of parent block: 100px
            shortChild(i,kidsStart+step*i,(halfHeight)+50+i*65,0,familyIndex) // each child
            // each crosspiece
            // +'<div class="hor"style="width:'+(crossPieceLength-step*i)+'px;top:'
            // +(halfWidth+100+i*65)+'px;right:'+crossPieceStart+'px"></div>';
        }
        var treeNet = '<div class="hor"style="top:'+halfHeight+'px;left:120px;right:120px"></div>'
        + shortVertical(120,halfHeight,65) + shortVertical(fullWidth-122,halfHeight,nkids*65)

        return parents(halfWidth,(halfHeight-100),space,familyIndex)+allTheKids+treeNet;
    }
}
  
// Loop to set out the children - END
    

// Click function for each parent
// (person object in a family object in the families array)
function klik(person,thisFamily)
{
    var vector = families[thisFamily][person.id].vektr;
 
    if(vector === 99) // show the NOT AVAILABLE message
    {  
        document.getElementById("ninetynine-message").style.top = "30vh";  
    }
    else // get the next tree
    {
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
    var vector = families[thisFamily].kids[n].vektr;
    if(vector === 99)
    {
        document.getElementById("ninetynine-message").style.top = "30vh";  
    }
    else
    {
        // shift mainPanel down and change the contents
        $("#mainPanel").animate({top: '80vh'}, 600,function(){$("#mainPanel").html(tree(vector))});
        // shift mainPanel back down
        $("#mainPanel").animate({top: '0'}, 1000);
        // $("#mainPanel").html(tree(vector));
    }
}

function ninetynineBack()
{
    document.getElementById("ninetynine-message").style.top = "-100px"
}

//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function()
{
    $("#mainPanel").html(tree(0));

}); // end of document ready function


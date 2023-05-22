//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

//       Family Tree View
//       ================
// Dimensions: buttons 200px wide 60px high
// short verticals 70px, long verticals 200px

// array of families data. See VSCode snippets:
// 'fm' calls familyStory-familiesArray:
// 'kd' familyStory-addChild
// POSITION THE CURSOR NEXT TO THE LAST BRACE }
// 
const families = [
    { // Family 0
    dad : { name: "Fred01", dates: "1900", vektr:1},
    mum : { name: "Mary", dates: "1901", vektr:1},
    kids : [{ name: "Jimmy", dates: "1950", vektr:1},
    { name: "Janey", dates: "1951", vektr:1}
    ]
    },
    { // Family 1
    dad : { name: "Burt", dates: "1900", vektr:0},
    mum : { name: "Mable", dates: "1901", vektr:0},
    kids : [{ name: "Tommy", dates: "1950", vektr:0}
    ]
    }
]

function shortVertical(x,y) // draws a 70px vertical line down
{
    return '<div class="vert"style="height:70px;top:'
    + y + 'px;left:'+ x +'px"></div>';
} // end of shortVertical fn
function longVertical(x,y) // draws a 200px vertical line down
{
    return '<div class="vert"style="height:200px;top:'
    + y + 'px;left:'+ x +'px"></div>';
} // end of longVertical fn

// draws a complete parent block 430px wide,100px high. (nFamily is the index of
// the families array, 'this' refers to the current button object).
function parents(x,y,nFamily)
{
    return '<button id="dad" onclick="klik(this,'+nFamily+')" style="position:absolute;left:'
    + (x-215) +'px;top:'+ y +'px;">'+families[nFamily].dad.name+
    '<br>'+families[nFamily].dad.dates+
    '</button><div id="tTop" class="hor"style="width:30px;top:'
    + (y+30) +'px;left:'+ (x-15) +
    'px"></div><button id="mum" onclick="klik(this,'+nFamily+')"style="position:absolute;left:'
    + (x+15) +'px;top:'+ y +'px;">'+families[nFamily].mum.name+
    '<br>'+families[nFamily].mum.dates
    +'</button>'+ shortVertical(x,y+30)
} // end of parents fn

// draws a single child button on a short vertical 130px high, 200px wide
function shortChild(n,x,y,nFamily)
{
    return shortVertical(x,y) + '<button id="kids['+n+']" onclick="kliq(' // ???????
    +n+','+  nFamily+')" style="position:absolute;left:'+(x-100)+
    'px;top:'+(y+70)+'px;">'+families[nFamily].kids[n].name+'<br>'
    +families[nFamily].kids[n].dates+'</button>';
}
// sets out family tree
function tree(familyIndex)
{
    var panelHalf = 300//$("#window").height()/2; 
    var panelMiddle = $("#mainPanel").width()/2;
    var nkids = families[familyIndex].kids.length;
    $("#panel2").text(nkids);

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    var startPoint = panelMiddle-210*(nkids-1)/2;
    var allTheKids = '';
    for(i= 0 ; i < nkids; i++)
    {
        allTheKids = allTheKids + 
        shortChild(i,(startPoint+(i*210)),panelHalf,familyIndex); //<<< CHANGE 150 TO FLOATING HEIGHT!!
    }
    // HEY REMEMBER ONE CHILD = ZERO OFFSET!!!
    var crossPiece = '<div id="crossPiece" class="hor"style="width:'+(nkids*100)+'px;top:' // HAHA!!
    + panelHalf +'px;left:'+ (panelMiddle-nkids*50) +'px"></div>'
    return parents(panelMiddle,(panelHalf-100),familyIndex) // should put
    //+ shortChild(0,panelMiddle-50,150,"empty child<br>no date") + crossPiece;
    + allTheKids + crossPiece;
}
// Click function for each family member (person)
function klik(person,thisFamily)
{
    $("#mainPanel").html(tree(families[thisFamily][person.id].vektr));
    //$("#mainPanel").fadeIn("slow");
}
function kliq(n,thisFamily)
{
    $("#mainPanel").html(tree(families[thisFamily].kids[n].vektr));
}

//       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function()
{
    $("#mainPanel").html(tree(0));

}); // end of document ready function



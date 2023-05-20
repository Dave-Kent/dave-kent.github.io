

// array of families data. See VSCode snippets:
// 'fm' calls familyStory-familiesArray:
// 'kd' familyStory-addChild
// POSITION THE CURSOR NEXT TO THE LAST BRACE }
// 
const families = [
    { // Family 0
    dad : { name: "Fred", dates: "1900", link:1},
    mum : { name: "Mary", dates: "1901", link:1},
    kids : [{ name: "Jimmy", dates: "1950", link:1},
    { name: "Janey", dates: "1951", link:1}
    ]
    },
    { // Family 1
    dad : { name: "Burt", dates: "1900", link:0},
    mum : { name: "Mable", dates: "1901", link:0},
    kids : [{ name: "Tommy", dates: "1950", link:0}
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

// draws a complete parent block 430px wide,100px high
function parents(x,y,nFamily)
{
    return '<button id="dad" style="position:absolute;left:'
    + (x-215) +'px;top:'+ y +'px;">'+families[nFamily].dad.name+
    '<br>'+families[nFamily].dad.dates+
    '</button><div id="tTop" class="hor"style="width:30px;top:'
    + (y+30) +'px;left:'+ (x-15) +
    'px"></div><button id="mum" style="position:absolute;left:'
    + (x+15) +'px;top:'+ y +'px;">'+families[nFamily].mum.name+
    '<br>'+families[nFamily].mum.dates
    +'</button>'+ shortVertical(x,y+30)
} // end of parents fn

// draws a single child button on a short vertical 130px high, 200px wide
function shortChild(n,x,y,detail)
{
    return shortVertical(x,y) + '<button id="kid[n]" style="position:absolute;left:'+(x-100)+
    'px;top:'+(y+70)+'px;">'+ detail +'</button>'
}
// sets out family tree
function tree(familyIndex)
{
    var size = $("#mainPanel").width();
    var panelMiddle = size/2
    return parents(panelMiddle,50,familyIndex) // should put
    + shortChild(0,panelMiddle-50,150,"empty child<br>1980") 
}

//       <<<<<<<<<<<<<<<<<<<<<<===>>>>>>>>>>>>>>>>>>>>
$(document).ready(function()
{
    var index = 0;

// MAYBE while true loop from here
    $("#mainPanel").html(tree(index));


    $("button").dblclick(function()
    {

    // 'this.id' identifies the button that was clicked, then
    // this line calls the tree function with the link to the next family
        $("#mainPanel").html(tree(families[index][this.id].link));
//MAYBE - index = families[index][this.id].link;
    }); // end of btn click function

}); // end of document ready function



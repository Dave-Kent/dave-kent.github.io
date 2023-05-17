
var dadDetail = "Fred Bloggs<br>1952-1999";
var mumDetail = "Mary smith<br>1944-2010"
function shortVertical(x,y)
{
    return '<div class="vert"style="height:70px;top:'
    + y + 'px;left:'+ x +'px"></div>';
} // end of shortVertical fn
function longVertical(x,y)
{
    return '<div class="vert"style="height:200px;top:'
    + y + 'px;left:'+ x +'px"></div>';
} // end of longVertical fn

function parents(x,y)
{
    return '<button id="dadBtn" style="position:absolute;left:'
    + (x-215) +'px;top:'+ y +'px;">'+dadDetail+
    '</button><div id="tTop" class="hor"style="width:30px;top:'
    + (y+30) +'px;left:'+ (x-15) +
    'px"></div><button id="mumBtn" style="position:absolute;left:'
    + (x+15) +'px;top:'+ y +'px;">'+mumDetail
    +'</button>'+ shortVertical(x,y+30)
} // end of parents fn

function shortChild(n,x,y,detail)
{
    return shortVertical(x,y) + '<button id="kid[n]" style="position:absolute;left:'+(x-100)+
    'px;top:'+(y+70)+'px;">'+ detail +'</button>'
}
//       <<<<<<<<<<<<<<<<<<<<<<===>>>>>>>>>>>>>>>>>>>>
$(document).ready(function()
      {

var size = $("#mainPanel").width();
var panelMiddle = size/2
$("#panel").html(size);

var mainPanelContents = parents(panelMiddle,50) // should put
+ shortChild(0,panelMiddle-50,150,"empty child<br>1980") // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$("#mainPanel").html(mainPanelContents);


// this bit works, I should be able to set up the click 
// responses like this 

 $("button").click(function(){
$("#panel2").text("cick once "+this.id);

}); // end of btn click function
$("button").dblclick(function(){
    $("#panel2").text("DOUBLE-CLICK-CLICK " + this.id);
}); // end of double click function!!! yippee!!

}); // end of document ready function



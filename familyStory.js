
var dadDetail = "Fred Bloggs<br>1952-1999";
var mumDetail = "Mary smith<br>1944-2010"
function shortVertical(x,y)
{
    return '<div class="vert"style="height:70px;top:'
    + y + 'px;left:'+ x +'px"></div>';
}
function longVertical(x,y)
{
    return '<div class="vert"style="height:200px;top:'
    + y + 'px;left:'+ x +'px"></div>';
}
function parents(x,y)
{
    return '<button id="dadBtn" style="position:absolute;left:'
    + x +'px;top:'+ y +'px;">'+dadDetail+
    '</button><div id="tTop" class="hor"style="width:30px;top:'
    + (y+30) +'px;left:'+ (x+200) +
    'px"></div><button id="mumBtn" style="position:absolute;left:'
    + (x+230) +'px;top:'+ y +'px;">'+mumDetail
    +'</button>'+ shortVertical(x+215,y+30)
}
// this bit works, I should be able to construct the contents of 
// the main div and load it this way
var cageContents = parents(20,50)+ longVertical(300,190)


//       <<<<<<<<<<<<<<<<<<<<<<===>>>>>>>>>>>>>>>>>>>>
$(document).ready(function()
      {
// !! THE CAGE SIZE NEEDS TO BE FOUND BEFORE THE ITEMS CAN BE 
// POSITIONED !!!
var size = $("#cage").width();
$("#panel").html(size);

$("#cage").html(cageContents);


// this bit works, I should be able to set up the click 
// responses like this 
// MAYBE THE ID '#dadBtn' COULD BE CHANGED TO CLASS!!!??
 $("button").click(function(){
$("#panel2").text("cick once "+this.id);

}); // end of btn click function
$("button").dblclick(function(){
    $("#panel2").text("DOUBLE-CLICK-CLICK " + this.id);
}); // end of double click function!!! yippee!!

}); // end of document ready function



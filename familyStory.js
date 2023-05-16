
var dadDetail = "Fred Bloggs<br>1952-1999";
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


// this bit works, I should be able to construct the contents of the main div and load it this way
var cageContents = '<button id="dadBtn" style="position:absolute;left:25px;top:200px;">'+dadDetail+
'</button><div id="tTop" class="hor"style="width:60px;top:230px;left:200px"></div>'
      + longVertical("300","190") + shortVertical("240","230")

      $(document).ready(function()
      {
      $("#cage").html(cageContents);


var size = $("#cage").width();
$("#panel").html(size);

// this bit works, I should be able to set up the click responses like this
 $("#dadBtn").click(function(){
$("#panel2").text("CLICK-ONCE");

}); // end of btn click function
$("#dadBtn").dblclick(function(){
    $("#panel2").text("DOUBLE-CLICK-CLICK");
}); // end of double click function!!! yippee!!

}); // end of document ready function



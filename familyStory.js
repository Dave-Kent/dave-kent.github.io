
var dadDetail = "Fred Bloggs<br>1952-1999";

$(document).ready(function()
{

// this bit works, I should be able to construct the contents of the main div and load it this way
var cageContents = '<button id="dadBtn" style="position:absolute;left:5%;top:25%;">'+dadDetail+'\
</button><div id="tTop" class="hor"style="width:60%;top:30%;left:10%"></div>\
      <div id="tDown" class="vert"style="height:50%; top: 30%; left:40%;"></div>\
      <div class="vert"style="height:10%;top:25%;left:70%"></div>\
      <div class="vert"style="height:50%;top:50%;left:60%;"></div>'

$("#cage").html(cageContents);


var size = $("#cage").width();
$("#panel").html(size);

// this bit works, I should be able to set up the click responses like this
 $("#dadBtn").click(function(){
$("#panel2").text("CLICK-CLICK");

}); // end of btn click function

}); // end of document ready function



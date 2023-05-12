

function init()
{
 //   document.getElementById("panel").innerHTML="Hello from external js";

var size = $("#cage").width();
$("#panel").html(size);

/* $("#btn").cick(function()
{
document.getElementById("panel2").innerHTML"CLICK-CLICK";
});
*/
}
window.onload = init;

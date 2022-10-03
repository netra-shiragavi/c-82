var mouse_event = "empty";
var lp_x; lp_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_line = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
 color = document.getElementById("color").value;
 width_line = document.getElementById("width_line").value;

 mouse_event = "mouseDown";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
   cp_x = e.clientx - canvas.offsetLeft;
   cp_y = e.clienty -  canvas.offsetTop;

   if (mouse_event == "mouseDown" );{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
 
    console.log("Last position of x and y coordinates = ");
    console.log("x -" + lp_x + "y -" + lp_y );
    ctx.moveTo(lp_x, lp_y);
 
    console.log("Current position of x and y coordinates = ");
    console.log("x -" + cp_x + "y -" + cp_y );
     ctx.lineTo(cp_x, cp_y);
     ctx.stroke()
 
   }
   lp_x = cp_x;
   lp_y = cp_y;

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e)
(
    mouse_event = "mouseUP";
)

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e);
{
    mouse_event = "mouseleave";
}
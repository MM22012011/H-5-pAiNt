canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var mouseEvent = "";

var current_X_position = "";
var current_Y_position = "";


color = "black";
width = 3;

canvas.addEventListner("mousedown", my_mousedown);

function my_mousedown(e){

    color = document.getElementById("color").value;

    width = document.getElementById("width").value;

    mouseEvent = mouseDown;
}

function my_mousemove(e){

    current_position_of_mouse_X = e.clientX - canvasoffsetLeft;
    current_position_of_mouse_Y = e.clientY - canvasoffsetTop;

    if(mouseEvent == "mouseDown"){

        console.log("Current position of x and y cordinates =");
        console.log("x =" + current_position_of_mouse_X + "y =" + current_position_of_mouse_Y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_X, 0, 2 * Math.PI);
        ctx.stroke;
    }

}
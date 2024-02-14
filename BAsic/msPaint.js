const canvas = document.getElementById("paint-canvas");
let ctx = canvas.getContext("2d");

// defining variable for storing selected tools among pencil and eraser
let currentTool = "pencil";
// defining a boolean variable for storing status of drawing
let isDrawing = false;

// function to handle tool selection
document.getElementById("pencil").addEventListener("click", function () {
    currentTool = "pencil";
});

document.getElementById("erasor").addEventListener("click", function () {
    currentTool = "erasor";
});

function handleMouseDown(event) {
    isDrawing = true;
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.client - rect.top;
    console.log("start:", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function handleMouseMove(event) {
    if (isDrawing) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        
        ctx.lineTo(x, y);
        ctx.strokeStyle=currentTool=="erasor"?"white":"red";
        ctx.stroke();
    }
}

function handleMouseUp(event) {
    isDrawing = false;
}

// Adding events
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);

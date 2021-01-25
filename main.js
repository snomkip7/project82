canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//blue circle
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(300, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
//black circle
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(406, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
//red circle
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(512, 200, 50, 0, 2 * Math.PI);
ctx.stroke();
//yellow circle
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(353, 262, 50, 0, 2 * Math.PI);
ctx.stroke();
//green circle
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(462, 262, 50, 0, 2 * Math.PI);
ctx.stroke();
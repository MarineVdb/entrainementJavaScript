var monCanvas=document.getElementById("canvas");
var ctx = monCanvas.getContext("2d");
ctx.lineWidth="6";
ctx.strokeStyle="green";

//Corps
ctx.beginPath(); 
ctx.moveTo(150, 200);
ctx.lineTo(500, 200);
ctx.arc(350, 200, 150, 0, Math.PI, true);
ctx.moveTo(550, 150);

//Tete 
ctx.arc(550, 150, 50, 0, 2*Math.PI);

//Pattes 
ctx.moveTo(250, 210);
ctx.arc(250, 210, 10, 0, 2*Math.PI);
ctx.moveTo(450, 210);
ctx.arc(450, 210, 10, 0, 2*Math.PI);

//Remplissage
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
ctx.closePath();



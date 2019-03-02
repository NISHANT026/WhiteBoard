
window.onload = function() {

 PenS= "8";
 PenC= document.getElementById("col").value;
var tom="#fff";
var myCanvas = document.getElementById("myCanvas");
	 ctx = myCanvas.getContext("2d");
    
    // Fill Window Width and Height
    myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerHeight;

	// Set Background Color
	
	 ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
  // Mouse Event Handlers
	if(myCanvas){
		var isDown = false;
		var canvasX, canvasY;
		ctx.lineWidth = document.getElementById("Size").value;

		$(myCanvas).mousedown(function(e){
		
			isDown = true;
			ctx.beginPath();

			canvasX = e.pageX - myCanvas.offsetLeft;
			canvasY = e.pageY - myCanvas.offsetTop;
			ctx.moveTo(canvasX, canvasY);
		})
		.mousemove(function(e){
			if(isDown !== false) {
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.lineTo(canvasX, canvasY);
				ctx.strokeStyle = PenC;
				ctx.stroke();
			}
		})
        .mouseup(function(e){
			isDown = false;
			ctx.closePath();
		});
	}
	
	// Touch Events Handlers
	draw = {
		started: false,
		start: function(evt) {

			ctx.beginPath();
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function(evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				ctx.strokeStyle = PenC;
				ctx.lineWidth = 5;
				ctx.stroke();
			}

		},
		end: function(evt) {
			this.started = false;
		}
	};
	
	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);
	
	// Disable Page Move
	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},false);
};
function New(){
		var myCanvas = document.getElementById("myCanvas");
	var ct = myCanvas.getContext("2d");
	ct.clearRect(0,0,myCanvas.width,myCanvas.height);

	}
	function fun() {
		PenC="#fff";
	}
	function Pen(){
		PenC=document.getElementById("col").value;
	}
function Change(){
	 ctx.lineWidth= document.getElementById("Size").value;
}
function Color() {
	// ctx.strokeStyle= document.getElementById("col").value;
	Pen();
}
function download(){
var dt=myCanvas.toDataURL();
this.href=dt;
}
document.getElementById("download").addEventListener("click",download,false)
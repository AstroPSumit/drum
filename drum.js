sdocument.addEventListener("keypress", function(event) {keycompare(event.key);}); 
var target = document.querySelectorAll("button");
var i = 0;
for (i = 0; i<6; i++) {
target[i].addEventListener("click", function() {keycompare((this.innerHTML).toLowerCase()); buttonAnimation((this.innerHTML))});
					  }
  	function keycompare(value) {
 	switch(value) {
 	case "a":
 	//alert("HEY A");
 	var audio1 = new Audio("A.wav");
 	audio1.play();
 	break;
 	case "b":
 	var audio2 = new Audio("B.wav");
 	audio2.play();
 	//alert("HEY B");
 	break;
 	case "c":
 	var audio3 = new Audio("C.wav");
 	audio3.play();
  	//alert("HEY C");
  	var audio4 = new Audio("D.wav");
  	audio4.play();
 	break;
 	case "d":
 	var audio5 = new Audio("E.wav");
 	audio5.play();
 	//alert("HEY D");
 	break;
 	case "e":
 	var audio6 = new Audio("F.wav");
 	audio6.play();
 	//alert("HEY E");
 	break;
 	case "f":
 	var audio7 = new Audio("G.wav");
 	audio7.play();
 	//alert("HEY F");
 	break;
 	default:
 	}
 	}
 	function buttonAnimation(btn)
 	{ var butn = "." + btn;
 	document.querySelector(butn).classList.add("pressed");
 	setTimeout(function() {document.querySelector(butn).classList.remove("pressed");}, 100);
 	}
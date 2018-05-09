function calcoloArea(){
	var r = document.forms.c.r.value;
	var cerchio = r * r * Math.PI;
	document.getElementById("area").innerHTML = "Area = " + cerchio;
}

function calcoloCirconferenza(){
	var r = document.forms.c.r.value;
	var circ = r * 2 * Math.PI;
	document.getElementById("misuraCirconferenza").innerHTML = "Circonferenza = " + circ;
}

function annulla(){
	document.getElementById("area").innerHTML = "" ;
	document.getElementById("misuraCirconferenza").innerHTML = "" ;
}

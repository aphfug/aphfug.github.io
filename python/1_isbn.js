function clic() { 
	var code = prompt("quel sont les douzes premiers chiffres du code ? sans tiré et sans espace");
	alert(code);
}

var boutonElt = document.getElementById("execute");

boutonElt.addEventListener("click", clic);
function menu(){
	document.getElementById('themenu').innerHTML="<a href='#' onClick='calcoli();'>Calcoli</a> | <a href='ListaProgrammi()'>Lista Programmi</a>";
	}
function calcoli() {
	document.getElementById('menucalcoli').innerHTML="<a href='#' onClick='TeoremadiPitagora();'>Teorema Pitagora</a> | <a href='#' onClick='CalcoloProporzioni();'>Calcolo Proporzioni</a>";
	}	
function TeoremadiPitagora() {
	document.getElementById('operazioni').innerHTML='<IFRAME src="programmi/TeoremadiPitagora/TeoremadiPitagora.html" width="2000" height="2000px" scrolling="no" frameborder="0">';
	
	}

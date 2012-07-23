function calcoloTeoremaPitagora() {
	var base = document.calcoloipotenusa.base.value;
	var altezza = document.calcoloipotenusa.altezza.value;
	var sommavalori = (base*base)+(altezza*altezza);
	var risultato=Math.sqrt(sommavalori);
	var stampavalore=document.getElementById("risultatocalcolo")
	stampavalore.innerHTML="Il tuo lato &egrave di: "+risultato;
}

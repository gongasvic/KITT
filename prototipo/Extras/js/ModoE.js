/*
est: estado actual
est=0 -> desactivado
est=1 -> modo eco
est=2 -> modo sport
*/

var est=0;

function showStat(u) {
	alert(est);
	alert(u);
    switch (u) {
        case 1:
			if (document.getElementById("act/Economico/Desportivo").value == "act") {
				document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
				document.getElementById("Desportivo/des").style.display = "block";
				document.getElementById("Desportivo/des").value = "Desportivo";
				document.getElementById("des").style.display = "block";
				document.getElementById("act/Economico/Desportivo").value = "Economico";
				break;
			}
			if (document.getElementById("act/Economico/Desportivo").value == "Economico") {
				document.getElementById("act").innerHTML = "<h3>Activado: <em>Economico</em></h3>"
				document.getElementById("act/Economico/Desportivo").innerHTML = "Desportivo";
				document.getElementById("Desportivo/des").innerHTML = "Desativar";
				document.getElementById("des").style.display = "none";
				document.getElementById("act/Economico/Desportivo").value = "Desportivo";
				document.getElementById("Desportivo/des").value = "des";
				est=1;
				setCookie("Estadot",est,1);
				break;
			}
			if (document.getElementById("act/Economico/Desportivo").value == "Desportivo"){
				document.getElementById("act").innerHTML = "<h3>Activado: <em>Desportivo</em></h3>"
				document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
				document.getElementById("Desportivo/des").innerHTML = "Desativar";
				document.getElementById("des").style.display = "none";
				document.getElementById("act/Economico/Desportivo").value = "Economico";
				est=2;
				setCookie("Estadot",est,1);
				break;
			}
        case 2:
			if (document.getElementById("Desportivo/des").value == "Desportivo"){
				document.getElementById("act").innerHTML = "<h3>Activado: <em>Desportivo</em></h3>"
				document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
				document.getElementById("Desportivo/des").innerHTML = "Desativar";
				document.getElementById("des").style.display = "none";
				document.getElementById("Desportivo/des").value = "des";
				est=2;
				setCookie("Estadot",est,1);
				break;
			}
			if (document.getElementById("Desportivo/des").value == "des"){
				document.getElementById("act").innerHTML = "";
				document.getElementById("act/Economico/Desportivo").innerHTML = "Ativar";
				document.getElementById("Desportivo/des").style.display = "none";
				document.getElementById("des").style.display = "none";
				document.getElementById("Desportivo/des").innerHTML = "Desportivo";
				document.getElementById("act/Economico/Desportivo").value = "act";
				document.getElementById("Desportivo/des").value = "Desportivo";
				est=0;
				setCookie("Estadot",est,1);
				break;
			}
		case 3: 
			document.getElementById("act").innerHTML = "";
			document.getElementById("act/Economico/Desportivo").innerHTML = "Ativar";
			document.getElementById("Desportivo/des").style.display = "none";
			document.getElementById("des").style.display = "none";
			document.getElementById("act/Economico/Desportivo").value = "act";
			break;
        default:
            break;
    }
}

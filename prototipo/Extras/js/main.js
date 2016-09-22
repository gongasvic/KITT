var ajuda=0,i=0, z=0, k=0, n = 0, bAct = 1, est=0, acidos=0;

var BlockMenus = 0;

var MenuAlerta = document.getElementsByClassName("botaoInterno1");
var MenuPainel = document.getElementsByClassName("botaoInterno2");
var MenuAjusta = document.getElementsByClassName("botaoInterno3");

function MostraOpcoes(arg){
	switch(arg){
		case 0:
			location.href = "Estrutura_work/Andamento/index.html";
			break;
		case 1:
            if(acidos != 1){
                document.getElementById("act").innerHTML = "";
                document.getElementById("act/Economico/Desportivo").innerHTML = "Ativar";
                document.getElementById("Desportivo/des").style.display = "none";
                document.getElementById("des").style.display = "none";
                document.getElementById("act/Economico/Desportivo").value = "act";
            }
        	MenuAlerta[0].style.display="block";
            if(acidos == 1)
                MenuAlerta[1].style.display="block";
            MenuAlerta[3].style.display="block"; //config
			break;
		case 2:
			MenuPainel[0].style.display="block";
			MenuPainel[1].style.display="block";
			break;
		case 3:
			for(var d=0;d<document.getElementsByClassName("botaoInterno3").length;d++)
				MenuAjusta[d].style.display="block";
			break;
		case 4: 
            if(!getCookie("virgem"))
                setCookie("virgem",0,1);
			Alert.render('Ajuda','Utilize as setas para cima e para baixo para navegar, o botão "enter" para selecionar a opção e o botão "shift" para navegar para trás');
            BlockMenus=1;
			break;
	}
}

/*------------------*/

function hideOpcoes(arg){
	if(arg==1){
		for(var k=0;k<nr_subMenu_alerta;k++)
			List_subMenu_alerta[k].className="botaoInterno1";
	}
	if(arg==2){
		for(var k=0;k<nr_subMenu_painel;k++)
			List_subMenu_painel[k].className="botaoInterno2";
	}
	if(arg==3){
		for(var k=0;k<nr_subMenu_ajustes;k++)
			List_subMenu_ajustes[k].className="botaoInterno3";
	}
	switch(arg){
		case 1:
			for(var l=0;l<4;l++)
				MenuAlerta[l].style.display="none";
			break;
		case 2:
			MenuPainel[0].style.display="none";
			MenuPainel[1].style.display="none";
			break;
		case 3:
			for(var d=0;d<document.getElementsByClassName("botaoInterno3").length;d++)
				MenuAjusta[d].style.display="none";
			break;
	}
}

function showInfo(){
	document.getElementById("txtinfo").style.display = "block";
}

function hideInfo(){
	document.getElementById("txtinfo").style.display = "none";
}
/*
est: estado actual
est=0 -> desactivado
est=1 -> modo eco
est=2 -> modo sport
*/
function showStat(u) {
    switch (u) {
        case 1:
            if (document.getElementById("act/Economico/Desportivo").value == "act") {
                document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
                document.getElementById("Desportivo/des").style.display = "block";
                document.getElementById("Desportivo/des").value = "Desportivo";
                document.getElementById("des").style.display = "block";
                document.getElementById("act/Economico/Desportivo").value = "Economico";
                acidos = 2;

                break;
            }
            if (document.getElementById("act/Economico/Desportivo").value == "Economico") {
                document.getElementById("act").innerHTML = "<h3>Activado: <em>Economico</em></h3>"
                document.getElementById("act/Economico/Desportivo").innerHTML = "Desportivo";
                document.getElementById("Desportivo/des").innerHTML = "Desativar";
                document.getElementById("Desportivo/des").style.display = "block";
                document.getElementById("des").style.display = "none";
                document.getElementById("act/Economico/Desportivo").value = "Desportivo";
                document.getElementById("Desportivo/des").value = "des";
                setCookie("Estadot",1,1);
                acidos = 1;
                break;
            }
            if (document.getElementById("act/Economico/Desportivo").value == "Desportivo"){
                document.getElementById("act").innerHTML = "<h3>Activado: <em>Desportivo</em></h3>"
                document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
                document.getElementById("Desportivo/des").style.display = "block";
                document.getElementById("Desportivo/des").innerHTML = "Desativar";
                document.getElementById("des").style.display = "none";
                document.getElementById("act/Economico/Desportivo").value = "Economico";
                setCookie("Estadot",2,1);
                acidos = 1;
                break;
            }
        case 2:
            if (document.getElementById("Desportivo/des").value == "Desportivo"){
                document.getElementById("act").innerHTML = "<h3>Activado: <em>Desportivo</em></h3>"
                document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
                document.getElementById("Desportivo/des").innerHTML = "Desativar";
                document.getElementById("des").style.display = "none";
                document.getElementById("Desportivo/des").value = "des";
                setCookie("Estadot",2,1);
                acidos = 1;
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
                setCookie("Estadot",0,1);
                acidos = 0;
                break;
            }
        case 3: 
            document.getElementById("act").innerHTML = "";
            document.getElementById("act/Economico/Desportivo").innerHTML = "Ativar";
            document.getElementById("Desportivo/des").style.display = "none";
            document.getElementById("des").style.display = "none";
            document.getElementById("act/Economico/Desportivo").value = "act";
            setCookie("Estadot",0,1);
            acidos = 0;
            break;
        default:
            break;
    }
}



function stats(){
    var a = getCookie("Estadot");
    if(a ==1){
        document.getElementById("act").innerHTML = "<h3>Activado: <em>Economico</em></h3>"
        document.getElementById("act/Economico/Desportivo").innerHTML = "Desportivo";
        document.getElementById("Desportivo/des").innerHTML = "Desativar";
        document.getElementById("des").style.display = "none";
        document.getElementById("act/Economico/Desportivo").value = "Desportivo";
        document.getElementById("Desportivo/des").value = "des";
        acidos = 1;
    }
    if (a == 2) {
        document.getElementById("act").innerHTML = "<h3>Activado: <em>Desportivo</em></h3>"
        document.getElementById("act/Economico/Desportivo").innerHTML = "Economico";
        document.getElementById("Desportivo/des").innerHTML = "Desativar";
        document.getElementById("des").style.display = "none";
        document.getElementById("act/Economico/Desportivo").value = "Economico";
        acidos = 1;
    }
}

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++){
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function getvalP(){
    var a = getCookie("PAINEL");
    return parseInt(a);
}


/*fazer para verificar se esta algo activo
function statModo(){
    var b=getvalE().length;
    if(!isNaN(b)){
        switch(b){
			case 3:
                eco = 1;
                document.getElementById("act").innerHTML = "<h3>Activado: <em>Eco</em></h3>";
                document.getElementById("eco").innerHTML = "Sport";
                document.getElementById("sport").innerHTML = "Desactivar";
                document.getElementById("des").style.visibility = "hidden";
                break;
            case 5:
                sport = 1
                document.getElementById("act").innerHTML = "<h3>Activado: <em>Sport</em></h3>";
                document.getElementById("sport").innerHTML = "Desactivar";
                document.getElementById("eco").style.visibility = "visible";
                document.getElementById("des").style.visibility = "hidden";
                break;
            default:
                document.getElementById("act").innerHTML = "";
                document.getElementById("eco").innerHTML = "Eco";
                document.getElementById("des").style.visibility = "visible";
                document.getElementById("sport").style.visibility = "visible";
                active = 0;
                i = 1;
                showInfo();
        }
        active = 0;
    }

}
*/



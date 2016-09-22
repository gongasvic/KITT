var i=0, z=0, k=0, n = 0, bAct = 0, est=0;
var Liq = document.getElementsByClassName("liquid");
var Press = document.getElementsByClassName("pressao");
var Temp = document.getElementsByClassName("temp");
var Oleo = document.getElementsByClassName("oleo");
var Luz = document.getElementsByClassName("luzes");

var acidos=0;

var MenuAlerta = document.getElementsByClassName('botaoInterno1');
var MenuPainel = document.getElementsByClassName('botaoInterno2');
var MenuAjusta = document.getElementsByClassName('botaoInterno3');

function MostraOpcoes(arg){
    switch(arg){
		case 0:
			MenuAlerta[0].style.display="block";
            if(acidos >= 1)
                MenuAlerta[1].style.display="block";
            MenuAlerta[acidos].style.display="block";
			break;
		case 1:
			MenuPainel[0].style.display="block";
			break;
		case 2:
			MenuAjusta[0].style.display="block";
			MenuAjusta[1].style.display="block";
			break;
    }
}

function hideOpcoes(arg){
	if(arg==0){
		for(var k=0;k<nr_subMenu_alerta;k++)
			List_subMenu_alerta[k].className="botaoInterno1";
	}
	if(arg==1){
		for(var k=0;k<nr_subMenu_painel;k++)
			List_subMenu_painel[k].className="botaoInterno2";
	}
	if(arg==2){
		for(var k=0;k<nr_subMenu_ajustes;k++)
			List_subMenu_ajustes[k].className="botaoInterno3";
	}
	switch(arg){
		case 0:
			for(var l=0;l<document.getElementsByClassName("botaoInterno1").length;l++)
				MenuAlerta[l].style.display="none";
			break;
		case 1:
			MenuPainel[0].style.display="none";
			break;
		case 2:
			for(var d=0;d<document.getElementsByClassName("botaoInterno3").length;d++)
				MenuAjusta[d].style.display="none";
			break;
	}
}


function viewtable(){
    bAct = parseInt(getCookie("PAINELt"));
    if(bAct){
        document.getElementById("Activate").innerHTML = "Desactivar";
        showTable();
        }
    else{
        document.getElementById("Activate").innerHTML = "Activar";
        hideTable();
        }

    stats();
}

function tabela() {
    if( bAct == 0){
        setCookie( "PAINELt",1,1);
        document.getElementById("Activate").innerHTML = "Desactivar";
        showTable();
        bAct = 1;
    }
    else{
        setCookie( "PAINELt",0,1);
        document.getElementById("Activate").innerHTML = "Activar";
        hideTable();
        bAct = 0;
    }
}


function showTable(){
    var g=getCookie("painel");
    if(g != ""){

        var h=g.split(':');
        var i = 0;

        var a = parseInt(h[i].trim());
        i++;
        var b = parseInt(h[i].trim());
        i++;
        var c = parseInt(h[i].trim());
        i++;
        var  d = parseInt(h[i].trim());
        i++;
        var f = parseInt(h[i].trim());
    }

    if(a == 0){
        for(var i = 0; i < 2; i++)
            Oleo[i].style.display = "none";

    }
    if(b == 0){
        for(var i = 0; i < 2; i++)
            Luz[i].style.display = "none";
    }
    if(c == 0){
        for(var i = 0; i < 2; i++)
            Press[i].style.display = "none";
    }
    if(d == 0){
        for(var i = 0; i < 2; i++)
            Liq[i].style.display = "none";
    }
    if(f == 0){
        for(var i = 0; i < 2; i++)
            Temp[i].style.display = "none";
    }
    var Table = document.getElementsByClassName('painel');
    Table[0].style.display = 'block';
}

function hideTable(){
    var Table = document.getElementsByClassName('painel');
    Table[0].style.display = 'none';
}


//-------------------*/


function showInfo(){
    if(i == 0){
        document.getElementById("txtinfo").style.visibility = "visible";
        i++;
    }
    else{
        document.getElementById("txtinfo").style.visibility = "hidden";
        i--;
    }
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
            acidos = 0;
            setCookie("Estadot",0,1);
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
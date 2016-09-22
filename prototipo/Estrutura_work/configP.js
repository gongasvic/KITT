var a=1,b=1,c=1,d=1,f=1;
var bAct;

var Liq = document.getElementsByClassName("liquid");
var Press = document.getElementsByClassName("pressao");
var Temp = document.getElementsByClassName("temp");
var Oleo = document.getElementsByClassName("oleo");
var Luz = document.getElementsByClassName("luzes");

var theColor = document.getElementsByClassName("on_off");

function visib(u){
	switch(u){
		case 1:
			if (a==1){
				document.getElementById("vis3").innerHTML = "✕";
				theColor[0].style.color = "#FD0000";
				a=0;
				break;
			}
			else {
				document.getElementById("vis3").innerHTML = "✓";
				theColor[0].style.color = "#02D800";
				a=1;
				break;
			}
		case 2:
			if(b==1){
				document.getElementById("vis5").innerHTML = "✕";
				theColor[1].style.color = "#FD0000";
				b=0;
				break;
			}
			else{
				document.getElementById("vis5").innerHTML = "✓";
				theColor[1].style.color = "#02D800";
				b=1;
				break;
				}
		case 3:
			if(c==1){
				document.getElementById("vis1").innerHTML = "✕";
				theColor[2].style.color = "#FD0000";
				c=0;
				break;
			}
			else {
				document.getElementById("vis1").innerHTML = "✓";
				theColor[2].style.color = "#02D800";
				c=1;
				break;
			}
		case 4:
			if(d==1){
				document.getElementById("vis4").innerHTML = "✕";
				theColor[3].style.color = "#FD0000";
				d=0;
				break;
			}
			else {
				document.getElementById("vis4").innerHTML = "✓";
				theColor[3].style.color = "#02D800";
				d=1;
				break;
			}
		case 5:
			if(f==1){
				document.getElementById("vis2").innerHTML = "✕"
				theColor[4].style.color = "#FD0000";
				f=0;
				break;
			}
			else {
				document.getElementById("vis2").innerHTML = "✓";
				theColor[4].style.color = "#02D800";
				f=1;
				break;
			}
		default:
			break;
	}
}


//Cooooooooooookies

function setCookie1(cname,cvalue,exdays){
    var h = new Date();
    h.setTime(h.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+h.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie1(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++){
        var h = ca[i].trim();
        if (h.indexOf(name)==0) 
        	return h.substring(name.length,h.length);
    }
    return "";
}

function viewstatus(){
	var g = getCookie("painel");
	if(g != ""){

		var h=g.split(':');
		var i = 0;

		a = parseInt(h[i].trim());
    	i++;
    	b = parseInt(h[i].trim());
    	i++;
    	c = parseInt(h[i].trim());
    	i++;
    	d = parseInt(h[i].trim());
    	i++;
    	f = parseInt(h[i].trim());
    	i++;

    	a?document.getElementById("vis3").innerHTML = "✓":document.getElementById("vis3").innerHTML = "✕";
    	!a?theColor[0].style.color = "#FD0000": theColor[0].style.color = "#02D800";
    	!a?a=0:a=1;
    	b?document.getElementById("vis5").innerHTML = "✓":document.getElementById("vis5").innerHTML = "✕";
    	!b?theColor[1].style.color = "#FD0000": theColor[1].style.color = "#02D800";
    	!b?b=0:b=1;
    	c?document.getElementById("vis1").innerHTML = "✓":document.getElementById("vis1").innerHTML = "✕";
    	!c?theColor[2].style.color = "#FD0000": theColor[2].style.color = "#02D800";
    	!c?c=0:c=1;
    	d?document.getElementById("vis4").innerHTML = "✓":document.getElementById("vis4").innerHTML = "✕";
    	!d?theColor[3].style.color = "#FD0000" : theColor[3].style.color = "#02D800";
    	!d?d=0:d=1;
    	f?document.getElementById("vis2").innerHTML = "✓":document.getElementById("vis2").innerHTML = "✕";
    	!f?theColor[4].style.color = "#FD0000" : theColor[4].style.color = "#02D800";
    	!f?f=0:f=1;
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

		a = parseInt(h[i].trim());
    	i++;
    	b = parseInt(h[i].trim());
    	i++;
    	c = parseInt(h[i].trim());
    	i++;
    	d = parseInt(h[i].trim());
    	i++;
    	f = parseInt(h[i].trim());
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

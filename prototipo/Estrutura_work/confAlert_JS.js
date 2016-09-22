var i=0, j=0;

function hideMenu(){
	j=0;
	i=0;
	document.getElementById('buraco').style.display='none';
	document.getElementById('curvas_perigosas').style.display='none';
	document.getElementById('intersecoes').style.display='none';
	document.getElementById('lencois_agua').style.display='none';
	document.getElementById('semaforos').style.display='none';
}

function showMenu(arg){
	switch(arg){
		case 1:
			viewstatus(arg);
			document.getElementById('buraco').style.display='list-item';
			break;
		case 2:
			viewstatus(arg);
			document.getElementById("curvas_perigosas").style.display='list-item';
			break;
		case 3:
			viewstatus(arg);
			document.getElementById("intersecoes").style.display='list-item';
			break;
		case 4:
			viewstatus(arg);
			document.getElementById("lencois_agua").style.display='list-item';
			break;
		case 5:
			viewstatus(arg);
			document.getElementById("semaforos").style.display='list-item';
			break;
		default:
			break;
	}
}

function myFunction(){
	var a = document.getElementById('IE').value+":"+document.getElementById('IS').value;
	var b = document.getElementById('BE').value+":"+document.getElementById('BS').value;
	var c = document.getElementById('SE').value+":"+document.getElementById('SS').value;
	var d = document.getElementById('CE').value+":"+document.getElementById('CS').value;
	var e = document.getElementById('LE').value+":"+document.getElementById('LS').value;
	setCookie("intersecoes",a,1);
	setCookie("buraco",b,1);
	setCookie("semaforos",c,1);
	setCookie("curvas",d,1);
	setCookie("lencois",e,1);
}


function viewstatus(c){

	switch(c){
		case 1:
			var g = getCookie("buraco");
			if(g != ""){
				var h= g.split(':');
				var i = 0;

				var a = parseInt(h[i].trim());
    			i++;
    			var b = parseInt(h[i].trim());
    			document.getElementById("BS").value = b;
    			document.getElementById("BE").value = a;
    		}
    		break;
		case 3:
    		var g = getCookie("intersecoes");
			if(g != ""){
				var h= g.split(':');
				var i = 0;

				var a = parseInt(h[i].trim());
    			i++;
    			var b = parseInt(h[i].trim());
    			document.getElementById("IS").value = b;
    			document.getElementById("IE").value = a;
    			break;
    		}
    		break;
		case 2:
    		var g = getCookie("curvas");
			if(g != ""){
				var h= g.split(':');
				var i = 0;

				var a = parseInt(h[i].trim());
    			i++;
    			var b = parseInt(h[i].trim());
    			document.getElementById("CS").value = b;
    			document.getElementById("CE").value = a;
			}
    		
   			break;
    	case 5:
    		var g = getCookie("semaforos");
			if(g != ""){
				var h= g.split(':');
				var i = 0;

				var a = parseInt(h[i].trim());
    			i++;
    			var b = parseInt(h[i].trim());
    			document.getElementById("SS").value = b;
    			document.getElementById("SE").value = a;
    		}
			break;
    	case 4:
    		var g = getCookie("lencois");
			if(g != ""){
				var h= g.split(':');
				var i = 0;

				var a = parseInt(h[i].trim());
    			i++;
    			var b = parseInt(h[i].trim());
    			document.getElementById("LS").value = b;
    			document.getElementById("LE").value = a;
    		}  		
    		break;
    	default:
    		break;
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
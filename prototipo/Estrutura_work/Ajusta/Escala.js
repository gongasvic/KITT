var limInferior=-3;
var limSuperior=3;
var escalaAtual=0;
var escala=100;

var vecEscala = [70,80,90,100,110,120,130];
var font = [10,11,12,13,14,15,16];



function text(scale){

/**/if(escalaAtual>limInferior && escalaAtual<limSuperior){
        var teste = document.getElementsByName("botao");
        for(var i=0; i<teste.length; i++){
            var style = window.getComputedStyle(teste[i], null).getPropertyValue('font-size');
            var fontSize = parseFloat(style); 
            teste[i].style.fontSize = (fontSize + scale) + 'px';
        }
        var body = document.body;
        var fs = ( body.currentStyle || ( window.getComputedStyle && getComputedStyle ( body , null )) || body.style ).fontSize;
        var fontSize = parseFloat(fs);
        fontSize += scale;
        document.body.style.fontSize = fontSize+"px";
        if(scale==-1){ 
            escalaAtual--; 
            document.getElementById("tamEscala").textContent = "Escala Atual: "+ vecEscala[escalaAtual+3] +'%';
            }
        if(scale==1){ 
            escalaAtual++;
            document.getElementById("tamEscala").textContent = "Escala Atual: "+ vecEscala[escalaAtual+3] +'%';}
        }
/**/if(escalaAtual==limInferior && scale==1){
        var teste = document.getElementsByName("botao");
        for(var i=0; i<teste.length; i++){
            var style = window.getComputedStyle(teste[i], null).getPropertyValue('font-size');
            var fontSize = parseFloat(style); 
            teste[i].style.fontSize = (fontSize + scale) + 'px';
        }
        var body = document.body;
        var fs = ( body.currentStyle || ( window.getComputedStyle && getComputedStyle ( body , null )) || body.style ).fontSize;
        var fontSize = parseFloat(fs);
        fontSize += scale;
        document.body.style.fontSize = fontSize+"px";
        escalaAtual++;
        document.getElementById("tamEscala").textContent = "Escala Atual: "+ vecEscala[escalaAtual+3] +'%';
        }
/**/if(escalaAtual==limSuperior && scale==-1){
        var teste = document.getElementsByName("botao");
        for(var i=0; i<teste.length; i++){
            var style = window.getComputedStyle(teste[i], null).getPropertyValue('font-size');
            var fontSize = parseFloat(style); 
            teste[i].style.fontSize = (fontSize + scale) + 'px';
        }
        var body = document.body;
        var fs = ( body.currentStyle || ( window.getComputedStyle && getComputedStyle ( body , null )) || body.style ).fontSize;
        var fontSize = parseFloat(fs);
        fontSize += scale;
        document.body.style.fontSize = fontSize+"px";
        escalaAtual--;
        document.getElementById("tamEscala").textContent = "Escala Atual: "+ vecEscala[escalaAtual+3] +'%';
        }
    avisoLimite(escalaAtual);
    setCookie("escala",escalaAtual);
}

function avisoLimite(index){
	if(index==limInferior){
		Alert.render('Aviso!','Atingiu o tamanho mínimo.');
		BlockMenus=1;
	}
	if(index==limSuperior){
		Alert.render('Aviso!','Atingiu o tamanho máximo.');
		BlockMenus=1;
	}
}

/*escala.html */
function viewEscala(){
    var a = getCookie("escala");
    if(a != "" && a != 'NaN'){
        escalaAtual = parseInt(a);
        escala = vecEscala[escalaAtual+3];
        fontSize = font[escalaAtual+3];
        document.body.style.fontSize = fontSize+"px";
    }
    a=parseInt(a);
    document.getElementById("tamEscala").textContent = "Escala Atual: "+ vecEscala[a+3] +'%';
}
window.onload = viewEscala;
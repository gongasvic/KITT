var aClasseAltura=document.getElementsByClassName("botaoInterno1");
var aClasseCostas=document.getElementsByClassName("botaoInterno2");
var aClasseDistancia=document.getElementsByClassName("botaoInterno3");
var alturaFotos=document.getElementsByClassName("altura");
var costasFotos=document.getElementsByClassName("costas");
var distanciaFotos=document.getElementsByClassName("distancia");
var nrFotos = 3;
var tamanhoGlobal = 2;
function showOpcoes(arg){
    switch(arg){
		case 0:
			document.getElementById("alt").style.display = "block";
			for(i=0;i<tamanhoGlobal;i++){
				aClasseAltura[i].style.display = "inline";
			}
			document.getElementById("altura0").style.display="inline";
			dentroMenu=1;
			selecionado = List_subMenu_altura[0];
			selecionado.className = 'selecaoAtiva full';
			break;
        case 1:	
			document.getElementById("cost").style.display = "block";
			for(i=0;i<tamanhoGlobal;i++){
				aClasseCostas[i].style.display = "inline";
			}
			document.getElementById("costas_normal").style.display="inline";
			dentroMenu=1;
			selecionado = List_subMenu_costas[0];
			selecionado.className = 'selecaoAtiva full';
			break;
        case 2:
			document.getElementById("dist").style.display = "block";
			aClasseDistancia[0].style.display = "inline";
			aClasseDistancia[1].style.display = "inline";
			document.getElementById("dis_normal").style.display="inline";
			dentroMenu=1;
			selecionado = List_subMenu_distancia[0];
			selecionado.className = 'selecaoAtiva full';
			break;
		case 3:
			document.getElementById("posXxx").style.display="inline";
			dentroMenu=1;
			break;
		case 4:
			if(BlockMenus){
				Alert.ok();
				showMenus(topoMenu);
				BlockMenus=0;
				break;
			}
			else{		
				Alert.render('Ajuda','Costas para ajustar o ângulo, menu distância para ajustar a distância entre os pedais ao banco e menu altura para ajustar a altura do banco'); 
				BlockMenus=1;
				break;
			}
	}		
}

function hideOpcoes(topoMenu){
	switch(topoMenu){
		case 0:
			for(var p=0;p<tamanhoGlobal;p++){
				List_subMenu_altura[p].className = 'botaoInterno1';	
				aClasseAltura[p].style.display = "none";
			}
			for(var i=0;i<nrFotos;i++)
				alturaFotos[i].style.display="none";
			break;
		case 1:
			for(var p=0;p<tamanhoGlobal;p++){
				List_subMenu_costas[p].className = 'botaoInterno2';	
				aClasseCostas[p].style.display = "none";
			}
			for(var i=0;i<nrFotos;i++)
				costasFotos[i].style.display="none";
			break;
		case 2:
			for(var p=0;p<tamanhoGlobal;p++){
				List_subMenu_distancia[p].className = 'botaoInterno3';	
				aClasseDistancia[p].style.display = "none";
			}
			for(var i=0;i<nrFotos;i++)
				distanciaFotos[i].style.display="none";
			break;
		case 3:
			document.getElementById("posXxx").style.display="none";
			break;
	}
}

function Frente(arg){
	switch(arg){
		//ajustar costas
		case 1:
			for(var i=0;i<nrFotos;i++)
				costasFotos[i].style.display="none";
			document.getElementById("costas_frente").style.display="inline";
			break;
		//ajustar distancia
		case 2:
			for(var i=0;i<nrFotos;i++)
				distanciaFotos[i].style.display="none";
			document.getElementById("dis_frente").style.display="inline";
			break;
	}		
}

function Trás(arg){
	switch(arg){
		//ajustar costas
		case 1:
			for(var i=0;i<nrFotos;i++)
				costasFotos[i].style.display="none";
			document.getElementById("costas_tras").style.display="inline";
			break;
		//ajustar distancia
		case 2:
			for(var i=0;i<nrFotos;i++)
				distanciaFotos[i].style.display="none";
			document.getElementById("dis_tras").style.display="inline";
			break;
	}		
}

function Cima(){
	for(var i=0;i<nrFotos;i++)
		alturaFotos[i].style.display="none";
	document.getElementById("altura2").style.display="inline";
}

function Baixo(){
	for(var i=0;i<nrFotos;i++)
		alturaFotos[i].style.display="none";
	document.getElementById("altura1").style.display="inline";
}
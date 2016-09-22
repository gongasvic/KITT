var aClasseEsquerda=document.getElementsByClassName("botaoInterno1");
var aClasseDireita=document.getElementsByClassName("botaoInterno2");
var fotos_esq=document.getElementsByClassName("fotos_esq");
var fotos_dir=document.getElementsByClassName("fotos_dir");
var tamClassFotos = 5;
var AjudaAtivo=0;
function show(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 0:
			document.getElementById("esqNorm").style.display="inline";
			document.getElementById("esq").style.display="block";
			for(var c=0;c<aClasseEsquerda.length;c++)
				aClasseEsquerda[c].style.display="inline";
			dentroMenu=1;
			break;
		//estou no retrovisor direito
		case 1:
			document.getElementById("dirNorm").style.display = 'inline';
			document.getElementById("dir").style.display="block";
			for(var c=0;c<aClasseDireita.length;c++)
				aClasseDireita[c].style.display="inline";
			dentroMenu=1;
			break;
		case 2:
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

function cima(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 1:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_esq[cic].style.display="none";
			document.getElementById("esqCima").style.display="inline";
			break;
		//estou no retrovisor direito
		case 2:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_dir[cic].style.display="none";
			document.getElementById("dirCima").style.display="inline";
			break;
	}	
}

function esquerda(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 1:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_esq[cic].style.display="none";
			document.getElementById("esqesquerda").style.display="inline";
			break;
		//estou no retrovisor direito
		case 2:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_dir[cic].style.display="none";
			document.getElementById("diresquerda").style.display="inline";
			break;
	}	
}

function direita(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 1:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_esq[cic].style.display="none";
			document.getElementById("esqdireita").style.display="inline";
			break;
		//estou no retrovisor direito
		case 2:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_dir[cic].style.display="none";
			document.getElementById("dirdireita").style.display="inline";
			break;
	}	
}
function baixo(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 1:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_esq[cic].style.display="none";
			document.getElementById("esqbaixo").style.display="inline";
			break;
		//estou no retrovisor direito
		case 2:
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_dir[cic].style.display="none";
			document.getElementById("dirbaixo").style.display="inline";
			break;
	}
}
	
function hide(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 0:
			for(var i=0; i<nr_subMenu_esquerdo; i++){
				List_subMenu_esquerdo[i].className = 'botaoInterno1';
				aClasseEsquerda[i].style.display="none";
			}
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_esq[cic].style.display="none";
			break;
		//estou no retrovisor direito
		case 1:
			for(var i=0; i<nr_subMenu_direito; i++){
				List_subMenu_direito[i].className = 'botaoInterno2';
				aClasseDireita[i].style.display="none";
			}
			for(var cic=0;cic<tamClassFotos;cic++)
				fotos_dir[cic].style.display="none";
			break;
	}
}

function ajuda(){
}
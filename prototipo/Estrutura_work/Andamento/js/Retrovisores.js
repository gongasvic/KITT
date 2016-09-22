var aClasseEsquerda=document.getElementsByClassName("botao_interno_1");
var aClasseDireita=document.getElementsByClassName("botao_interno_2");
function muda(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 1:
			document.getElementById("retrovisorE").style.display = 'inline';
			document.getElementById("retrovisorD").style.display = 'none';
			aClasseEsquerda[0].style.display='inline';
			aClasseEsquerda[1].style.display='inline';
			break;
		//estou no retrovisor direito
		case 2:
			document.getElementById("retrovisorD").style.display = 'inline';
			document.getElementById("retrovisorE").style.display = 'none';
			aClasseDireita[0].style.display='inline';
			aClasseDireita[1].style.display='inline';
			break;
	}
}
function esquerda(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		case 1:
			document.getElementById("retrovisorE").src="../../Extras/imagens/retrovisor_esquerdo_virou_esq.png";
		//estou no retrovisor direito
		//case 2:
		//	document.getElementById("retrovisorD").src="../../Extras/imagens/retrovisor_esquerdo_normal.png";
	}	
}

function direita(arg){
	switch(arg){
		//estou no retrovisor esquerdo
		//case 1:
		//	document.getElementById("retrovisorE").src="retrovisor_direito.jpg";
		//estou no retrovisor direito
		case 2:
			document.getElementById("retrovisorD").src="../../Extras/imagens/retrovisor_direito_virou_direita.png";
	}	
}
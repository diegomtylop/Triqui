var contFichas = __('fichas');

document.getElementById('cont-tablero').click = manejadorClick;

var manejadorClick = function(){
	//alert('Hiciste click');
}

function clickAdicionar(){
	//alert('Presionaste el botón');
	var posX, posY, posZ;
	posX = __('pos1').value;
	posY = __('pos2').value;
	posZ = __('pos3').value;

	//alert(posX+' '+posY+' '+posZ);
	adicionarFicha(posX, posY, posZ);
}

/*Método que añade una ficha en las coordenadas indicadas*/
function adicionarFicha( posX, posY, posZ){
	//alert('Adicionarioa');
	var nuevaFicha = document.createElement('div');
	nuevaFicha.className = 'ficha ficha-'+posX+'-'+posY+'-'+posZ;

	contFichas.appendChild(nuevaFicha);


}

function __(idPar){
	return document.getElementById(idPar);
}

function llenarTablero(){
	for( z = 0; z < 3; z++ ){
		for( y = 0; y < 3; y++ ){
			for( x = 0; x < 3; x++){
				if((x+''+y) != '11'){//La posición (1,1) no aplica
					adicionarFicha(x,y,z);
				}
			}
		}
	}
}
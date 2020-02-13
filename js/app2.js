
window.onload = function(){
for (var i=0; i< 64; i++){
    let dive = document.createElement("div");
    dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
    dive.className = "squire";
	dive.id = i;
	dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="blackcircle"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="whitecircle"></div>' : '');
    document.getElementById("mainChessBoard").appendChild(dive);
}
setClick();
}


function setClick(){
for(var i=0; i < 64; i++){
	let currentSquare = document.getElementById(i.toString())
	currentSquare.onclick = function(){
		reset();
		if(currentSquare.innerHTML == '<div class="whitecircle"></div>'){
			document.getElementById(currentSquare.id-9).style.backgroundColor = "yellow";
			document.getElementById(currentSquare.id-7).style.backgroundColor = "yellow";
		}
	}
}
}

function reset(){
	for(var i=0; i<64; i++){
		document.getElementById(i).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
	}
}
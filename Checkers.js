
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
	let currentSquare = document.getElementById(i.toString());
	currentSquare.onclick = function(){
		if(currentSquare.innerHTML == '<div class="whitecircle"></div>'){
			reset();
			var leftSquare = document.getElementById(currentSquare.id-9);
			var rightSquare = document.getElementById(currentSquare.id-7);
			var moreLeft = document.getElementById(currentSquare.id - 18);
			var moreRight = document.getElementById(currentSquare.id - 14);
			if(leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				leftSquare.style.backgroundColor = "yellow";
			}
			else if(leftSquare.innerHTML == '<div class="blackcircle"></div>' && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreLeft.style.backgroundColor = "yellow";
			}
			if(rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				rightSquare.style.backgroundColor = "yellow";
			}
			else if(rightSquare.innerHTML == '<div class="blackcircle"></div>' && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreRight.style.backgroundColor = "yellow";
			}
			currentSquare.style.backgroundColor = "red";
		}
		if(currentSquare.innerHTML == '<div class="blackcircle"></div>'){
			reset();
			var leftSquare = document.getElementById(currentSquare.id - (-9));
			var rightSquare = document.getElementById(currentSquare.id - (-7));
			var moreLeft = document.getElementById(currentSquare.id - (-18));
			var moreRight = document.getElementById(currentSquare.id - (-14));
			console.log(currentSquare.id + 9);
			if(leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
				leftSquare.style.backgroundColor = "yellow";
			}
			else if(leftSquare.innerHTML == '<div class="whitecircle"></div>' && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
				moreLeft.style.backgroundColor = "yellow";
			}
			if(rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
				rightSquare.style.backgroundColor = "yellow";
			}
			else if(rightSquare.innerHTML == '<div class="whitecircle"></div>' && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
				moreRight.style.backgroundColor = "yellow";
			}
			currentSquare.style.backgroundColor = "red";
		}
		if(currentSquare.innerHTML == "" && currentSquare.style.backgroundColor == "yellow"){
			var oldSquare = "";
			for(var i = 0; i < 64; i++){
				if(document.getElementById(i.toString()).style.backgroundColor == "red"){
					oldSquare = document.getElementById(i.toString());
				}
			}
			if(oldSquare.id == currentSquare.id - 18){
				document.getElementById(currentSquare.id - 9).innerHTML = "";
			}
			if(oldSquare.id == currentSquare.id - 14){
				document.getElementById(currentSquare.id - 7).innerHTML = "";
			}
			if(oldSquare.id == currentSquare.id - (-18)){
				document.getElementById(currentSquare.id - (-9)).innerHTML = "";
			}
			if(oldSquare.id == currentSquare.id - (-14)){
				document.getElementById(currentSquare.id - (-7)).innerHTML = "";
			}
			currentSquare.innerHTML = oldSquare.innerHTML;
			oldSquare.innerHTML = "";
			reset();
		}
	}
}
}

function reset(){
	for(var i=0; i<64; i++){
		document.getElementById(i).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
	}
}
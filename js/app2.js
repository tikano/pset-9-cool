window.onload = function(){
console.log("hey");
for (var i=0; i< 64; i++){
    let dive = document.createElement("div");
    dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
    dive.class = "squire";
    document.getElementById("mainChessBoard").appendChild(dive);
}
}

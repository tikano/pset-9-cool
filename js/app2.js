window.onload = function(){
console.log("hey");
for (var i=0; i< 64; i++){
    document.getElementById("mainChessBoard").appendChild(document.createElement("div class = ".square"")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';    
}
}

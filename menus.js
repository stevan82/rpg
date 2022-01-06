var charimg=1;
function main_menu(){

document.getElementById("game").style.display="none";
document.getElementById("main_menu").style.display="block";
document.getElementById("character_info").style.display="none";
document.getElementById("story").style.display="none";

}
function story(){
var audio = document.getElementById('bgmusic');
    audio.src = 'snd/romance.mp3';    
	//audio.stop();    
    audio.load();
	
	audio.play();
document.getElementById("game").style.display="none";
document.getElementById("main_menu").style.display="none";
document.getElementById("character_info").style.display="none";

document.getElementById("story").style.display="block";
}


function game(){
var audio = document.getElementById('bgmusic');
    audio.src = 'snd/city.mp3';    
	//audio.stop();    
    audio.load();
	
	audio.play();
	
document.getElementById("game").style.display="block";
document.getElementById("main_menu").style.display="none";
document.getElementById("character_info").style.display="none";
document.getElementById("story").style.display="none";
onload();
}
function character_info(){

document.getElementById("game").style.display="none";
document.getElementById("main_menu").style.display="none";
document.getElementById("character_info").style.display="block";
document.getElementById("story").style.display="none";
onload();
}
function nextimg(){
if (charimg==5) charimg=0;
if (charimg<5) charimg++;

document.getElementById("char_img").style.backgroundImage = "url(img/characters/char"+charimg+".png)";
}
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
$(document).ready(init);
function init()
{
    $(document).click(moveLogo);
}
function moveLogo(){
    alert('df');
}
function aleatorio(min,max){
    var resultado;
    resultado = Math.floor(Math.random()*(max-min))+min;
    return resultado;
}
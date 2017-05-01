var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
$(document).ready(init);
function init()
{
    moveLogo();
    
}
function moveLogo(){
    $('#layer6').addClass('img-start');
    $('#layer6').css('transition','.8s');
    $('#layer6').addClass('img-end');
}
function aleatorio(min,max){
    var resultado;
    resultado = Math.floor(Math.random()*(max-min))+min;
    return resultado;
}
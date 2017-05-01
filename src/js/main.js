var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
$(document).ready(init);
function init()
{    
    //setInterval(moveLogo,2000);
    
}
/*function moveLogo(){
    $('li#liLayer6').html('<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" id="layer6">');
    setInterval(function(){
        //$('img#layer6').removeAttr("style");
        $('img#layer6').css({
        'width':'40px',                      'transform':'translate(0,110px)',        'transition':'.8s',
        'width':'30px',
        'transform':'translate(0,90px)'
    });
    },1000);    
};*/

function aleatorio(min,max){
    var resultado;
    resultado = Math.floor(Math.random()*(max-min))+min;
    return resultado;
}
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var scene = document.getElementById('scene1');
var parallax1 = new Parallax(scene1);
$(document).ready(init);
function init()
{   
    window.addEventListener('resize',resize);
    loadLinkMenu();
    //$('#start').click(onClickBtnStart);
    $('#menu').mouseover(onMouseMenu);
    $('#menu').mouseleave(leaveMouseMenu);
    //$('#about-me').click(onClickBtnAboutMe);
    $('#skill').click(onClickBtnSkill);
    $('#projects').click(onClickBtnProjects);
    $('#contact-me').click(onClickBtnContactMe);
    /*Section skill*/
    move("myBarHTML5",90);
    move("myBarCss",90);
    move("myBarBootstrap",80);
    move("myBarJs",70);
    move("myBarJquery",70);
    move("myBarSass",80);
    move("myBarGithub",70);
    move("myBarGulp",70);
    //soft-skill
    move("myBarProactividad",99);
    move("myBarEquipo",90);
    move("myBarPensamiento",80);
    move("myBarEntusiasmo",90);
    move("myBarPerseverancia",100);
    move("myBarResponsabilidad",80);
}
function resize(evt){
    if(screen.height<=414){
        $('.box-img-maday').css('height','700px');
    }else{
        $('.box-img-maday').css('height','500px');
    };
}
/*-----animacion de menu-----*/
function onMouseMenu(evt){
    switch(evt.target.id){
        case 'start':
            $('li#start').css('width','100px');
            $('li#start').text('INICIO');
            break;
        case 'about-me':
            $('li#about-me').css('width','100px');
            $('li#about-me').text('SOBRE MI');
            break;        
    }
}
function leaveMouseMenu(evt){
    switch(evt.target.id){
        case 'start':
            $('li#start').css('width','10px');
            $('li#start').text('');
            break;
        case 'about-me':
            $('li#about-me').css('width','10px');
            $('li#about-me').text('');
            break;        
    }
}
function loadLinkMenu(){
    setInterval(function(){
        $('ul#menu').css('opacity','1');
    },550);
    setInterval(function(){
        $('li#about-me').addClass('slideInRight');
    },500);
    setInterval(function(){
        $('li#skill').addClass('slideInRight');
    },600);
    setInterval(function(){
        $('li#projects').addClass('slideInRight');
    },700);
    setInterval(function(){
        $('li#contact-me').addClass('slideInRight');
    },800);
}
/*-----Funcione animacion de menu-----*/
function onMouseMenu(evt){
    switch(evt.target.id){
        case 'start':
            $('li#start').css('width','100px');
            $('li#start').text('INICIO');
            break;
        case 'about-me':
            $('li#about-me').css('width','100px');
            $('li#about-me').text('SOBRE MI');
            break;        
    }
}
function leaveMouseMenu(evt){
    switch(evt.target.id){
        case 'start':
            $('li#start').css('width','10px');
            $('li#start').text('');
            break;
        case 'about-me':
            $('li#about-me').css('width','10px');
            $('li#about-me').text('');
            break;        
    }
}
function onClickBtnSkill(){
    move("myBarHTML5",90);
    move("myBarCss",90);
    move("myBarBootstrap",80);
    move("myBarJs",70);
    move("myBarJquery",70);
    move("myBarSass",80);
    move("myBarGithub",70);
    move("myBarGulp",70);
}
function onClickBtnProjects(){

}
function onClickBtnContactMe(){

}
function move(_id,_valor) {
    var elem = document.getElementById(_id);   
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= _valor) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
}
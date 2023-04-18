function addMargin(divName){
    var divToMargin = document.getElementById(divName);
    divToMargin.style.marginTop = "80px"
}


window.onscroll = function(){
    var scrolledTop = document.documentElement.scrollTop;
    var personaje = document.getElementById("personajeId");
    var enemigo = document.getElementById("enemigosId");
    if(scrolledTop - personaje.offsetTop > 100){
        personaje.style.marginTop = "0px"
    }
    if(scrolledTop - enemigo.offsetTop > 100){
        enemigo.style.marginTop = "0px"
    }
    
}
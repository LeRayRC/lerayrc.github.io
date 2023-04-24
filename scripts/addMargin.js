function addMargin(divName){
    var divToMargin = document.getElementById(divName);
    divToMargin.style.marginTop = "80px"
}


window.onscroll = function(){
    var scrolledTop = document.documentElement.scrollTop;
    var personaje = document.getElementById("personajeId");
    var enemigo = document.getElementById("enemigosId");
    var habilidades = document.getElementById("habilidadesId");
    var aliados = document.getElementById("aliadosId");
    if(scrolledTop - personaje.offsetTop > 100){
        personaje.style.marginTop = "0px"
    }
    if(scrolledTop - enemigo.offsetTop > 100){
        enemigo.style.marginTop = "0px"
    }
    if(scrolledTop - habilidades.offsetTop > 100){
        habilidades.style.marginTop = "0px"
    }
    if(scrolledTop - aliados.offsetTop > 100){
        aliados.style.marginTop = "0px"
    }
}
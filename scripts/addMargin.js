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
    if(scrolledTop - personaje.offsetTop > 60){
        personaje.style.marginTop = "0px"
    }
    if(scrolledTop - enemigo.offsetTop > 60){
        enemigo.style.marginTop = "0px"
        console.log("reset margin");
    }
    if(scrolledTop - habilidades.offsetTop > 60){
        habilidades.style.marginTop = "0px"
    }
    if(scrolledTop - aliados.offsetTop > 60){
        aliados.style.marginTop = "0px"

    }
}

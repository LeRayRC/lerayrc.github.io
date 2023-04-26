let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  // showSlides(slideIndex += n);
  currentSlide(slideIndex += n);
}

function currentSlide(n) {
  var nombre_artilugio=document.getElementById("nombre_artilugio");
  var desc_artilugio=document.getElementById("descripcion_artilugio");
  switch(n){
    case 1:
        nombre_artilugio.innerHTML = "Lanzaredes"
        desc_artilugio.innerHTML = "Lanza redes y atrapa a los enemigos"
        break;
    case 2:
        nombre_artilugio.innerHTML = "Golpe De Veneno"
        desc_artilugio.innerHTML = "Golpe cargado de electricidad que incapacita a los enemigos y destruye sus escudos en gran medida"
        break;
    case 3:
        nombre_artilugio.innerHTML = "Salto De Veneno"
        desc_artilugio.innerHTML = "Lanza a los enemigos por los aires en un area alrededor, pudiendo continuar con poderosos combos"
        break;
    case 4:
        nombre_artilugio.innerHTML = "Mina Electrica"
        desc_artilugio.innerHTML = "Trampa electrica perfecta para misiones sigilosas "
        break;
    case 5:
        nombre_artilugio.innerHTML = "Pozo Gravitatorio"
        desc_artilugio.innerHTML = "Crea un vortice gravitatorio que atrapa a los enemigos impidiendo que escapen durante unos segundos, dejandolos a merced de otros ataques"
        break;
    case 6:
        nombre_artilugio.innerHTML = "Holodron"
        desc_artilugio.innerHTML = "Invoca un Holodron que lucha a tu lado y distrae a los enemigos durante un breve lapso de tiempo"
        break;
    default:
        nombre_artilugio.innerHTML = "Lanzaredes"
        desc_artilugio.innerHTML = "Lanza redes y atrapa a los enemigos"
        break;

}
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var play = document.getElementsByClassName("play");
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  for(var j = 0; j < play.length; j++){
    var play_element = play[j];
    // hacer algo con cada elemento, por ejemplo:
    play_element.style.display = "block";
  }
}
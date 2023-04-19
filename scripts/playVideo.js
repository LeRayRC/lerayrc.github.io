function playVideo(mediaId) {
    switch(mediaId){
        case 1:
            var video = document.getElementById("local-video-1");
            var imagen = document.getElementById("imagen-overlay-1");
            break;
        case 2:
            var video = document.getElementById("local-video-2");
            var imagen = document.getElementById("imagen-overlay-2");
            break;
        case 3:
            var video = document.getElementById("local-video-3");
            var imagen = document.getElementById("imagen-overlay-3");
            break;
        case 4:
            var video = document.getElementById("local-video-4");
            var imagen = document.getElementById("imagen-overlay-4");
            break;
        case 5:
            var video = document.getElementById("local-video-5");
            var imagen = document.getElementById("imagen-overlay-5");
            break;
        case 6:
            var video = document.getElementById("local-video-6");
            var imagen = document.getElementById("imagen-overlay-6");
            break;
    }
    
    var play = document.getElementsByClassName("play");
    video.play();
    
    for(var i = 0; i < play.length; i++){
        var play_element = play[i];
        // hacer algo con cada elemento, por ejemplo:
        play_element.style.display = "none";
      }
    imagen.style.display = "none";
}
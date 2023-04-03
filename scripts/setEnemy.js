function setEnemy(enemyName,type){
    document.getElementById('nombre_enemigo').innerHTML = enemyName;
    var enemy_image = document.getElementById('imagen_enemigo');
    switch(type){
        case 1:
            enemy_image.src = "./images/octopus.jpeg";
            break;
        case 2:
            enemy_image.src = "./images/electro.jpg";
            break;
        case 3:
            enemy_image.src = "./images/vulture.jpeg";
            break;
        case 4:
            enemy_image.src = "./images/rhino.jpg";
            break;
    }
    
}
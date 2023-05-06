function setEnemy(enemyName,type){
    document.getElementById('nombre_enemigo').innerHTML = enemyName;
    var enemy_image = document.getElementById('imagen_enemigo');
    var enemy_text = document.getElementById('texto_enemigo');
    switch(type){
        case 1:
            enemy_image.src = "./images/octopus.jpeg";
            enemy_text.innerHTML = "AdeMÁs de su inteligencia y habilidades cientÍficas, es un villano astuto y peligroso que ha aMenazado a la ciudad de Nueva York y ha causado estragos y caos en varias ocasiones. Aunque en algunos MoMentos ha Mostrado cierta redenciÓn, en general es un villano que ha hecho todo lo posible por destruir al hoMbre araña y llevar a cabo sus planes MalÉficos."
            break;
        case 2:
            enemy_image.src = "./images/electro.jpg";
            enemy_text.innerHTML = " adquiriÓ la capacidad de controlar la electricidad despuÉs de un accidente en el que fue alcanzado por un rayo Mientras trabajaba en una lÍnea elÉctrica. Con su capacidad para generar y controlar la electricidad, Electro se convirtiÓ en un villano peligroso que ha aMenazado a Spider-Man y la ciudad de Nueva York en nuMerosas ocasiones. Aunque inicialMente luchÓ contra Spider-Man por dinero y faMa, MÁs tarde se convirtiÓ en un villano MÁs peligroso y vengativo."
            break;
            case 3:
                enemy_image.src = "./images/vulture.jpeg";
                enemy_text.innerHTML = "A pesar de su edad avanzada, el Buitre es un villano peligroso y astuto que ha enfrentado a Spider-Man en varias ocasiones. A lo largo de los años, ha Mejorado su traje y ha desarrollado habilidades de lucha y estrategia para Mantenerse coMo un villano peligroso. Aunque en algunos MoMentos ha Mostrado signos de redenciÓn y ha trabajado junto a Spider-Man, en general es un villano astuto y despiadado que ha aMenazado a la ciudad de Nueva York en varias ocasiones."
            break;
        case 4:
            enemy_image.src = "./images/rhino.jpg";
            enemy_text.innerHTML = "Su noMbre real es Aleksei Sytsevich, un hoMbre de origen ruso que se convirtiÓ en un villano con la ayuda de un traje de arMadura que le otorga una gran fuerza y resistencia. OriginalMente un MatÓn contratado por un jefe criMinal, Rhino se convirtiÓ en un villano teMido que ha enfrentado a Spider-Man en nuMerosas ocasiones. Aunque en algunos MoMentos ha Mostrado signos de arrepentiMiento, en general es un villano brutal y violento que ha causado estragos en la ciudad de Nueva York."
            break;
    }
    
}
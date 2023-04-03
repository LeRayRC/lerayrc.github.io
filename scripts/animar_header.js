function animar() {
    const contenedor = document.querySelector('#contenedor');
    const contenido = document.querySelector('#contenido');
    const miDiv = document.querySelector('#miDiv');
    const clickaqui = document.querySelector('#clickaqui');
    if (contenedor.classList.contains('abierto')) {
        contenedor.style.height = '100px';
        contenedor.style.width = '80%';
        contenedor.style.margin = '0 auto';
        miDiv.style.opacity = '0';
        clickaqui.style.display = 'none';
        //balanceo.style.display = 'none';
    } else {
        contenedor.style.height = '100%';
        contenido.style.opacity = '1';
        contenedor.style.width = '100%';
        contenedor.style.margin = '0 auto';
        miDiv.style.opacity = '1';
        clickaqui.style.display = 'block';
        //balanceo.style.display = 'block';
    }
    contenedor.classList.toggle('abierto');
}
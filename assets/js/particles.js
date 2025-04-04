// Guarda este archivo como particles.js en tu carpeta assets/js/

document.addEventListener('DOMContentLoaded', function() {
  // Obtener el elemento canvas
  const particlesContainer = document.getElementById('particles-bg');
  
  // Crear el canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = particlesContainer.offsetWidth;
  canvas.height = particlesContainer.offsetHeight;
  particlesContainer.appendChild(canvas);

  // Variables para la animación
  let particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Ajustar según el ancho de pantalla
  const connectionDistance = 150;
  const mouseRadius = 150;
  const baseSize = 2;
  
  // Colores para las partículas - Cambiamos a tonos rojos que combinen con el fondo claro
  const colors = ['#d21818', '#b01515', '#8c0f0f', '#e45050', '#ff4d5a'];
  
  // Variable para seguir la posición del mouse
  let mouse = {
    x: null,
    y: null,
    radius: mouseRadius
  };
  
  // Escuchar movimiento del mouse
  window.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });
  
  // Si el mouse sale del canvas
  window.addEventListener('mouseout', function() {
    mouse.x = null;
    mouse.y = null;
  });
  
  // Ajustar tamaño del canvas cuando cambia el tamaño de la ventana
  window.addEventListener('resize', function() {
    canvas.width = particlesContainer.offsetWidth;
    canvas.height = particlesContainer.offsetHeight;
    init();
  });
  
  // Clase para las partículas
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * baseSize + 1;
      this.speedX = (Math.random() - 0.5) * 1;
      this.speedY = (Math.random() - 0.5) * 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.6 + 0.2; // Bajamos un poco la opacidad para que se vea mejor en fondo claro
    }
    
    // Actualizar posición
    update() {
      // Mover partícula
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Rebote en los bordes
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }
      
      // Interacción con el mouse
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          // Calcular fuerza de repulsión
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          
          // Aplicar fuerza opuesta a la dirección del mouse
          this.x -= directionX * force * 5;
          this.y -= directionY * force * 5;
        }
      }
    }
    
    // Dibujar partícula
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
  
  // Inicializar partículas
  function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  // Dibujar conexiones entre partículas
  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          // Opacidad basada en la distancia
          const opacity = 1 - (distance / connectionDistance);
          
          // Gradiente para conexiones
          const gradient = ctx.createLinearGradient(
            particles[a].x, particles[a].y,
            particles[b].x, particles[b].y
          );
          gradient.addColorStop(0, particles[a].color);
          gradient.addColorStop(1, particles[b].color);
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.globalAlpha = opacity * 0.5; // Bajamos la opacidad para el fondo claro
          ctx.lineWidth = 1;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }
  
  // Función de animación
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    connect();
  }
  
  // Iniciar
  init();
  animate();
});
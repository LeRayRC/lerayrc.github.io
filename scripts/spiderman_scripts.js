const landing = document.getElementById('landing');
const no_landing = document.querySelectorAll(".no_landing")

function landing_shrink(){
  const landing = document.getElementById('landing');
  const no_landing = document.querySelectorAll(".no_landing")
  const landing_gif = document.getElementById("landing_gif")

  landing.style.height = '0%';
  landing_gif.style.opacity = '0';
  
  setTimeout(function() {
    landing.style.display = 'none';
    no_landing.forEach(nolanding => {
      nolanding.style.display = 'flex';
    });
  }, 750); // 500 ms es el tiempo de transición definido en CSS
  
}
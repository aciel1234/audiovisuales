document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.querySelectorAll('.card img');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Si la imagen ya tiene src, no hacemos nada (podría ser una recarga)
          if (!img.src) {
            img.src = img.getAttribute('data-src'); // Usamos getAttribute para evitar conflictos
            img.onload = () => {
              img.removeAttribute('data-src');
            };
          }
          observer.unobserve(img);
        }
      });
    });
  
    imgs.forEach(img => {
      if (!img.src) { // Verifica si la imagen ya tiene un src
        img.setAttribute('data-src', img.src); // Guarda la URL original en data-src
        img.src = ''; // Borra el src para que el navegador no cargue la imagen inmediatamente
      }
      observer.observe(img);
    });
  });
  
  
const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Evita animar múltiples veces
      }
    });
  }, {
    threshold: 0.1 // Se activa cuando el 10% del card está visible
  });

  cards.forEach(card => observer.observe(card));
// seleccionamos todos los botones para filtrar y todas las cartas filtrables
const filterButtons = document.querySelectorAll('.generos');
const filterableCards = document.querySelectorAll('.filterable_cards .card');

//definir la funcion de filterCards
const filterCards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    console.log(e.target)

    //iterar sobre cada carta filterable
    filterableCards.forEach(card => {
        //añadir la clase ´ocultar´ paraocultar la carta inicialmente
        card.classList.add('hide');
        //comprobar si la carta coincide con el boton de filtrado o el boton 'todas' esta seleccionado
        if(card.dataset.name === e.target.value || e.target.value === 'todas' || card.dataset.class === e.target.value || card.dataset.gender === e.target.value) {
            card.classList.remove('hide');
        }
    })
};

// añadir evento para cada filter button
filterButtons.forEach(button => button.addEventListener('click', filterCards))

/* PARA EL BOTON DE BUSCAR */
document.addEventListener('keyup', a=>{
  if (a.target.matches('#buscar')){
    if (a.key === 'Escape')a.target.value = ''
    document.querySelectorAll('.card').forEach(peli =>{
      peli.textContent.toLowerCase().includes(a.target.value.toLowerCase())
      ?peli.classList.remove('hide')
      :peli.classList.add('hide')
    })
  }
})

let cantidad = filterableCards.length;
console.log(cantidad)
let totalPelis = document.getElementById('totalPeliculas');
totalPelis.innerText = `Total de películas: ${cantidad}`;
totalPelis.style.background = 'rgba(0, 0, 0, 0.7)'
totalPelis.style.margin = '-20px';
totalPelis.style.textAlign = 'center';



// Mostrar/ocultar el botón según el scroll
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnSubir");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });

    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// peliculas destacadas
const apiKey = "736ffafa";
    const titulos = [
      "One Of Them Days",
      "Den of Thieves: Pantera",
      "Sinners",
      "Black Bag",
      "Presence",
      "Thunderbolts"
    ];

    const grid = document.getElementById("peliculasGrid");

    titulos.forEach(titulo => {
      fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(titulo)}&apikey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          if (data.Response === "True") {
            const div = document.createElement('div');
            div.className = 'pelicula';
            div.innerHTML = `
              <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/150x220?text=No+Image'}" alt="${data.Title}">
              <h3>${data.Title}</h3>
              <p>⭐ ${data.imdbRating}</p>
              <p>(${data.Year})</p>
            `;
            grid.appendChild(div);
          }
        })
        .catch(error => {
          console.error("Error al cargar película:", error);
        });
    });
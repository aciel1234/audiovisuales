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
let totalPelis = document.getElementById('totalAnimes');
totalPelis.innerText = `Total de animes: ${cantidad}`;
totalPelis.style.background = 'rgba(0, 0, 0, 0.7)'
totalPelis.style.margin = '-20px';
totalPelis.style.textAlign = 'center';
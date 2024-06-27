document.getElementById('search-input').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const filteredProductos = productos.filter(producto =>
        producto.title.toLowerCase().includes(query) || producto.name.toLowerCase().includes(query)
    );
    updateProductCards(filteredProductos);
});

const contenedorCards = document.getElementById("contenedor-productos");
let cardsHTML = "";

for (let producto of productos) {
    cardsHTML += crearCards(producto);
}

contenedorCards.innerHTML = cardsHTML;

function crearCards(producto) {
    let card = document.createElement('div');
    card.classList.add('card');

    let image = document.createElement('img');
    let title = document.createElement('h2'); 
    let name = document.createElement('p');
    
    image.src = producto.image;
    title.innerText = producto.title;
    name.innerText = producto.name;
    

    card.append(image, name, title);

    return card.outerHTML;
}


function updateProductCards(filteredProductos) {
    let cardsHTML = "";
    for (let producto of filteredProductos) {
        cardsHTML += crearCards(producto);
    }
    contenedorCards.innerHTML = cardsHTML;
}
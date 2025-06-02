lista = JSON.parse(localStorage.getItem("salones"));
if (lista === null) {


    listaSalones = [
        {
            id: 1,
            titulo: "Salón Fiesta 1",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon1.jpg",
        },
        {
            id: 2,
            titulo: "Salón Fiesta 2",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon2.jpg",
        },
        {
            id: 3,
            titulo: "Salón Fiesta 3",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon3.jpg",
        },
        {
            id: 4,
            titulo: "Salón Fiesta 4",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon1.jpg",
        }
    ];
    localStorage.setItem("salones", JSON.stringify(listaSalones));
    lista = JSON.parse(localStorage.getItem("salones"));

};


let contenedor = document.getElementById("contenedorCards");
lista.forEach(element => {
    let divContenedorCard = document.createElement("div");
    divContenedorCard.className = "col-12 col-sm-6 col-lg-3";
    let divContenedor = document.createElement("div");
    divContenedor.className = "card h-100";
    let imagen = document.createElement("img");
    imagen.className = "card-img-top";
    imagen.src = "./assets/img/" + element.imagen;
    imagen.alt = "Imagen Salon";
    let divContenedorCuerpo = document.createElement("div");
    divContenedorCuerpo.className = "card-body";
    let titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.innerHTML = element.titulo;
    let parrafo = document.createElement("p");
    parrafo.className = "card-text";
    parrafo.innerHTML = element.descripcion;
    let botonMas = document.createElement("a");
    botonMas.className = "btn btn-warning";
    botonMas.href = "#";
    botonMas.innerHTML = "Más Información";
    divContenedorCuerpo.appendChild(titulo);
    divContenedorCuerpo.appendChild(parrafo);
    divContenedorCuerpo.appendChild(botonMas);
    divContenedor.appendChild(imagen);
    divContenedor.appendChild(divContenedorCuerpo);
    divContenedorCard.appendChild(divContenedor);
    contenedor.appendChild(divContenedorCard);
});


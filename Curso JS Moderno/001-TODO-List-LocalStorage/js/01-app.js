//Creando el HTML
const contenedorPrincipal = document.querySelector('#mainDiv')
const card001 = document.createElement("card")
const carContentd001 = document.createElement("card-content")
const cardTitle001 = document.createElement("card-title")
const H2LoginTitle001 = document.createElement("H2")
const H2LoginTitle001 = document.createElement("H2")

//Modificando los elementos creados
H2LoginTitle001.innerHTML = "LOGIN"
contenedorPrincipal.classList.add("center")
card001.classList.add("card")
cardTitle001.classList.add("card-title")

//Añadiendo contenido a la vista 
contenedorPrincipal.appendChild(card001)
card001.appendChild(carContentd001)
carContentd001.appendChild(cardTitle001)
cardTitle001.appendChild(H2LoginTitle001)

console.log(contenedorPrincipal)
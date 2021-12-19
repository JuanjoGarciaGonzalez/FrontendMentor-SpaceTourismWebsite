// CAPTURAR ELEMENTOS
imagenDestination = document.querySelector("#imagen-destination")
tituloDestination = document.querySelector("#destination-title")
descripcionDestination = document.querySelector("#destination-description")
distanciaDescription = document.querySelector("#destination-distance")
tiempoDescription = document.querySelector("#destination-time")
elementosMenuDestinations = document.querySelectorAll(".elementos-menu-destinations")
// divDatosNumericos = document.querySelector("#div-datos-numericos")

// AÑADIR EVENTOS
document.querySelector("#moon").addEventListener("click", function() {
    traerDatos(0)
})
document.querySelector("#mars").addEventListener("click", function() {
    traerDatos(1)
})
document.querySelector("#europa").addEventListener("click", function() {
    traerDatos(2)
})
document.querySelector("#titan").addEventListener("click", function() {
    traerDatos(3)
})

// FUNCIONES
function traerDatos(id) {
    console.log("HAS CLICKADO")
    const xhttp = new XMLHttpRequest() //nuevo objeto de la clase
    xhttp.open("GET", "data.json", true) //método get, la ruta del archivo a hacer al petición y si va a ser asíncrono
    xhttp.send() //mandamos la petición ajax
    xhttp.onreadystatechange = function() { //conseguir una respuesta
        if(this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText)
            let datosJSON = JSON.parse(this.responseText)
            console.log(datosJSON)
            imagenDestination.src = datosJSON.destinations[id].images.png
            tituloDestination.innerHTML = datosJSON.destinations[id].name
            descripcionDestination.innerHTML = datosJSON.destinations[id].description
            distanciaDescription.innerHTML = datosJSON.destinations[id].distance
            tiempoDescription.innerHTML = datosJSON.destinations[id].travel
            for(i=0;i<elementosMenuDestinations.length;i++) {
                elementosMenuDestinations[i].classList.remove("active")
            }
            elementosMenuDestinations[id].classList.add("active")
            // divDatosNumericos.style.display = "flex"
        }
    }

}
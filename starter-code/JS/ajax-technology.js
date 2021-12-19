// CAPTURAR ELEMENTOS
imagenTechnology = document.querySelector("#imagen")
nameTechnology = document.querySelector("#name")
descripcionTechnology = document.querySelector("#description")
elementosMenuTechnology = document.querySelectorAll(".elementos-menu-technology")
tamVentana = window.innerWidth;

// PARA PONER LA IMAGEN POR DEFECTO DEPENDIENDO DEL WIDTH DEL VIEWPORT
if(tamVentana > "768") {
    imagenTechnology.src = "assets/technology/image-launch-vehicle-portrait.jpg"
}
if(tamVentana <= "768") {
    imagenTechnology.src = "assets/technology/image-launch-vehicle-landscape.jpg"
}


// AÑADIR EVENTOS
document.querySelector("#uno").addEventListener("click", function() {
    traerDatos(0)
})
document.querySelector("#dos").addEventListener("click", function() {
    traerDatos(1)
})
document.querySelector("#tres").addEventListener("click", function() {
    traerDatos(2)
})

// FUNCIONES
function traerDatos(id) {
    const xhttp = new XMLHttpRequest() //nuevo objeto de la clase
    xhttp.open("GET", "data.json", true) //método get, la ruta del archivo a hacer al petición y si va a ser asíncrono
    xhttp.send() //mandamos la petición ajax
    xhttp.onreadystatechange = function() { //conseguir una respuesta
        if(this.readyState == 4 && this.status == 200) {
            let datosJSON = JSON.parse(this.responseText)
            console.log(datosJSON)
            if(tamVentana > "768") {
                imagenTechnology.src = datosJSON.technology[id].images.portrait
            }
            if(tamVentana <= "768") {
                imagenTechnology.src = datosJSON.technology[id].images.landscape
            }
            nameTechnology.innerHTML = datosJSON.technology[id].name
            descripcionTechnology.innerHTML = datosJSON.technology[id].description
            for(i=0;i<elementosMenuTechnology.length;i++) {
                elementosMenuTechnology[i].classList.remove("active")
            }
            elementosMenuTechnology[id].classList.add("active")
        }
    }

}
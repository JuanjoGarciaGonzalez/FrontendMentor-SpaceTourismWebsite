// CAPTURAR ELEMENTOS
imagenCrew = document.querySelector("#imagen")
tituloCrew = document.querySelector("#title")
nameCrew = document.querySelector("#name")
descripcionCrew = document.querySelector("#description")
elementosMenuCrew = document.querySelectorAll(".elementos-menu-crew")


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
document.querySelector("#cuatro").addEventListener("click", function() {
    traerDatos(3)
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
            imagenCrew.src = datosJSON.crew[id].images.png
            nameCrew.innerHTML = datosJSON.crew[id].name
            tituloCrew.innerHTML = datosJSON.crew[id].role
            descripcionCrew.innerHTML = datosJSON.crew[id].bio
            for(i=0;i<elementosMenuCrew.length;i++) {
                elementosMenuCrew[i].classList.remove("active")
            }
            elementosMenuCrew[id].classList.add("active")
        }
    }

}
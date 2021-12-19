iconoMenu = document.getElementById("icono-menu")
menuHamburguesa = document.getElementsByClassName("menu-hamburguesa")

iconoMenu.addEventListener("click", desplegarMenu)

function desplegarMenu() {
    if(iconoMenu.src == "http://127.0.0.1:8887/starter-code/assets/shared/icon-hamburger.svg") {
        iconoMenu.src = "http://127.0.0.1:8887/starter-code/assets/shared/icon-close.svg"
        menuHamburguesa[0].style.display = "block"
    }else {
        iconoMenu.src = "http://127.0.0.1:8887/starter-code/assets/shared/icon-hamburger.svg"
        menuHamburguesa[0].style.display = "none"
    }
    
}
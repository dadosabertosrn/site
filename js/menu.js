let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const imagem = document.querySelector(".imagem")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    
    menuSection.classList == "menu-section on" && show == true ? imagem.style.display = "none" : "block"

    show = !show
    
    if(show) {
        imagem.style.display = "block"
        imagem.style.width="90px"
        imagem.style.height="90px"
        imagem.style.marginTop="5px"
    }
})
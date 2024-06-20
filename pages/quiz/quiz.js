import { trocarTema, verificarTema } from "../../helpers/tema-helper.js"

const body = document.querySelector("body")
const botaoTema = document.querySelector(".tema button")

botaoTema.addEventListener("click", () => {

    trocarTema(body, botaoTema)
}
)

verificarTema(body, botaoTema)

const assunto = localStorage.getItem("assunto")



function alterarAssunto(){
    const divIcone = document.querySelector(".assunto_icone ")
    const img = document.querySelector(".assunto_icone img")
    const titulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    img.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    img.setAttribute("alt", `Icone de ${assunto.toLowerCase()}`)
    titulo.innerText = assunto
}

alterarAssunto()
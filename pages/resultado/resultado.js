import { trocarTema, verificarTema } from "../../helpers/tema-helper.js"

const body = document.querySelector("body")
const botaoTema = document.querySelector(".tema button")
const assunto = localStorage.getItem("assunto")

botaoTema.addEventListener("click", () => {

    trocarTema(body, botaoTema)
}
)

verificarTema(body, botaoTema)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone ")
    const img = document.querySelector(".assunto_icone img")
    const titulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    img.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    img.setAttribute("alt", `Icone de ${assunto.toLowerCase()}`)
    titulo.innerText = assunto
}

alterarAssunto()

function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    console.log(divAssunto)

    sectionPontuacao.innerHTML`
    <div class="assunto">
        <div class="assunto_icone">
            <img src="../../assets/images/icon-acessibilidade.svg" alt="ícone de acessibilidade">
        </div>

        <h1>Acessbilidade</h1>
        </div>

        <strong>8</strong>

        <p>de 10</p>
    `
}

inserirResultado
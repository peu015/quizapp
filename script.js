import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const body = document.querySelector("body")
const botaoTema = document.querySelector(".tema button")

botaoTema.addEventListener("click", () => {

    trocarTema(body, botaoTema)
}
)

verificarTema(body, botaoTema)

const botoesAssuntos = document.querySelectorAll(".assuntos button")

botoesAssuntos.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento){
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}
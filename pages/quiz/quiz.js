import { trocarTema, verificarTema } from "../../helpers/tema-helper.js"

const body = document.querySelector("body")
const botaoTema = document.querySelector(".tema button")

let quiz = {}
let pontos = 0
let perguntas = 2

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



async function buscarPerguntas(){
    const urlDados = "../../data.json"

    await fetch(urlDados).then(resposta => resposta.json()).then(dados =>{
        console.log(dados)
            dados.quizzes.forEach(dado => {
                if(dado.title === assunto){
                    quiz = dado
                }
            })
    })
    console.log(quiz)

}



function montarPergunta(){
    const main = document.querySelector("main")

    main.innerHTML = `
    <section class="pergunta">
            <div>
                <p>Questão ${perguntas}</p>

                <h2>${alterarSinais(quiz.questions[perguntas-1].question)}</h2>
            </div>

            <div class="barra_progresso">
                <div style="width: ${perguntas * 10}%"></div>
            </div>

        </section>

        <section class="alternativa">

            <form action="">

                <label for="alternativa_a"> 
                    <input type="radio" id="alternativa_a" name="alternativa">
                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[perguntas-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_b"> 
                    <input type="radio" id="alternativa_b" name="alternativa">
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[perguntas-1].options[1])}
                    </div>
                </label>

                <label for="alternativa_c"> 
                    <input type="radio" id="alternativa_c" name="alternativa">
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[perguntas-1].options[2])}
                    </div>
                </label>

                <label for="alternativa_d"> 
                    <input type="radio" id="alternativa_d" name="alternativa">
                    <div>
                        <span>D</span>
                        ${alterarSinais(quiz.questions[perguntas-1].options[3])}
                    </div>
                </label>
                
            </form>
            <button>Enviar</button>
        </section>

        <a href="../resultado/resultado.html">faDUFADS</a>
`
}

function alterarSinais(texto){
    return texto.replace(/</g, "&lt;").replace(/</g, "&gt;")
}

 async function iniciar() {
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()
}

 iniciar()
const botoes = document.querySelectorAll(".botao");


const personagens = document.querySelectorAll(".personagem");




botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{




        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botao.classList.add("selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecioando = document.querySelector(".personagem.selecionado");
        personagemSelecioando.classList.remove("selecionado")

        personagens[indice].classList.add("selecionado");


    });
});




const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
        const personagemselecionado = document.querySelector(".selecionado");
        personagemselecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");

        const imagempersonagemgrande =
            document.querySelector('.personagem-grande');

        const idpersonagem = personagem.attributes.id.value;
        imagempersonagemgrande.src = `./src/imagens/card-${idpersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaopersonagem = document.getElementById(
            'descricao-personagem'        );

        descricaopersonagem.innerText =
            personagem.getAttribute('data-description');
    });
});

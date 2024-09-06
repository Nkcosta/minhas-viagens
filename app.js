//anot 1. No arq app.js devemos colocar toda a lógica do java script (funcionalidades)

console.log("Olá, mundo! Conheça o meu projeto. Ficou incrível! =D");

//anot 2. Exibe no console da página apenas o título do item 1 da minha lista
//        console.log(dados[0].titulo);

//anot 3. Referente a anot 4 em dados.js - acessando o índice que criei no dados.js, no caso abaixo acessa um item no índice 3:
//          console.log(dados[2]);

//anot 4. Exibe no console da página todos os dados da lista de objetos que coloquei no arq dados.js, em let dados = []
// console.log(dados);

//anot 5. Executa 1 vez o que eu quero, com um clique
function pesquisar() {
    //anot 6. Cria uma variável (let) para poder armazenar a tag do html (section) 
    //anot 7. document - acesso o que está no arquivo html .getelementbyid (pega o elemento que tem esse id - resultados-pesquisa)
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //anot 8. se campoPesquisa for uma string sem nada (quando eu quero atribuir um valor para a variável usa-se um sinal de igual, quando quero comparar dois valores são dois sinais de igual)
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado encontrado. Você precisa digitar o nome da cidade.<p/>"
        return
    }

    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase()

    //anot 9. Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //anot 10. For - Para cada dado dentro da lista de dados, o for executa o mesmo código n vezes (looping) de acordo com a quantidade de itens
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        //anot 11. Ver se a informação que eu quero pesquisar(titulo) está contida dentro do campo da pesquisa, eu quero fazer tal coisa.. se não está incluso eu não quero fazer..
        //anot 12. Se a informação tiver inclusa o console vai retornar um valor true, se não tiver, false.

        //anot 14. Se titulo está incluso no campoPesquisa então faça (As duas barras significam OU no javascrit).
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            //anot 15. Pega o elemento 1, e exibe o seu título:  ${dados[0].titulo}
            //anot 16. o + vai somar todas as outras cidades
            //anot 17. Dentro desse html, colocar esse resultado:
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">História da cidade</a>
            </div>
                `
        }
    }
    //anot 18. Se o resultado não tiver nada (vazio), então faça essa ação ou if(resultados == ""):
    if (!resultado) {
        resultados = "<p>Nada foi encontrado<p/>"
    }
    //anot 19. Atribui os resultados gerados à seção HTML (Escreve algo na tela)
    section.innerHTML = resultados
}

//anot 20. $ + chaves, sinaliza que é um pedaço de variável em um texto
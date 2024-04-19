const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () =>{
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

function atualizarUsuario(usuario) {
    //clicar no botão
    //abrir o modal
    //setar os campos com os valores do usuário do localStorage
    //trocar o botão salvar para atualizar
    //salvar as informações no localStorage
    //fechar o modal
    //recarregar a página
  
        let dados = []
    
        if (localStorage.getItem("cadastro")) {
    
            dados = JSON.parse(localStorage.getItem("cadastro"));
        }

}

//LÓGICA DE CADASTRO
//abrir modal
//inserir informações
//clicar no botão salvar
//salvar os dados no localStorage
//fecho o modal
//recarrego a página

dados.push(usuario)

    localStorage.setItem("cadastro",JSON.stringify(dados))


const atualizar = () =>{

    let listaUsuario = []

    if(localStorage.getItem("registroUsuario")){

        listaUsuario = JSON.parse(localStorage.getItem("registroUsuario"))
    }

    BuildTable (listaUsuario)
}

    window.addEventListener('DOMContentLoaded', () => atualizar())

//FUNÇÃO DE EXIBIR OS USUÁRIOS
//pegar os itens no localStorage (getItem)
//colocar os dados dentro de um array
//utilizar o método foreach para percorrer o array
//criar a tabela usando o DOM (id do tbody)
document.addEventListener('DOMContentLoaded', function () {
    var BotaoLogin = document.getElementById('BotaoLogin');

    BotaoLogin.addEventListener('click', ChecarLogin);

    function ChecarLogin() {
        // Obtém os valores do usuário e senha inseridos
        var nomeUsuario = document.getElementById('inome').value;
        var senhaUsuario = document.getElementById('isenha').value;

        // Lista de nomes de usuário permitidos
        var nomesPermitidos = ['Admin', 'Helora', 'Ronnie']; // Adicione mais nomes conforme necessário

        // Verifica se o nome de usuário está na lista permitida e se a senha está correta
        if (nomesPermitidos.includes(nomeUsuario) && senhaUsuario === 'nevoa123') {
            // Armazena o nome do usuário no localStorage
            localStorage.setItem('nomeUsuario', nomeUsuario);

            // Redireciona para a página desejada
            window.location.href = 'area-dos-membros666.html';
        } else {
            alert('Credenciais incorretas.');
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera o nome do usuário do localStorage
    var nomeUsuario = localStorage.getItem('nomeUsuario');

    // Atualiza o conteúdo do h2 com o nome do usuário
    var mensagemBemVindo = document.querySelector('.membro-login-nome');
    mensagemBemVindo.textContent = 'Bem-vindo, ' + nomeUsuario;
});
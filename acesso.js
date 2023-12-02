document.addEventListener('DOMContentLoaded', function () {
    var a = document.getElementById('BotaoLogin');
    a.addEventListener('click', b);

    function b() {
        var c = document.getElementById('inome').value,
            d = atob('ethernis'),
            e = ['Admin', 'Helora', 'Ronnie', 'Moana', 'Burlin', 'Gustavo', 'Ethan'];

        if (e.includes(c) && d === atob('ethernis')) {
            localStorage.setItem('nomeUsuario', c);
            window.location.href = 'area-dos-membros666.html';
        } else {
            alert('Credenciais incorretas.');
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var f = localStorage.getItem('nomeUsuario'),
        g = document.querySelector('.membro-login-nome');
    g.textContent = 'Bem-vindo(a), ' + f + '!';
});

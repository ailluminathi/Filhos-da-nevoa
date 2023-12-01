// Senha padrão
        const senhaCorreta = "nevoa123";

        // Função para verificar a senha
        function verificarSenha() {
            const senhaDigitada = prompt("Digite a senha:");

            // Verificar se a senha está correta
            if (senhaDigitada === senhaCorreta) {
                document.body.classList.add("unblur"); // Adicionar a classe para remover o desfoque
            } else {
                alert("Senha incorreta! Acesso negado.");
                // Redirecionar ou tomar outra ação, se necessário
                window.location.href = "index.html";
            }
        }

        // Chamar a função ao carregar a página (opcional)
        window.onload = verificarSenha;

/**
 * AGRO SUSTENTÁVEL - Inteligência e Interatividade
 * Script para controle do Quiz e comportamento dinâmico da página.
 */

// 1. Definição dos Dados do Quiz
const perguntaQuiz = {
    pergunta: "Qual tecnologia reduz o desperdício de água monitorando a umidade do solo?",
    opcoes: [
        "Drones agrícolas", 
        "Irrigação inteligente", 
        "Trator autônomo", 
        "Plantio direto"
    ],
    respostaCorreta: 1 // Índice correspondente a "Irrigação inteligente"
};

// 2. Função para Iniciar/Renderizar o Quiz
function iniciarQuiz() {
    const container = document.getElementById('quiz-content');
    
    // Gera os botões de opção dinamicamente usando template strings
    let opcoesHtml = '';
    perguntaQuiz.opcoes.forEach((opcao, index) => {
        opcoesHtml += `
            <button class="opcao-btn" onclick="verificarResposta(${index})">
                ${opcao}
            </button>`;
    });

    // Injeta o conteúdo da pergunta e opções no HTML
    container.innerHTML = `
        <p class="pergunta-texto">${perguntaQuiz.pergunta}</p>
        <div class="opcoes-container">${opcoesHtml}</div>
    `;
}

// 3. Função para Verificar a Resposta do Usuário
function verificarResposta(indexSelecionado) {
    const container = document.getElementById('quiz-content');
    
    // Se o usuário acertou
    if (indexSelecionado === perguntaQuiz.respostaCorreta) {
        container.innerHTML = `
            <div class="feedback correto">
                <i class="fa-regular fa-circle-check"></i>
                <h3>Parabéns, você acertou!</h3>
                <p>A <strong>Irrigação Inteligente</strong> economiza até 50% de água direcionando o recurso exatamente quando o solo precisa.</p>
                <button class="btn" onclick="iniciarQuiz()">Refazer</button>
            </div>
        `;
    } 
    // Se o usuário errou
    else {
        container.innerHTML = `
            <div class="feedback incorreto">
                <i class="fa-regular fa-circle-xmark"></i>
                <h3>Não foi dessa vez!</h3>
                <p>A resposta correta era: <strong>${perguntaQuiz.opcoes[perguntaQuiz.respostaCorreta]}</strong>.</p>
                <button class="btn" onclick="iniciarQuiz()">Tentar Novamente</button>
            </div>
        `;
    }
}

// 4. BÔNUS: Animação de Scroll Suave para os links da Navbar
document.querySelectorAll('.nav-links a, .hero .btn').forEach(link => {
    link.addEventListener('click', function(e) {
        // Verifica se o link é uma âncora interna (começa com #)
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Evita o pulo brusco padrão
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

class GerenciadorIluminacao {
    constructor() {
        if (GerenciadorIluminacao.instancia) {
            return GerenciadorIluminacao.instancia;
        }
        
        this.estados = {
            'sala-de-estar': false,
            'quarto-principal': false,
            'area-gourmet': false
        };
        
        GerenciadorIluminacao.instancia = this;
    }
    
    static obterInstancia() {
        if (!GerenciadorIluminacao.instancia) {
            GerenciadorIluminacao.instancia = new GerenciadorIluminacao();
        }
        return GerenciadorIluminacao.instancia;
    }
    
    acender(ambiente) {
        this.estados[ambiente] = true;
        this.atualizarVisual(ambiente);
        this.mostrarFeedback(`Luzes ${this.obterNomeAmigavel(ambiente)} acesas`);
    }
    
    apagar(ambiente) {
        this.estados[ambiente] = false;
        this.atualizarVisual(ambiente);
        this.mostrarFeedback(`Luzes ${this.obterNomeAmigavel(ambiente)} apagadas`);
    }
    
    obterNomeAmigavel(ambiente) {
        const nomes = {
            'sala-de-estar': 'da sala de estar',
            'quarto-principal': 'do dormitório',
            'area-gourmet': 'da área gourmet'
        };
        return nomes[ambiente] || ambiente;
    }
    
    atualizarVisual(ambiente) {
        const elemento = document.getElementById(ambiente);
        const indicador = elemento.querySelector('.status');
        
        if (this.estados[ambiente]) {
            indicador.textContent = '💡 Acesa';
            indicador.className = 'status ligada';
            elemento.classList.add('iluminacao-ativa');
        } else {
            indicador.textContent = '🌙 Desligada';
            indicador.className = 'status desligada';
            elemento.classList.remove('iluminacao-ativa');
        }
    }
    
    mostrarFeedback(mensagem) {
        const notificacao = document.getElementById('notificacao');
        notificacao.textContent = mensagem;
        notificacao.style.display = 'block';
        
        setTimeout(() => {
            notificacao.style.display = 'none';
        }, 1800);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const controle = GerenciadorIluminacao.obterInstancia();
    
    // event listener
    document.querySelectorAll('[data-ambiente]').forEach(botao => {
        botao.addEventListener('click', function() {
            const ambiente = this.dataset.ambiente;
            const acao = this.dataset.acao;
            
            if (acao === 'ativar') {
                controle.acender(ambiente);
            } else if (acao === 'desativar') {
                controle.apagar(ambiente);
            }
        });
    });
    
// efeitos visuais
    Object.keys(controle.estados).forEach(ambiente => {
        controle.atualizarVisual(ambiente);
    });
});
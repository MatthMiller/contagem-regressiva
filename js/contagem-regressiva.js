export default class ContagemRegressiva {
    constructor(inputAno, inputMes, inputDia, valoresNoDisplay, botaoIniciar, mensagemErro) {
        this.inputDia = document.querySelector(inputDia);
        this.inputMes = document.querySelector(inputMes);
        this.inputAno = document.querySelector(inputAno);

        this.valoresNoDisplay = document.querySelectorAll(valoresNoDisplay);
        this.botaoIniciarContagem = document.querySelector(botaoIniciar);
        this.mensagemErro = document.querySelector(mensagemErro);

        this.inicializar();
    }

    salvarValoresInseridos(event) {
        event.preventDefault();
        const inputs = [this.inputDia, this.inputMes, this.inputAno];

        inputs.forEach((elemento) => {
            if(!elemento.value[1]) {
                elemento.value = `0${elemento.value}`;
            }
        });

        const valoresFormatados = [...inputs].map((elementoInput) => {
            return {
                [elementoInput.id]: elementoInput.value.replace(/[^0-9\.]+/g, ''),
            }
        });

        this.criarDateFuturo(valoresFormatados);
    }

    criarDateFuturo(valores) {
        const [ dia, mes, ano ] = [ valores[0].dia, valores[1].mes, valores[2].ano ];
        const dataConcatenada = `${ano}-${mes}-${dia}T00:00:00`;

        this.dateFuturo = new Date(dataConcatenada);
        if (this.dateFuturo == 'Invalid Date') {
            this.adicionarMensagemDeErro();
        } else {
            this.removerMensagemDeErro();
            this.atualizaTempoRestante();
            this.inserirTempoRestante();
            this.inicializaLoopTempoDisplay();
        }
    }

    adicionarMensagemDeErro() {
        this.mensagemErro.classList.add('ativo');
    }

    removerMensagemDeErro() {
        this.mensagemErro.classList.remove('ativo');
    }

    atualizaTempoRestante() {
        this.dateAgora = new Date().getTime();
        this.intervaloDates = this.dateFuturo - this.dateAgora;
        this.dadosAtualizados = [
            this.zeroAtrasParser(this.diasRestantes()),
            this.zeroAtrasParser(this.horasRestantes()),
            this.zeroAtrasParser(this.minutosRestantes()),
            this.zeroAtrasParser(this.segundosRestantes())
        ];
    }

    inserirTempoRestante() {
        this.valoresNoDisplay.forEach((element, index) => {
            element.innerText = this.dadosAtualizados[index];
        });
    }

    inicializaLoopTempoDisplay() {
        this.loopAtualizacao = setInterval(() => {
            this.atualizaTempoRestante();
            this.inserirTempoRestante();
        }, 1000);
    }

    diasRestantes() {
        return Math.floor(this.intervaloDates / (1000 * 60 * 60 * 24));
    }
    
    horasRestantes() {
        return Math.floor((this.intervaloDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }
    
    minutosRestantes() {
        return Math.floor((this.intervaloDates % (1000 * 60 * 60)) / (1000 * 60));
    }

    segundosRestantes() {
        return Math.floor((this.intervaloDates % (1000 * 60)) / 1000);
    }

    zeroAtrasParser(numero) {
        numero = String(numero); // parseando pra string pra usar charAt
        if(numero.charAt(1) == "") {
            return `0${numero}`;
        }
        return numero;
    }

    adicionarEventListeners() {
        this.botaoIniciarContagem.addEventListener('click', this.salvarValoresInseridos);
    }

    adicionarBinding() {
        this.salvarValoresInseridos = this.salvarValoresInseridos.bind(this)
    }

    inicializar() {
        if (this.inputAno && this.inputMes && this.inputDia &&
            this.valoresNoDisplay.length && this.botaoIniciarContagem) {

            this.adicionarBinding();
            this.adicionarEventListeners();
        }
    }
}

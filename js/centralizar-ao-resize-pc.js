// Pode-se resolver isso só com CSS
export default class CentralizarConteudo {
    constructor(primeiroElemento, ultimoElemento, maxWidth = 500) {
        this.primeiroElemento = document.querySelector(primeiroElemento);
        this.ultimoElemento = document.querySelector(ultimoElemento);
        this.maxWidth = maxWidth;

        this.mudarMargin = this.mudarMargin.bind(this);
        this.init();
    }

    pegarDistancia() {
        const rectPrimeiroElemento = this.primeiroElemento.getBoundingClientRect();
        const reactUltimoElemento = this.ultimoElemento.getBoundingClientRect();
        this.distanciaTopo = Math.floor(rectPrimeiroElemento.top);
        this.distanciaBaixo = Math.floor(rectPrimeiroElemento.bottom);
        setTimeout(() => {
            
        }, 600);
        this.primeiroElemento.style.marginTop = 20 + 'px';
    }

    mudarMargin() {
        if (window.innerWidth <= this.maxWidth) {
            this.pegarDistancia();
        }
    }

    addResizeEvent() {
        window.addEventListener('resize', this.mudarMargin);
    }

    init() {
        if (this.primeiroElemento && this.ultimoElemento) {
            this.addResizeEvent();
        }
    }
}
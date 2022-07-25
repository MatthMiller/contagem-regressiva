export default class MobileZoomBlock {
    constructor() {
        this.head = document.querySelector('head');
        this.init();
    }

    checarPonteiro() {
        this.ponteiroCoarseBool = matchMedia('(pointer:coarse)').matches;
        if(this.ponteiroCoarseBool) {
            this.mudarViewport();
        }
    }

    mudarViewport() {
        const element = this.criarViewportElement();
        this.head.append(element)
    }

    criarViewportElement() {
        this.removeAtualViewportElement();
        const element = document.createElement('meta');
        element.innerHTML = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">`;
        return element;
    }

    removeAtualViewportElement() {
        const metaAntigo = document.querySelector('meta[name=viewport]');
        metaAntigo.remove();
    }

    init() {
        this.checarPonteiro();
    }
}
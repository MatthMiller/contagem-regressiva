import ContagemRegressiva from "./contagem-regressiva.js";
import MobileZoomBlock from "./mobile-input-zoom-block.js";

const contagem = new ContagemRegressiva(
    "#ano",
    "#mes",
    "#dia",
    "[data-unidadeDeTempo]",
    "[data-iniciar-contagem]",
    ".mensagem-erro"
);
const mobileZoomBlock = new MobileZoomBlock();

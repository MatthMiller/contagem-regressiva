import ContagemRegressiva from './contagem-regressiva.js';

const contagem = new ContagemRegressiva(
    '#ano',
    '#mes',
    '#dia',
    '[data-unidadeDeTempo]',
    '[data-iniciar-contagem]',
    '.mensagem-erro'
);
console.log(contagem);
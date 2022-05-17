var totalCursos = document.querySelector(".js-total-de-cursos");
var totalHoras = document.querySelector(".js-total-de-horas");
var totalValor = document.querySelector(".js-total-de-valor");
var botaoConfirmar = document.querySelector('.js-botao-matricula');

var quantidadeCursos = 0;
var quantidadeHoras = 0;
var quantidadeValor = 0;

function adicionaCurso(checkbox) {

    if (checkbox.checked) {
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkbox.value);
        checkbox.getAttribute("preco");
    } else {
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
    }

    habilitarBotao();
    totalCursos.textContent = quantidadeCursos + " curso(s)";
    totalHoras.textContent = quantidadeHoras + " h";
    totalValor.textContent = quantidadeValor + " Reais";

    function habilitarBotao() {
        if (quantidadeCursos > 0) {
            botaoConfirmar.classList.remove("disabled")
        } else {
            botaoConfirmar.classList.add("disable")
        }
    }


}   
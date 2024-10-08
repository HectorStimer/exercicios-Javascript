function operacao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacaoSelecionada = document.getElementById("operacao").value;

    var resultado;

    switch (operacaoSelecionada) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: divisão por zero!";
            }
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function verificarIdade() {

    var idade = parseInt(document.getElementById("idade").value);

        if (idade >= 18) {
            document.getElementById("resultado").innerHTML = "Você é maior de idade.";
        } else {
            document.getElementById("resultado").innerHTML = "Você é menor de idade.";
        }
}

function verificarNumero(){

    var parImpar = parseInt(document.getElementById("parImpar").value);

    if (parImpar % 2 === 0){
        document.getElementById("numeroPar").innerHTML = "Esse numero é par";

    } else{
        document.getElementById("numeroPar").innerHTML = "esse numero é impar";
    }

}

function verificarNega() {
    var posiNega = parseInt(document.getElementById("posiNega").value);

    if (posiNega > 0) {
        document.getElementById("negativo").innerHTML = "Esse número é maior que zero";
    } else if (posiNega === 0) {
        document.getElementById("negativo").innerHTML = "Esse número é igual a zero";
    } else {
        document.getElementById("negativo").innerHTML = "Esse número é menor que zero";
    }
}

function verificarTaboada(){

    var taboada = parseInt(document.getElementById ("taboada").value);
    var resultado = ""; 

    for (let i = 1; i <= 10; i++ ){

        resultado += taboada + " x " + i + " = " + (taboada * i) + "<br>";


    }
    document.getElementById("tabo").innerHTML = resultado;
}


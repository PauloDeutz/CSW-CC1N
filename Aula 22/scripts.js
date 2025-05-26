function calculadora(){
    var numero1 = Number(document.getElementById("pri").value);
    var numero2 = Number(document.getElementById("seg").value);
    var operacao = parseInt(document.getElementById("op").value);
    
    switch (operacao){
        case 1:
            return numero1 + numero2
        break;
        case 2:
            return numero1 - numero2
        break; 
        case 3:
            return numero1 * numero2
        break;
        case 4:
            return numero1 / numero2
        break;
    }
    console.log()
}


function mostrarresultado() {
    var resultado = calculadora();
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}


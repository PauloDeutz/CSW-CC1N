

function calculadora() {
    let dia = Number(document.getElementById("dia").value);
    const mes = document.getElementById("mes").value;
    let ano = Number(document.getElementById("ano").value);

    let datanasc = new Date (mes + '/' + dia + '/' + ano);
    let datahoje = new Date (); 
    let resultado = datahoje.getFullYear() - datanasc.getFullYear(); 

    if (dia < datahoje.getDate() && mes > datahoje.getMonth()){
        resultado--
    };
    


    document.getElementById("resultado").innerHTML = "Você tem " + resultado + " anos"
}



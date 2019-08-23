var pacientes = document
    .querySelectorAll(".paciente");

for (var index = 0; index < pacientes.length; index++) {
    const paciente = pacientes[index];
 
    var colunaPeso = paciente.querySelector(".info-peso");
    var peso = colunaPeso.textContent;
    var colunaAltura = paciente.querySelector(".info-altura");
    var altura = colunaAltura.textContent;
    var colunaImc = paciente.querySelector(".info-imc");

    var pesoValido = true
    var alturaValida = true 

    if(peso <= 0 || peso > 600) {
        pesoValido = false
        colunaPeso.textContent = "Peso Inválido";
        console.log(pesoValido)
    }

    
    if(altura <= 0 || altura > 2.8) {
        pesoValido = false
        colunaAltura.textContent = "Altura Inválida";
        console.log(alturaValida)
    }

    if (alturaValida && pesoValido) {
        colunaImc.textContent = peso/(altura ** 2);
    } else {
        colunaImc.textContent = "valores inválidos";
    }
}




/*    switch (index) {
    case 0:
        colunaNome.style.backgroundColor = "red";
        break;
    case 1:
        colunaNome.style.backgroundColor = "yellow";
        break;
     case 2:
        colunaNome.style.backgroundColor = "green";
        break;
    case 3:
        colunaNome.style.backgroundColor = "pink";
        break;

    case 4:
        colunaNome.style.backgroundColor = "blue";
        break;

}
*/

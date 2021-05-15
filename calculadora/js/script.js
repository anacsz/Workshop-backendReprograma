var ganhoMes =  document.getElementById("ganho-mes")

var horasDia =  document.getElementById("horas-dia")

var resposta = document.getElementById("resposta")


function calcularValorHora(){
    var totalHorasMes = horasDia.valueAsNumber * 22

    var valorHora = (ganhoMes.valueAsNumber/totalHorasMes).toFixed(2)

    resposta.innerText = "R$" + valorHora
}



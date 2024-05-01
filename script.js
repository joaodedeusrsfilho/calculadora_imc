/*
IMC
ABAIXO DE 17 MUITO ABAIXO DO PESO
ENTRE 17 E 18 ABAIXO DO PESO
ENTRE 18,5 E 24,00 PESO NORMAL
ENTRE 25 E 29,99 ACIMA DO PESO

*/

var peso 
var altura
var imc 
var resultado = document.querySelector("#resultado")

function calcularIMC(event){
    event.preventDefault()

    peso = document.querySelector("#peso").value
    altura = document.querySelector("#altura").value

    if(peso === "" || peso === null){
        alert("Digite o peso")
    }else if(altura === "" || altura === null){
        alert("Digite a altura")
    }
 
    imc = peso / (altura*altura)

    if(imc < 17){
        resultado.innerHTML = "<br> Seu IMC está muito abaixo do peso "+imc.toFixed(2)+"!"
    }else if(imc > 17 && imc <19){
        resultado.innerHTML = "<br> Seu IMC está abaixo do peso "+imc.toFixed(2)+"!"
    }else if(imc >=18.5 && imc <24.99){
        resultado.innerHTML = "<br> Seu IMC está com peso normal "
    }else if(imc >=25 && imc <=29.99){
        resultado.innerHTML = "<br> Seu IMC está acima do peso "+imc.toFixed(2)+"!"
    }
    
}
function limpar(){
    resultado.innerHTML = ""
}
function numero(numero){
    let paragrafo = document.getElementById("calculo")
    let tela = paragrafo.innerText
    let resultado
    if(tela=="0"){
        resultado = `${numero}`
    }
    else{
        resultado = `${tela.toString()}${numero}`
    }
    paragrafo.innerText = resultado
}

function ponto(){
    let paragrafo = document.getElementById("calculo")
    let tela = paragrafo.innerText
    let resultado
    if(tela.includes(".")){
        resultado = tela
    }
    else{
        if(tela=="0"){
            resultado = "0."
        }
        else{
            resultado = tela.toString()+"."
        }
    }
    paragrafo.innerText = resultado
}

function limpa(){
    document.getElementById("calculo").innerHTML = 0
}

function operadores(operador){
    let paragrafo = document.getElementById("calculo")
    let tela = paragrafo.innerText
    let ultimo = tela.toString()[tela.length-1]
    let operadores = ["+","-","x","÷","%"]
    let resultado
    if(operadores.includes(ultimo)){
        resultado = tela
    }
    else{
        resultado = `${tela.toString()}${operador}`
    }
    paragrafo.innerText = resultado
}

function calculo(){
    let paragrafo = document.getElementById("calculo")
    let tela = paragrafo.innerText
    tela = tela.replace(/x/g, "*").replace(/÷/g, "/")
    let resultado = eval(tela)
    paragrafo.innerText = resultado
}
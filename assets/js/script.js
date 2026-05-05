/* ============= Variaveis ================ */
let res = 0
let result = document.getElementById('result')
const btnClear = document.getElementById('btn-clear')
const btnPrev = document.getElementById('btn-prev')

const numbers = document.getElementsByClassName('numero')
const operadores = document.getElementsByClassName('operador')

let error = document.getElementById('error')



/* =========== Escrever na tela =========== */
// numeros
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    number.addEventListener('click', () => {
        if (result.innerText != 0) 
            result.textContent += number.value;
        else 
            result.textContent = number.value;
    })
}

// operador
for (let i = 0; i < operadores.length; i++) {
    const operador = operadores[i];

    operador.addEventListener('click', () => {
        if (result.innerText.charAt(result.innerText.length - 1) !== "÷" && 
            result.innerText.charAt(result.innerText.length - 1) !== "+" && 
            result.innerText.charAt(result.innerText.length - 1) !== "-" &&
            result.innerText.charAt(result.innerText.length - 1) !== "x")
            result.textContent += operador.value
    }) 
}


/* ========= Excluir ultimo digito ======= */
const clearLast = () => {
    if (result.innerText.length > 1)
        result.textContent = result.innerText.substring(0, (result.innerText.length - 1))
    else 
        result.textContent = 0
}
btnPrev.addEventListener('click', clearLast)


/* =========== Limpar Resultado =========== */
const clear = () => {
    result.textContent = "0"
}
btnClear.addEventListener('click', clear)




/* =========== Calculos =========== */
const btnCalcular = document.getElementById('igual')

// pegar expressão
const calcular = () => {
    if (result.textContent.charAt(result.textContent.length - 1) !== "+" && 
        result.textContent.charAt(result.textContent.length - 1) !== "-" &&
        result.textContent.charAt(result.textContent.length - 1) !== "x" &&
        result.textContent.charAt(result.textContent.length - 1) !== "÷") {

        let expressao = result.textContent
        expressao = expressao.replaceAll("÷", "/")
        expressao = expressao.replaceAll("x", "*")

        res = eval(expressao)
        result.textContent = res
    } else {
        const errorBox = document.querySelector('.error')
        errorBox.style.display = "flex"
        error.textContent = "Erro ao realizar o calculo!!!"
        result.textContent = 0
    }
}

btnCalcular.addEventListener('click', calcular)






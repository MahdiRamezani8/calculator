const display = document.getElementById('display')
const removeSpaces = str => str.replace(/\s/g, '')
const numButtons = document.querySelectorAll('.btn-num')
const mathSymButtons = document.querySelectorAll('.math-sym')
const resultButton = document.querySelector('.result')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
let endMathSymbolFlag = false

mathSymButtons.forEach(button => {
    button.addEventListener('click', () => mathSymbol(button.innerHTML))
})

numButtons.forEach(button => {
    button.addEventListener('click', () => num(button.innerHTML))
})

resultButton.addEventListener('click', result)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteFunc)

function num(value) {
    display.value += value
    endMathSymbolFlag = false
}

function mathSymbol(value) {
    display.value += ` ${value} `
    endMathSymbolFlag = true
}

function result() {
    if (!display.value || endMathSymbolFlag) {
        return
    }
    display.value = eval(display.value)
}

function clear() {
    display.value = ''
}

function deleteFunc() {
    const displayValue = display.value
    const cutedValue = displayValue.substr(0, (displayValue.length - 1));
    display.value = cutedValue
}
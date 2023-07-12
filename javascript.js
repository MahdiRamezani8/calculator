var $ = document
var display = $.getElementById('display')
const removeSpaces = str => str.replace(/\s/g, '')
var cMathSymbol = 0
var cNegativeSymbol = 0
function num(value) {
    display.value += value
    cMathSymbol = 0
    cNegativeSymbol = 0
}
function mathSymbol(value) {
    if (cMathSymbol < 1) {
        if (display.value != "") {
            display.value += " " + value + " "
        } else {
            alert("Firt Enter A Number")
        }
    }
    cMathSymbol = cMathSymbol + 1
}
function negativeSymbol(value) {
    if (cNegativeSymbol < 1) {
        display.value += " " + value + " "
    }
    cNegativeSymbol = cNegativeSymbol + 1
}
function clearFunc() {
    display.value = ""
    cMathSymbol = 0
    cNegativeSymbol = 0
}
function resultFunc() {
    if (display.value == "") {
        alert("Enter A Number")
    } else {
        display.value = eval(removeSpaces(display.value))
    }
    cMathSymbol = 0
    cNegativeSymbol = 0
}
function deleteFunc() {
    var sum = display.value
    var sumLenght = sum.length
    var cut = sum.substr(0, sumLenght - 1);
    display.value = cut
    cMathSymbol = 0
    cNegativeSymbol = 0
}
let display = document.querySelector(".display");

let btnPlus = document.querySelector("#btnPlus");
let btnMinus = document.querySelector("#btnMinus");
let btnMultiply = document.querySelector("#btnMultiply");
let btnDevide = document.querySelector("#btnDevide");

const input1 = document.querySelector("#number1")
const input2 = document.querySelector("#number2")

function onPlusClick() {
  let num1 = Number(input1.value)
  let num2 = Number(input2.value)

  display.innerText = num1 + num2
}

function onMinusClick() {
  let num1 = Number(input1.value)
  let num2 = Number(input2.value)
  let result = num1 - num2

  display.innerText = result
}

function onMultiplyClick() {
  let num1 = Number(input1.value)
  let num2 = Number(input2.value)
  let result = num1 * num2

  display.innerText = result
}

function onDevideClick() {
  let num1 = Number(input1.value)
  let num2 = Number(input2.value)
  let result = num1 / num2

  display.innerText = result
}

btnPlus.addEventListener('click', onPlusClick)
btnMinus.addEventListener('click', onMinusClick)
btnMultiply.addEventListener('click', onMultiplyClick)
btnDevide.addEventListener('click', onDevideClick)
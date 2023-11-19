const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const sum = document.getElementById('sum');
const min = document.getElementById('min');
const equil = document.getElementById('equil');
const result = document.getElementById('result');
let active = '+'

sum.onclick = function() {
    active = '+'
}
min.onclick = function() {
    active = '-'
}

equil.onclick = function() {
    if (active == '+') {
        const summa = Number(input1.value) + Number(input2.value)
        result.textContent = summa
    }
    else if (active == '-') {
        const razn = Number(input1.value) - Number(input2.value)
        result.textContent = razn
    }
}
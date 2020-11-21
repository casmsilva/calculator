let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function somar(){
    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    } else {
        let result = Number(n1.value) + Number(n2.value)
        res.innerHTML =` ${n1.value} + ${n2.value} = ${result}`
    }
}

function subtrair(){
    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    } else {
        let result = Number(n1.value) - Number(n2.value)
        res.innerHTML =` ${n1.value} - ${n2.value} = ${result}`
    }
}

function multiplicar(){
    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    } else {
        let result = Number(n1.value) * Number(n2.value)
        res.innerHTML =` ${n1.value} x ${n2.value} = ${result}`
    }
}

function dividir(){
    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    } else {
        let result = Number(n1.value) / Number(n2.value)
        res.innerHTML =` ${n1.value} / ${n2.value} = ${result}`
    }
}

function exponenciar(){
    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    } else {
        let result = Number(n1.value) ** Number(n2.value)
        res.innerHTML =` ${n1.value} elevado a ${n2.value} = ${result}`
    }
}
function fatorar(){
    if(n1.value.length != 0 && n2.value.length != 0){
        fat = 1
        fat2 = 1
        
        for(c = Number(n1.value); c>1; c--) {
            fat *= c
        }
        for(c = Number(n2.value); c>1; c--) {
            fat2 *= c
        }

        res.innerHTML = `Fatorial de ${n1.value} = ${fat} e fatorial de ${n2.value} = ${fat2}`
    } else if (n1.value.length != 0 && n2.value.length == 0 ){
        fat = 1        
        for(c = Number(n1.value); c>1; c--) {
            fat *= c
        }
        res.innerHTML = `Fatorial de ${n1.value} = ${fat}`
    } else if (n1.value.length == 0 && n2.value.length != 0 ){
        fat = 1        
        for(c = Number(n2.value); c>1; c--) {
            fat *= c
        }
        res.innerHTML = `Fatorial de ${n2.value} = ${fat}`
    } else if (n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    }
}
function dividir2(){
    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('[Error] Insira números válidos. Espaços em branco ou carácteres NaN não serão permitidos.')
    } else {
        let result = Number(n1.value) % Number(n2.value)
        res.innerHTML =` ${n1.value} / ${n2.value} = ${result}`
    }
}

function zerar(){
    res.innerHTML = 'Seu resultado aparecerá aqui!'
}

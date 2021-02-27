// Carne 400g por pessoa/ +6h 650g
// cerveja 1200ml por pessoa/ +6h 2000l
// softdrink 1000l/ 6h 1500l
// pão de alho 2 por pessoa / +6h 4 por pessoa
// criança * 0.5
// arroz 100 g por pessoa / 150g
let btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
    let adultos = document.getElementById("adultos")
    let criancas = document.getElementById("criancas")
    let horas = document.getElementById("horas")

    let carne = calcCarne(adultos.value,criancas.value,horas.value)
    let cerveja = calcCerveja(adultos.value, horas.value)
    let bebida = calcBebida(adultos.value,criancas.value,horas.value)
    let alho = calcAlho(adultos.value,criancas.value,horas.value)
    let arroz = calcArroz(adultos.value,criancas.value,horas.value)

    console.log(carne);

    // Resultado
    let result = document.querySelectorAll("h3")

    if(carne >= 1000){
        result[0].innerHTML = carne/1000 + "kg de Carne"
    }else{
        result[0].innerHTML = carne + "g de Carne"
    }
    result[1].innerHTML = cerveja/1000 + "L de Cerveja"
    result[2].innerHTML = bebida/1000 + "L de Refrigerante"
    result[3].innerHTML = alho + " Pães de Alho"
    if(arroz >= 1000){
        result[4].innerHTML = arroz/1000 + "kg de Arroz"
    }else{
        result[4].innerHTML = arroz + "g de Arroz"
    }
    
})

function calcCarne(a, c, h){
    if(h<6){
        return (a * 400) + (c * 200)
    }else{
        return (a * 650) + (c * 325)
    }
}

function calcCerveja(a,h){
    if(h<6){
        return (a * 1200)
    }else{
        return (a * 2000)
    }
}

function calcArroz(a, c, h){
    if(h<6){
        return (a * 100) + (c * 50)
    }else{
        return (a * 150) + (c * 75)
    }
}

function calcAlho(a, c, h){
    if(h<6){
        return (a * 2) + (c * 1)
    }else{
        return (a * 5) + (c * 2)
    }
}

function calcBebida(a, c, h){
    if(h<6){
        return (a * 1000) + (c * 500)
    }else{
        return (a * 1500) + (c * 750)
    }
}
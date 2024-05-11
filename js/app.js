
let diaSemana = 10

let div = document.getElementById('resultado')

/*
if(diaSemana == 0){
    div.innerHTML = "Domingo"
}else if (diaSemana == 1){
    div.innerHTML = "Segunda"
}else if (diaSemana == 2){
    div.innerHTML = "Terça"
}else if (diaSemana == 3){
    div.innerHTML = "Quarta"
}else if (diaSemana == 4){
    div.innerHTML = "Quinta"
}else if (diaSemana == 5){
    div.innerHTML = "Sexta"
}else if (diaSemana == 6){
    div.innerHTML = "Sábado"
}else{
    div.classList.add ('text-danger') 
    div.innerHTML = "Dia não encontrado"

    //document.getElementById('resultado').classList.remove('NomeDaClasse')
}   */

/*
if (diaSemana == 0) {
    div.innerHTML == "Domingo"
} else {
    if (diaSemana == 1) {
        div.innerHTML = "Segunda"
    } else {
        if (diaSemana == 2) {
            div.innerHTML = "Terça"
        } else {
            if (diaSemana == 3) {
                div.innerHTML = "Quarta"
            } else {
                if (diaSemana == 4) {
                    div.innerHTML = "Quinta"
                } else {
                    if (diaSemana == 5) {
                        div.innerHTML = "Sexta"
                        teste('FUI')
                    } else {
                        if (diaSemana == 6) {
                            div.innerHTML = "Sábado"
                        } else {
                            div.innerHTML = "Dia não encontrado"
                            div.classList.add('text-danger')
                        }
                    }
                }
            }
        }
    }
}

function teste(texto){
    alert(texto)
}

*/

switch(diaSemana){
    case 0:
        div.innerHTML = "Domigo"
        break
    case 1:
        div.innerHTML = "Segunda"
        break
    case 2:
        div.innerHTML = "Terça"
        break
    case 3:
        div.innerHTML = "Quarta"
        break
    case 4:
        div.innerHTML = "Quinta"
        break
    case 5:
        div.innerHTML = "Sexta"
        break
    case 6:
        div.innerHTML = "Sábado"
        break
    default:
        div.innerHTML = "Não encontrado"
        div.classList.add('text-danger')
        break
}


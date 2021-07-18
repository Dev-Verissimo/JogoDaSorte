let tela1 = document.getElementById("abertura")
let contador1 = 0
let contador2 = 0
let contador3 = 0

let segundaTela = document.getElementById("outra")

let pontuacaoUsuario = 0
let exibirPontuacaoUsuario = document.getElementById("resulatdodoUsuario")
exibirPontuacaoUsuario.innerHTML = pontuacaoUsuario

let buttomTelaInicial = document.getElementById("button1")
buttomTelaInicial.addEventListener('click', function () {
    tela1.style.display = 'none'
    telafinal.style.display = 'none'
    console.log("ola")
})

buttomTelaInicial.addEventListener('mouseover' , function () {
    buttomTelaInicial.innerHTML = 'Vai encara?'
})

buttomTelaInicial.addEventListener('mouseout' , function () {
    buttomTelaInicial.innerHTML = 'Volte aqui!'
})

// -------------------------- USUÁRIO -------------------

let escolhaUsuarioNumber = null
let escolhaDoUsuario = null
let imagemPedra = document.querySelector("#resultadousuario>img")

let usuarioPedra = document.getElementById("pedra")
usuarioPedra.addEventListener('click' , function () {
    contador1++
    escolhaDoUsuario = "pedra"
    imagemPedra.style.display = 'inline'
    imagemPapel.style.display = 'none'
    imagemTesoura.style.display = 'none'
    respostaPCNumber = Math.floor(Math.random() * (4 - 1)) + 1
    escolhaUsuarioNumber = 1
    chamarPC()
    contador()

})
let imagemPapel = document.querySelector("#resultadousuario>img:nth-child(2)")
let usuarioPapel = document.getElementById("papel")
usuarioPapel.addEventListener('click' , function () {
    contador2++
    escolhaDoUsuario = "papel"
    imagemPapel.style.display = 'inline'
    imagemPedra.style.display = 'none'
    imagemTesoura.style.display = 'none'
    respostaPCNumber = Math.floor(Math.random() * (4 - 1)) + 1
    escolhaUsuarioNumber = 2
    chamarPC()
    contador()
})

let imagemTesoura = document.querySelector("#resultadousuario>img:nth-child(3)")
let usuarioTesoura = document.getElementById("tesoura")
usuarioTesoura.addEventListener('click', function () {
    contador3++
    escolhaDoUsuario = 'tesoura'
    imagemTesoura.style.display = 'inline'
    imagemPapel.style.display = 'none'
    imagemPedra.style.display = 'none'
    respostaPCNumber = Math.floor(Math.random() * (4 - 1)) + 1
    console.log(respostaPCNumber)
    escolhaUsuarioNumber = 3
    chamarPC()
    contador()
})

// ----------usuário fim-----------------------------------


//  ------------máquina -----------------------------------
let pontuacaoPC = 0
let exibirPontuacaoPC = document.getElementById("resultadodoPC")
exibirPontuacaoPC.innerHTML = pontuacaoPC

let respostafinalPC = null

let respostaPC1 = document.querySelector("#resultadoPC>img:nth-child(1)")
let respostaPC2 = document.querySelector("#resultadoPC>img:nth-child(2)")
let respostaPC3 = document.querySelector("#resultadoPC>img:nth-child(3)")


let respostaPCNumber 

function chamarPC() {
    switch (respostaPCNumber) {
        case 1:
            respostaPC1.style.display = 'inline'
            respostaPC2.style.display = 'none'
            respostaPC3.style.display = 'none'
            respostafinalPC = 'pedra'
            break;
        case 2:
            respostaPC2.style.display = 'inline'
            respostaPC1.style.display = 'none'
            respostaPC3.style.display = 'none'
            respostafinalPC = 'papel'
            break;
        case 3:
            respostaPC3.style.display = 'inline'
            respostaPC1.style.display = 'none'
            respostaPC2.style.display = 'none'
            respostafinalPC = 'tesoura'
            break;
        default:
            console.log("erro")
            break;
    }resultado()
}


// --------------- fim resposta pc -----------------------

function resultado() {
    if (respostafinalPC === escolhaDoUsuario) {
        ++pontuacaoUsuario
        ++pontuacaoPC
        console.log("empate")
        exibirPontuacaoUsuario.innerHTML = pontuacaoUsuario
        exibirPontuacaoPC.innerHTML = pontuacaoPC
    }else if(respostaPCNumber>escolhaUsuarioNumber){
        ++pontuacaoPC
        console.log(pontuacaoPC)
        console.log("PC venceu")
        exibirPontuacaoUsuario.innerHTML = pontuacaoUsuario
        exibirPontuacaoPC.innerHTML = pontuacaoPC
    }else if(escolhaUsuarioNumber>respostaPCNumber){
        ++pontuacaoUsuario
        console.log(pontuacaoUsuario)
        console.log("usuario venceu")
        exibirPontuacaoUsuario.innerHTML = pontuacaoUsuario
    } 
}

function contador() {
    if (contador1+contador2+contador3 === 4) {
        console.log("fim")
        telafinal.style.display = 'flex'
        telafinal.style.zIndex = 2
        segundaTela.style.display = 'none'
        if (pontuacaoUsuario>pontuacaoPC) {
            telafinal.appendChild(h2fim).innerHTML += '<br>Parabéns você nos venceu'
        }else
        telafinal.appendChild(h2fim).innerHTML += '<br>Bom, não foi dessa vez'
    }
}
// exibirPontuacaoUsuario.innerHTML = pontuacaoUsuario


let telafinal = document.getElementById("fim")
let h2fim = document.createElement("div")
// telafinal.appendChild(h2fim).innerHTML += '<br>oiiii'
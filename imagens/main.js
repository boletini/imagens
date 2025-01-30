"use strict"

const botaoTrocarPais = document.getElementById('trocar-pais')

function trocarPais(){
    const cor = document.getElementById('país').value
    document.documentElement.style.setProperty('--imagem-fundo', pais)
}
    

botaoTrocarPais.addEventListener('click', trocarPais)

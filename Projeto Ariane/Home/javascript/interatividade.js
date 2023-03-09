//---Botões---
const btnEvolucoes = document.querySelector('.option--10');
const btnEvolucao = document.querySelector('.option--evolucao');
const btnEvolucaoLPP = document.querySelector('.option--evolucao-LPP');

//---Containers---
const containerOptions10 = document.querySelector('.options10');
const containerEvolucao = document.querySelector('.container-evolucao');
const conatinerEvolucaoLPP = document.querySelector('.container-evolucao-lpp');

btnEvolucoes.addEventListener('click', () => {
    if(containerOptions10.classList.contains('desativado-Option')) {
        containerOptions10.classList.toggle('desativado-Option')
    } else {
        containerOptions10.classList.add('desativado-Option')
        containerEvolucao.classList.add('desativado-Container')
        conatinerEvolucaoLPP.classList.add('desativado-Container')
    }
});

btnEvolucao.addEventListener('click', () => {
    if(containerEvolucao.classList.contains('desativado-Container')) {
        containerEvolucao.classList.toggle('desativado-Container')
    } else {
        containerEvolucao.classList.add('desativado-Container')
    }

    if(conatinerEvolucaoLPP.classList.contains('desativado-Container') == false) conatinerEvolucaoLPP.classList.add('desativado-Container')
        

});

btnEvolucaoLPP.addEventListener('click', () => {
    if(conatinerEvolucaoLPP.classList.contains('desativado-Container')) {
        conatinerEvolucaoLPP.classList.toggle('desativado-Container')
    } else {
        conatinerEvolucaoLPP.classList.add('desativado-Container')
    }

    if(containerEvolucao.classList.contains('desativado-Container') == false) containerEvolucao.classList.add('desativado-Container')
});

document.addEventListener('DOMContentLoaded', () => {
    let nome = document.querySelector('.nome')
    let idade = document.querySelector('.idade')
    let genero = document.querySelector('.genero')
    let btn = document.querySelector('.btn')
    let infos = document.querySelector('.infos')
    let arr = []

    btn.addEventListener('click', () => {
        const pessoas = {
            nome: nome.value,
            idade: idade.value,
            genero: genero.value
        }


        arr.push(pessoas)

        infos.innerHTML= ''
        arr.forEach((element, index) => {
            infos.innerHTML += `

            <p>Chegada ${index + 1}º</p>
            <p>Nome: ${element.nome}</p>
            <p>Idade: ${element.idade}</p>
            <p>Gênero: ${element.genero}</p>
            <hr>
            `

        });
    })




})


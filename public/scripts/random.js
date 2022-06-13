let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let gender = document.getElementsByName('genero')
let res = document.getElementById('res')

function calcular() {

    let genero = ''
    let sexo = ''
    if (gender[0].checked) {
        genero = 'masc'
        sexo = 'Masculino'
    } else if (gender[1].checked) {
        genero = 'fem'
        sexo = 'Feminino'
    } else {
        genero = 'indefinido'}
    
    if (nome.value === '' || idade.value === '' || genero === 'indefinido') {
        alert('Preencha os campos e tente novamente')
        nome.value = ''
        idade.value = ''
        genero = ''
        gender.values = ``
    } else {
        function randomNum(genero) {

            let n = null
            if (genero == 'masc') {
                n = Number.parseInt(Math.random() * 100)
                n++
            } else {
                n = Number.parseInt(Math.random() * 100)
                n++
                while (n > 70) {
                    n = Number.parseInt(Math.random() * 100)
                    n++
                }

            }
            // console.log(n)
            return n
        }

        function randomP() {

            let p = null
            p = Number.parseInt(Math.random() * 10)
            p++
            while (p > 7) {
                p = Number.parseInt(Math.random() * 10)
                p++
            }
            // console.log(p)

            return p
        }

        nPecados = randomP()

        let pecados = ['gula', 'avareza', 'luxuria', 'ira', 'inveja', 'preguiça', 'orgulho']

        function randomPec(qtdString, arrayStrings) {
            let arrayCopy = arrayStrings
            let arraySorted = []
            let n = nPecados

            for (let index = 0; index < qtdString; index++) {
                let string = arrayCopy[Math.floor(Math.random() * arrayCopy.length)]
                arrayCopy.splice(arrayCopy.indexOf(string), 1)
                arraySorted.push(string)
                // console.log(arrayCopy)

            }

            return arraySorted
        }
        let pecs = randomPec(nPecados, pecados)
        // console.log(pecs)

        res.innerHTML = ``
        res.innerHTML += `<div id="container">
    <h2 class="h">Nome:<span>  ${nome.value} </span></h2>
    <h2 class="h">Sexo:<span>  ${sexo} </span></h2>
    <h2 class="h">Idade:<span>  ${idade.value} </span></h2>
    <h2 class="h">Força:<span>  ${randomNum()} </span></h2>
    <h2 class="h">Inteligência:<span>  ${randomNum('masc')} </span></h2>
    <h2 class="h">Número de Pecados:<span>  ${nPecados}</span></h2>
    <h2 class="h">Pecados:<span>  ${pecs}</span></h2>
    <h2 class="h">Beleza:<span>  ${randomNum()}</span></h2>
</div>`

        // console.log(genero)
        randomPec()

    }
}






import { encrypt, decrypt } from './dictionary/alura-code.js'

const field = document.getElementById('text-field')
const result = document.getElementById('result')
const modes = document.getElementById('mode-set')

let mode = 'encrypt'
let translation = ''

function translate() {
    if(mode == 'encrypt') {
        translation = encrypt(field.value)
    } else {
        translation = decrypt(field.value)
    }
    
    result.innerHTML = (translation == '') ? `Nada de interessante aqui...` : translation
}

field.addEventListener('keyup', () => translate())

document.getElementById('toggle-mode').addEventListener('click', () => {
    mode = (mode == 'encrypt') ? 'decrypt' : 'encrypt'
    let change = translation
    translation = field.value
    field.value = change
    modes.classList.toggle('flex-row-reverse')
    translate()
})

document.getElementById('clear').addEventListener('click', () => {
    field.value = ''
    translate()
})

document.getElementById('copy').addEventListener('click', () => {
    if (translation != '') {   
        navigator.clipboard.writeText(translation);
        alert('Texto copiado')
    }
})

document.getElementById('toggle-theme').addEventListener('click',() => {
    if (document.body.getAttribute('data-bs-theme') == 'dark') {
        document.body.setAttribute('data-bs-theme','light')
    } else {
        document.body.setAttribute('data-bs-theme','dark')
    }
})

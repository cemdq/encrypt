const field = document.getElementById('text-field')
const result = document.getElementById('result')
let mode = 'encriptado'

function encrypt(str) {
    let encrypted = str.replaceAll('a', 'enter').replaceAll('e', 'imes').replaceAll('i', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')

    return encrypted
}

function binaryAgent(str) {
    let binString = ''
    
    str.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2))
    });
    
    return binString
}

field.addEventListener('keyup', () => {
    let encrypted = binaryAgent(field.value)

    result.innerHTML = (encrypted == '') ? `Digite seu texto no campo ao lado e ele aparecera ${mode} aqui como em um passe de mágica ✨` : encrypted
})
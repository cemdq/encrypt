export { encrypt, decrypt }

function encrypt( str ) {
    const substitutionMap = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }

    let encrypted = str.replace(/[aeiou]/g, match => substitutionMap[match])

    return encrypted;
}

function decrypt( str ) {
    const substitutionMap = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u' 
    }

    let decrypted =  str.replace(/(enter|imes|ai|ober|ufat)/g, match => substitutionMap[match])

    return decrypted;
}
export { encrypt, decrypt }

function encrypt( str ) {
    const substitutionMap = {
        'a': 'enter',
        'e': 'imes',
        'i': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }

    let encrypted = str.replace(/[aeiou]/g, match => substitutionMap[match])

    return encrypted;
}

function decrypt( str ) {
    const substitutionMap = {
        'enter': 'a',
        'imes': 'e',
        'ai': 'i',
        'ober': 'o',
        'ufat': 'u' 
    }

    let decrypted =  str.replace(/(enter|imes|ai|ober|ufat)/g, match => substitutionMap[match])

    return decrypted;
}
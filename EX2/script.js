const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
const numRegex = /\(\d\d\)\s\d\d\d\d-\d\d\d\d/

function verifyEmail() {
    let email;
    email = cadastro.email.value;
    if (emailRegex.test(email)) {
        cadastro.email.style = 'border-color: green!important;';
        return true;
    } else
        if (email === '') {
            document.querySelector('#email').removeAttribute('style');
            return false;
        } else {
            cadastro.email.style = 'border-color: red!important;';
            return false;
        }

}

function verifyNumber() {
    let numero;
    numero = cadastro.numero.value;
    if (numRegex.test(numero)) {
        cadastro.numero.style = 'border-color: green!important;';
        return true;
    } else
        if (numero === '') {
            document.querySelector('#numero').removeAttribute('style');
            return false;
        } else {
            cadastro.numero.style = 'border-color: red!important;';
            return false;
        }
}

function verify() {
    let nome = cadastro.nome.value;
    let email = cadastro.email.value;
    let numero = cadastro.numero.value;
    let senha = cadastro.senha.value;
    if (nome !== '' && email !== '' && numero !== '' && senha !== '') {
        if (emailRegex.test(email) && numRegex.test(numero)) {
            document.querySelector('#enviar').disabled = false;
        }
    } else {
        document.querySelector('#enviar').disabled = true;
    }
}

function clean() {
    document.querySelector('#numero').removeAttribute('style');
    document.querySelector('#email').removeAttribute('style');
}
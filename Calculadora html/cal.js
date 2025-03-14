var valorPainel, val1, val2, oper

function addValor(num){
    this.valorPainel = Calculadora.resultado.value;
    if(valorPainel==='0'){
        Calculadora.resultado.value = num;
        this.valorPainel= num
    }else{
        Calculadora.resultado.value = valorPainel + num;
        this.valorPainel= valorPainel + num
    }
}


function operador(oper){
    this.valorPainel = Calculadora.resultado.value;
    if(stringToNum().length==2){
        result();
        this.valorPainel = Calculadora.resultado.value;
    }
    this.oper=oper;
    val1 = Number(Calculadora.resultado.value);
    Calculadora.resultado.value = valorPainel + oper;
    this.valorPainel= valorPainel + oper;
}

function result(){
    if(oper==null){
        alert("Voce deve digitar um operador!")
        return;
    }
    if(Number(stringToNum()[1]==0)){
        alert("Voce deve digitar um numero para soma")
        return;
    }
    val2 = Number(stringToNum()[1]);

    let soma;
    switch (oper) {
        case '+':
            soma = val1+val2;
            Calculadora.resultado.value=String(soma)
            break;
        case '-':
            soma = val1-val2;
            Calculadora.resultado.value=String(soma)
            break;
        case '*':
            soma = val1*val2;
            Calculadora.resultado.value=String(soma)
            break;
        case '/':
            soma = val1/val2;
            Calculadora.resultado.value=String(soma)
            break;
        default:
            alert("ERRO");
    }

}
function limpar(){
    this.valorPainel = 0;
    oper = null;
    val1 = null;
    val2 = null;
    Calculadora.resultado.value = " ";
}
function apagarUltimo(){
    this.valorPainel = Calculadora.resultado.value.slice(0,-1);
    Calculadora.resultado.value = this.valorPainel
}

function stringToNum(){
    var numeros = valorPainel.split(oper);
    return numeros;
}
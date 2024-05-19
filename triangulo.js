function parOuNao(numero){ 
    return numero % 2 === 0;
}

function triangulo(numero){
    if (isNaN(numero) || !isFinite(numero) || numero <= 2 || !Number.isInteger(numero)){
        return console.log('A entrada deve ser um número inteiro positivo maior ou igual a 3.');
    }
    if(parOuNao(numero)){
        return console.log('Digite um numero impar');
    }

    let arrayNumero = []; 

    for(let i = 1; i <= numero; i++){
        arrayNumero.push(i);
    }

    const quantidadeDePassos = (numero - 1)/2;
    let indiceUltimoElemento  = arrayNumero.length - 1; 
    let indicePrimeiroElemento = 0;
    
    for(let i = 0; i <= quantidadeDePassos; i++){
        console.log(arrayNumero.join(' '));

        // Remover visualmente os elementos substituindo por espaços
        arrayNumero[indiceUltimoElemento ] = ' ';
        indiceUltimoElemento--;

        arrayNumero[indicePrimeiroElemento] = ' ';
        indicePrimeiroElemento++; 
    }

}
triangulo(27);

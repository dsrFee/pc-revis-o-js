// Desconto em compra
// Regra de negócios:
// - se valorCompra >= 100 -> 10% de desconto
// - se valorCompra <100 -> sem desconto
//Cria uma função que execute isso!!

let escopoGlobal = 10 // escopo global

function validaDesconto(valorCompra) {
    let desconto = 0 // escopo de função
    
    if(valorCompra >= 100){
        desconto = valorCompra * 0.10
    }
    
    valorFinal = valorCompra - desconto

    return {
        valorCompra,
        desconto,
        valorFinal
    }
}

console.log(validaDesconto(1200));


// console.log(chocolate);
// console.log(desconto);


let arvore = {
    left: {
        left: {
            left: undefined,
            right: undefined,
            value: 'Goiaba'
        },
        right: {
            left: undefined,
            right: undefined,
            value: 'Limão'
        },
        value: 'Morango'
    },
    right: {
        left: undefined,
        right: {
            left: undefined,
            right: {
                left: {
                    left: undefined,
                    right: undefined,
                    value: 'Banana'
                },
                right: {
                    left: undefined,
                    right: undefined,
                    value: 'Cebola'
                },
                value: 'Laranja'
            },
            value: 'Abacaxi'
        },
        value: "Pera"
    },
    value: 'Maçã'
}



function localiza(valor, tree) {
    let caminho = [];
    while (caminho[caminho.length - 1] !== valor) {
        caminho.push(tree.value)
    }
    console.log(caminho)
}

localiza('Goiaba', arvore)
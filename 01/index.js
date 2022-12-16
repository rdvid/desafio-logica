const array = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

const arrayOrdenado = array.sort((a, b) => {
    return a - b;
})

console.log(arrayOrdenado)
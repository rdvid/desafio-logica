const array = [1, 15, 2, 7, 2, 5, 7, 1, 4];

const soma = (x) => {
    let array = [1, 15, 2, 7, 2, 5, 7, 1, 4];
    let result = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] + array[j] === x){
                result = true;
            }
        }
    }

    return result;
}

console.log(soma(5))
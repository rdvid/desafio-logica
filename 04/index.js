const array = [9, 2, 3, 1, 4]
array.sort((a, b) => {
    return a - b;
});
const maiorNumero = array[array.length -1];

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j] !== i){
            array.push()
        }
        
    }
}

console.log(array)




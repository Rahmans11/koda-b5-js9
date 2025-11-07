function prossesArray(input, callback){
    let output = [];
    for(let i = 0; i < input.length; i++ ){
        output[i] = callback(input[i])
    }
    return output;
}

const showNumber = num => `Number: ${num}`;
const makeDollar = num => `$${num}`;
const addFive = num => num + 5;

const numbers = [1, 2, 3, 4, 5];

console.log(prossesArray(numbers, showNumber));
console.log(prossesArray(numbers, makeDollar));
console.log(prossesArray(numbers, addFive));
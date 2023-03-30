const numbers = [2, 3, 4, 5, 6, 7];
// const output = [];

// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// -----------------or-----------

const result = numbers.map(X => X * X);


const result2 = numbers.filter(X => X > 4);
console.log(result, result2);
import addBinary from '.';

let result: string;
let answer: string;

// result = addBinary2('11', '1');
// answer = '100';
// console.info('--->', result, '100', result === answer, '\n');

// result = addBinary2('1010', '1011');
// answer = '10101';
// console.info('--->', result, '10101', result === answer, '\n');

// result = addBinary2('11111', '11111');
// answer = '100000';
// console.info('--->', result, '100000', result === answer, '\n');

// result = addBinary2('11111', '0');
// answer = '11111';
// console.info('--->', result, '11111', result === answer, '\n');

// result = addBinary2('0', '11111');
// answer = '11111';
// console.info('--->', result, '11111', result === answer, '\n');

// result = addBinary2('11110', '1');
// answer = '11111';
// console.info('--->', result, '11111', result === answer, '\n');

result = addBinary(
  '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
  '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
);
answer =
  '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000';
console.info('--->', result, result === answer, '\n');
